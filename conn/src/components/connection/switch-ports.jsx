import { motion } from "framer-motion"
import port from '../../static/img/port.png'

const SwitchPorts = (props) => {

    const {
        choisenPort,
        setChoisenPort,
        isSwitch
    } = props

    console.log(isSwitch)

    return (
        <motion.div
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                padding: isSwitch != null && typeof (isSwitch) == 'object' ? 0 : 10,
                backgroundColor: isSwitch != null && typeof (isSwitch) == 'object' ? "#ffffff" : "#808080",
                y: isSwitch != null && typeof (isSwitch) == 'object' ? 0 : 10
            }}
            className="tabpage__container">
            <div className='tabpage__title'>
                Выберите порт:
            </div>
            <motion.div
                initial={{ backgroundColor: '#9c9c9c' }}
                animate={{ backgroundColor: isSwitch != null && typeof (isSwitch) == 'object' ? '#ffffff' : '#9c9c9c' }}
                className="connection-ports">
                {
                    isSwitch != null && typeof (isSwitch) == 'object' ? '' : <div className="connection-title">Выберите свитч</div>
                }
                {
                    isSwitch != null && typeof (isSwitch) == 'object' && (
                        isSwitch.ports.map((el, ind) => {
                            return (
                                <div className="switch-port-container">
                                    <div className="switch-port-wrapper">
                                        <img className="switch-port" src={port} />
                                    </div>
                                    <div className="switch-port-name">{el.name}</div>
                                </div>
                            )
                        })

                    )
                }
            </motion.div>
        </motion.div >
    )
}

export default SwitchPorts