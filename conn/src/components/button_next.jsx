import { useEffect, useState } from "react"
import { motion } from 'framer-motion';


const ButtonNext = (props) => {

	const {
		choisenMacSRTrue,
		choisenMacSR,
		givenTo,
		giveNameToTerminal,
		addConnection,
		tabStep,
		setTabStep
	} = props

	const [isBtnActive, setBtnActive] = useState(false)
	const [isBackBtn, setBackBtn] = useState(false)

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
	}, [
		choisenMacSRTrue,
		choisenMacSR,
		givenTo,
		giveNameToTerminal,
		addConnection,
		tabStep
	])

	useEffect(() => {
		if (tabStep == 'connection') {
			setBackBtn(true)
		} else {
			setBackBtn(false)
		}
	}, [tabStep])

	const handleNextChange = () => {
		switch (true) {
			case tabStep == 'terminal':
				setTabStep('connection')
				break
		}
	}

	const handleBackChange = () => {
		switch (true) {
			case tabStep == 'connection':
				setTabStep('terminal')
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
				Продолжить
			</button>
		</>

	)
}

export default ButtonNext
