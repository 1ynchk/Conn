import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    useEffect(() => {
	let timeout = setTimeout(() => {
		if (addConnection != null && addConnection != undefined && addConnection.length != 0) {
			isConnectionUnique({"connection": addConnection})
			.then(result => setAllowedConnections(result.data))
			console.log(allowedConnections)
		} else {
			setAllowedConnections([])
		}
		
	}, 1000)

	return () => clearTimeout(timeout)

     },[addConnection])	

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
                onChange={(e) => setConnection(e.target.value)}
                placeholder='ivanov'
                className='common_input'
                value={addConnection == null ? '' : addConnection}
                type='text'
                disabled={
			choisenMacSRTrue == false
                    	|| choisenMacSR == null 
                    	|| choisenMacSR.length == 0
		    	|| giveNameToTerminal == null
		        || giveNameToTerminal.length == 0
		        || givenTo == null
		        || givenTo == "Никто не выбран" ? true : false} />

	    <div className='connections-list'>

	    </div>

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
