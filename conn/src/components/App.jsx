import Header from './header.jsx'
import Popup from './popup.jsx'
import '../static/index.css'
import {useState} from 'react'

function App() {

	const [isPopup, setPopup] = useState(false)
	const [choisenTerminal, setTerminal] = useState(null)
	const [choisenMacSR, setMacSR] = useState(null)

	return (
	    <>
		<Header
			setPopup={setPopup}
			isPopup={isPopup}/> 
		<Popup 
			choisenMacSR={choisenMacSR}
			setMacSR={setMacSR}
			setTerminal={setTerminal}
			choisenTerminal={choisenTerminal}
			setPopup={setPopup}
			isPopup={isPopup}/>
	    </>
  	)
}

export default App
