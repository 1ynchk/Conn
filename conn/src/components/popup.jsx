import {motion, AnimatePresence} from 'framer-motion'
import '../static/popup.css'
import { IoMdClose } from "react-icons/io";
import PopupHead from './popup-head.jsx'
import {useState} from 'react'

const Popup = (props) => {
	
	const {
		isPopup,
		setPopup
	} = props

	const tabs = [
		{'title': 'Терминал', 'ind': 1},
		{'title': 'Подключение', 'ind': 2},
		{'title': 'Подтверждение', 'ind': 3},
	]

	const [whatTab, setTab] = useState(1)

	return (
		<>
			
			<AnimatePresence>
				{
					isPopup && (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
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
							</div>
						</motion.div>
					)
				}	
			</AnimatePresence>
		</>
	)
}

export default Popup
