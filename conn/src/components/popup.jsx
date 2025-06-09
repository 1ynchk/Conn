import { motion, AnimatePresence } from 'framer-motion'
import '../static/popup.css'
import { IoMdClose } from "react-icons/io";
import PopupHead from './popup-head.jsx'
import TerminalAdding from './terminal-adding.jsx'
import { useState, useEffect } from 'react'

const Popup = (props) => {

	const {
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
		giveNameToTerminal
	} = props

	const tabs = [
		{ 'title': 'Терминал', 'ind': 1 },
		{ 'title': 'Подключение', 'ind': 2 },
		{ 'title': 'Подтверждение', 'ind': 3 },
	]

	const [whatTab, setTab] = useState(1)

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
									setTab={setTab}
									whatTab={whatTab}
									tabs={tabs} />

								<TabPage
									giveNameToTerminal={giveNameToTerminal}
									setGiveNameToTerminal={setGiveNameToTerminal}
									givenTo={givenTo}
									setGivenTo={setGivenTo}
									choisenMacSRTrue={choisenMacSRTrue}
									setChoisenMacSRTrue={setChoisenMacSRTrue}
									setMacSR={setMacSR}
									choisenMacSR={choisenMacSR}
									setTerminal={setTerminal}
									choisenTerminal={choisenTerminal}
									whatTab={whatTab} />
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
		whatTab,
		setTerminal,
		choisenTerminal,
		setMacSR,
		choisenMacSR,
		choisenMacSRTrue,
		setChoisenMacSRTrue,
		givenTo,
		setGivenTo,
		giveNameToTerminal,
		setGiveNameToTerminal
	} = props

	const [content, setContent] = useState(null)

	return (
		<div className='tabpage'>
			<TerminalAdding
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
		</div>
	)
}

export default Popup
