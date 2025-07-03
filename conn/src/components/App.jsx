import Header from './header.jsx'
import Popup from './popup.jsx'
import '../static/index.css'
import { useState } from 'react'

function App() {

	const [isPopup, setPopup] = useState(false)

	// Terminal Adding
	const [choisenTerminal, setTerminal] = useState(null)
	const [choisenMacSR, setMacSR] = useState(null)
	const [choisenMacSRTrue, setChoisenMacSRTrue] = useState(null)
	const [givenTo, setGivenTo] = useState(null)
	const [giveNameToTerminal, setGiveNameToTerminal] = useState(null)
	const [addConnection, setConnection] = useState(null)

	// Connection adding
	const [isSwitch, setSwitch] = useState(null)
	const [choisenPort, setChoisenPort] = useState(null)
	const [isVlan, setVlan] = useState(null)

	// Done
	const [isDone, setDone] = useState(null)

	const setNull = () => {
		setDone(null)
		setVlan(null)
		setChoisenPort(null)
		setSwitch(null)
		setConnection(null)
		setGiveNameToTerminal(null)
		setGivenTo(null)
		setChoisenMacSRTrue(null)
		setMacSR(null)
		setTerminal(null)
		setPopup(false)
	}

	return (
		<>
			<Header
				setPopup={setPopup}
				isPopup={isPopup} />
			<Popup
				// Terminal adding
				addConnection={addConnection}
				setConnection={setConnection}
				giveNameToTerminal={giveNameToTerminal}
				setGiveNameToTerminal={setGiveNameToTerminal}
				givenTo={givenTo}
				setGivenTo={setGivenTo}
				choisenMacSR={choisenMacSR}
				setMacSR={setMacSR}
				setTerminal={setTerminal}
				choisenTerminal={choisenTerminal}
				setPopup={setPopup}
				isPopup={isPopup}
				setChoisenMacSRTrue={setChoisenMacSRTrue}
				choisenMacSRTrue={choisenMacSRTrue}

				// Connection adding
				isSwitch={isSwitch}
				setSwitch={setSwitch}
				choisenPort={choisenPort}
				setChoisenPort={setChoisenPort}
				isVlan={isVlan}
				setVlan={setVlan}

				// Done
				isDone={isDone}
				setDone={setDone}

				// Extra functions
				setNull={setNull}
			/>
		</>
	)
}

export default App
