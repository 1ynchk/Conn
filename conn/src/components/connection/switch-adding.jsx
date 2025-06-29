import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import { isSwitchUnique } from "../../requests/connection/is-switch-unique"

const SwitchAdding = (props) => {

    const {
        setSwitch,
        isSwitch
    } = props

    const [allowedSwitches, setAllowedSwitches] = useState([])
    const [switchComponent, setSwitchComponent] = useState(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (switchComponent != null
                && switchComponent.length != 0
                && typeof (isSwitch) != 'object') {
                isSwitchUnique({ 'switch': switchComponent })
                    .then(result => {
                        setAllowedSwitches(result.data)
                    })
            } else {
                setAllowedSwitches([])
            }
        }, 1000)

        return () => clearTimeout(timeout)
    }, [switchComponent])

    useEffect(() => {
        if (typeof (isSwitch) == 'object' && isSwitch != null) {
            setSwitchComponent(`${isSwitch.name}`)
        }
    }, [])

    return (
        <motion.div
            className='tabpage__container' >
            <div className='tabpage__title'>
                Введите название коммутатора:
            </div>
            <input
                onChange={(e) => {
                    setSwitchComponent(e.target.value)
                    if (typeof (isSwitch) == 'object') {
                        setSwitch(e.target.value)
                    }
                }}
                value={switchComponent == null ? '' : switchComponent}
                placeholder='Switch Ивановская 3'
                className='common_input'
                type='text' />

            {
                allowedSwitches.length != 0 && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='connections-list'>
                            {
                                allowedSwitches.map((el, ind) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setSwitch({ id: el.id, name: el.name, model: el.model, ports: el.ports })
                                                setSwitchComponent(`${el.name}`)
                                                setAllowedSwitches([])
                                            }}
                                            key={ind}
                                            className='allowed-connection'>
                                            <div
                                                className='allowed-connection-name'>
                                                {el.name}
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </motion.div>
                    </AnimatePresence>
                )
            }
        </motion.div >
    )
}

export default SwitchAdding