import Header from './header.jsx'
import Popup from './popup.jsx'
import '../static/index.css'
import {useState} from 'react'

function App() {

	const [isPopup, setPopup] = useState(false)


	return (
	    <>
		<Header
			setPopup={setPopup}
			isPopup={isPopup}/> 
		<Popup 
			setPopup={setPopup}
			isPopup={isPopup}/>
	    </>
  	)
}

export default App
