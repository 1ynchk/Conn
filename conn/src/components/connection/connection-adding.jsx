import { motion } from "framer-motion"
import SwitchAdding from "./switch-adding"
import SwitchPorts from "./switch-ports"
import AddVlan from './add-vlan.jsx'

const ConnectionAdding = (props) => {

    const {
        setSwitch,
        isSwitch,
        choisenPort,
        setChoisenPort,
	setVlan,
	isVlan
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
	    <AddVlan 
		isSwitch={isSwitch}
                choisenPort={choisenPort}
	    	isVlan={isVlan}
		setVlan={setVlan}
	    />
        </motion.div>
    )
}

export default ConnectionAdding
