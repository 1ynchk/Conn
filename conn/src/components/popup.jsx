import { motion, AnimatePresence } from 'framer-motion'
import '../static/popup.css'
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react'
import PopupHead from './popup-head.jsx'
import TerminalAdding from './terminal/terminal-adding.jsx'
import ConnectionAdding from './connection/connection-adding.jsx';
import ButtonNext from './button_next.jsx'

const Popup = (props) => {

	const {
		// Terminal adding
		isPopup,
		setPopup,
		choisenTerminal,
		setTerminal,
		setMacSR,
		choisenMacSR,
		setChoisenMacSRTrue,
		choisenMacSRTrue,
		givenTo,
		setGivenTo,
		setGiveNameToTerminal,
		giveNameToTerminal,
		addConnection,
		setConnection,

		// Connection adding
		setSwitch,
		isSwitch,
		choisenPort,
		setChoisenPort
	} = props

	const tabs = [
		{ 'title': 'Терминал', 'ind': 1 },
		{ 'title': 'Подключение', 'ind': 2 },
		{ 'title': 'Подтверждение', 'ind': 3 },
	]

	const [tabStep, setTabStep] = useState('terminal')

	return (
		<>

			<AnimatePresence>
				{
					isPopup && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setPopup(!isPopup)}
							className='popup_wrapper'>
							<div
								onClick={(e) => e.stopPropagation()}
								className='popup'>
								<IoMdClose
									onClick={() => setPopup(!isPopup)}
									className='popup__close' />

								<PopupHead
									tabStep={tabStep}
									tabs={tabs} />

								<TabPage
									// Terminal adding
									tabStep={tabStep}
									setTabStep={setTabStep}
									giveNameToTerminal={giveNameToTerminal}
									setGiveNameToTerminal={setGiveNameToTerminal}
									givenTo={givenTo}
									setGivenTo={setGivenTo}
									choisenMacSRTrue={choisenMacSRTrue}
									setChoisenMacSRTrue={setChoisenMacSRTrue}
									setMacSR={setMacSR}
									setConnection={setConnection}
									choisenMacSR={choisenMacSR}
									setTerminal={setTerminal}
									choisenTerminal={choisenTerminal}
									addConnection={addConnection}

									// Connection adding
									isSwitch={isSwitch}
									setSwitch={setSwitch}
									choisenPort={choisenPort}
									setChoisenPort={setChoisenPort}
								/>
							</div>
						</motion.div>
					)
				}
			</AnimatePresence>
		</>
	)
}

const TabPage = (props) => {

	const {
		// Terminal adding
		setTabStep,
		tabStep,
		setTerminal,
		choisenTerminal,
		setMacSR,
		choisenMacSR,
		choisenMacSRTrue,
		setChoisenMacSRTrue,
		givenTo,
		setGivenTo,
		giveNameToTerminal,
		setGiveNameToTerminal,
		setConnection,
		addConnection,

		// COnnection adding
		setSwitch,
		isSwitch,
		setChoisenPort,
		choisenPort
	} = props


	return (
		<AnimatePresence>
			<div className='tabpage'>
				{
					tabStep == 'terminal' &&
					<TerminalAdding
						addConnection={addConnection}
						setConnection={setConnection}
						giveNameToTerminal={giveNameToTerminal}
						setGiveNameToTerminal={setGiveNameToTerminal}
						givenTo={givenTo}
						setGivenTo={setGivenTo}
						setMacSR={setMacSR}
						choisenMacSR={choisenMacSR}
						setTerminal={setTerminal}
						choisenTerminal={choisenTerminal}
						setChoisenMacSRTrue={setChoisenMacSRTrue}
						choisenMacSRTrue={choisenMacSRTrue}
					/>
				}

				{
					tabStep == 'connection' &&
					<ConnectionAdding
						setSwitch={setSwitch}
						isSwitch={isSwitch}
						choisenPort={choisenPort}
						setChoisenPort={setChoisenPort}
					/>
				}

				<ButtonNext
					setTabStep={setTabStep}
					tabStep={tabStep}
					addConnection={addConnection}
					giveNameToTerminal={giveNameToTerminal}
					givenTo={givenTo}
					choisenMacSR={choisenMacSR}
					choisenMacSRTrue={choisenMacSRTrue}
				/>
			</div>
		</AnimatePresence>

	)
}

export default Popup
