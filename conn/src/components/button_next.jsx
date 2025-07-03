import { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import { addNewConnection } from './../requests/confirming';

const ButtonNext = (props) => {

	const {
		// Terminal adding
		choisenMacSRTrue,
		choisenMacSR,
		givenTo,
		giveNameToTerminal,
		addConnection,
		tabStep,
		setTabStep,
		choisenTerminal,

		// Connection adding
		isVlan, 
		choisenPort,
		isSwitch
	} = props

	const [isBtnActive, setBtnActive] = useState(false)
	const [isBackBtn, setBackBtn] = useState(false)
	const [timer, setTimer] = useState(null)

	useEffect(() => {
		if (tabStep == 'terminal') {
			if (choisenMacSRTrue == true && choisenMacSR.length != 0 && choisenMacSR != null && givenTo != null
				&& givenTo != 'Никто не выбран' && giveNameToTerminal != null
				&& giveNameToTerminal.length != 0 && addConnection != null
				&& typeof (addConnection) == 'object'
			) {
				setBtnActive(true)
			} else {
				setBtnActive(false)
			}
		}

		if (tabStep == 'connection') {
			if (isVlan != null && isVlan.length != 0 && choisenPort != null 
			   && typeof(choisenPort) == 'object' && isSwitch != null && typeof(isSwitch) == 'object'
			) {
				setBtnActive(true)
			} else {
				setBtnActive(false)
			}
		}

		if (tabStep == 'confirming') {
			setBtnActive(false)
		}
	}, [
		choisenMacSRTrue,
		choisenMacSR,
		givenTo,
		giveNameToTerminal,
		addConnection,
		tabStep, 
		isVlan, 
		choisenPort,
		isSwitch
	])

	useEffect(() => {
		if (tabStep == 'connection' || tabStep == 'confirming') {
			setBackBtn(true)
		} else {
			setBackBtn(false)
		}
	}, [tabStep])

	useEffect(() => {
	    if (tabStep === 'confirming') {
	    let counter = 0
	    const interval = setInterval(() => {
				setTimer(counter)
				counter++
				
				if (counter >= 4) {
					clearInterval(interval)
					setBtnActive(true)
				}
			    }, 1000)
    
	     return () => clearInterval(interval)
		 }
	}, [tabStep])

	const handleFetchData = () => {
		addNewConnection(
			{
				"type_terminal": choisenTerminal,
				"mac_or_sr": choisenMacSR,
				"given_to": givenTo,
				"name_terminal": giveNameToTerminal,
				"connection": addConnection,
				"switch": isSwitch,
				"port": choisenPort,
				"vlan": isVlan 
			}
		)
		.then(result => console.log(result))
	}

	const handleNextChange = () => {
		switch (true) {
			case tabStep == 'terminal':
				setTabStep('connection')
				break

			case tabStep == 'connection':
				setTabStep('confirming')
				break

			case tabStep == 'confirming':
				handleFetchData()
				break	
			}
	}

	const handleBackChange = () => {
		switch (true) {
			case tabStep == 'connection':
				setTabStep('terminal')
				break

			case tabStep == 'confirming':
				setTabStep('connection')
				break
		}
	}

	return (
		<>
			{
				isBackBtn && (
					<motion.button
						onClick={() => handleBackChange()}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						className="button-back">
						Назад
					</motion.button>
				)
			}

			<button
				onClick={() => handleNextChange()}
				disabled={!isBtnActive}
				className='button-next'>
				{
					tabStep == 'confirming'	&& timer + 1 == 4 && 'Продолжить'
				}

				{
					tabStep == 'confirming'	&& timer + 1 != 4 && timer+1
				}

				{
					tabStep != 'confirming' && 'Продолжить'
				}
			</button>
		</>

	)
}

export default ButtonNext
