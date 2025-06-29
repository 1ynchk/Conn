import { motion } from "framer-motion"
import SwitchAdding from "./switch-adding"
import SwitchPorts from "./switch-ports"

const ConnectionAdding = (props) => {

    const {
        setSwitch,
        isSwitch,
        choisenPort,
        setChoisenPort
    } = props

    return (
        <motion.div>
            <SwitchAdding
                setSwitch={setSwitch}
                isSwitch={isSwitch}/>
            <SwitchPorts
                isSwitch={isSwitch}
                choisenPort={choisenPort}
                setChoisenPort={setChoisenPort}
            />
        </motion.div>
    )
}

export default ConnectionAdding