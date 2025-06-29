import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { isMacUnique } from '../../requests/terminal/is-mac-unique';
import { isConnectionUnique } from '../../requests/terminal/is-connection-unique'

const AddConnection = (props) => {

    const {
        choisenTerminal,
        choisenMacSR,
        choisenMacSRTrue,
        setConnection,
        addConnection,
        givenTo,
        giveNameToTerminal
    } = props

    const [allowedConnections, setAllowedConnections] = useState([])
    const [connectionComponent, setConnectionComponent] = useState(null)

    useEffect(() => {
        if (typeof(addConnection) == 'object' && addConnection != null) {
            setConnectionComponent(`${addConnection.name} ${addConnection.addr}`)
        }
    }, [])

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (
                connectionComponent != null 
                && connectionComponent != undefined 
                && connectionComponent.length != 0
                && typeof(addConnection) != 'object'
                && typeof(addConnection.id) != 'number'
            ) {
                isConnectionUnique({ "connection": connectionComponent })
                    .then(result => setAllowedConnections(result.data))
            } else {
                setAllowedConnections([])
            }

        }, 1000)

        return () => clearTimeout(timeout)

    }, [connectionComponent])

    return (
        <motion.div
            className='tabpage__container'
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                padding:
                    choisenMacSRTrue == false
                        || choisenMacSR == null
                        || choisenMacSR.length == 0
                        || giveNameToTerminal == null
                        || giveNameToTerminal.length == 0
                        || givenTo == null
                        || givenTo == "Никто не выбран"
                        ? 10 : 0,
                backgroundColor:
                    choisenMacSRTrue == false
                        || choisenMacSR == null
                        || choisenMacSR.length == 0
                        || giveNameToTerminal == null
                        || giveNameToTerminal.length == 0
                        || givenTo == null
                        || givenTo == "Никто не выбран"
                        ? "#808080" : "#ffffff",
                y: choisenTerminal != null ? 0 : 10
            }}>
            <div className='tabpage__title'>
                Введите подключение:
            </div>
            <input
                onChange={(e) => {
                    setConnectionComponent(e.target.value)
                    if (typeof(addConnection) == 'object') {
                        setConnection(e.target.value)
                    }
                }}
                placeholder='ivanov'
                className='common_input'
                value={connectionComponent == null ? '' : connectionComponent}
                type='text'
                disabled={
                    choisenMacSRTrue == false
                        || choisenMacSR == null
                        || choisenMacSR.length == 0
                        || giveNameToTerminal == null
                        || giveNameToTerminal.length == 0
                        || givenTo == null
                        || givenTo == "Никто не выбран" ? true : false} />

            {
                allowedConnections.length != 0 &&
                choisenMacSRTrue != false
                && choisenMacSR != null
                && choisenMacSR.length != 0
                && giveNameToTerminal != null
                && giveNameToTerminal.length != 0
                && givenTo != null
                && givenTo != "Никто не выбран" &&
                (
                    <AnimatePresence>
                        <motion.div

                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='connections-list'>
                            {
                                allowedConnections.map((el, ind) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setConnection({ id: el.id, name: el.name, addr: el.addr })
                                                setConnectionComponent(`${el.name} ${el.addr}`)
                                                setAllowedConnections([])
                                            }}
                                            key={ind}
                                            className='allowed-connection'>
                                            <div
                                                className='allowed-connection-name'>
                                                {el.name}
                                            </div>
                                            <div
                                                className='allowed-connection-addr'>
                                                {el.addr}
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </motion.div>
                    </AnimatePresence>

                )
            }

            {
                choisenMacSRTrue == false && (
                    <motion.div
                        className='terminal_is_taken'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Такое устройство уже есть!
                    </motion.div>
                )
            }

            {
                choisenMacSRTrue == true && choisenMacSR.length != 0 && (
                    <motion.div
                        className='terminal_is_not_taken'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Такого устройства нет
                    </motion.div>
                )
            }

        </motion.div>
    )
}

export default AddConnection
