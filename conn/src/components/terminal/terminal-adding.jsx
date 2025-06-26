import AddingMacOrNum from './addingMacOrNum.jsx'
import TerminalGiveTo from './terminal-given-to.jsx'
import GiveNameToTerminal from './give-name-to-terminal.jsx'
import AddConnection from './add-connection.jsx'

const TerminalAdding = (props) => {

	const {
		setTerminal,
		choisenTerminal,
		choisenMacSR,
		setMacSR,
		choisenMacSRTrue,
		setChoisenMacSRTrue,
		givenTo,
		setGivenTo,
		giveNameToTerminal,
		setGiveNameToTerminal,
		addConnection,
		setConnection
	} = props

	return (
		<>
			<div className='terminaladding'>
				<div className='tabpage__title'>Выберите терминал:</div>
				<form className='tabpage__form'>
					<div className='radio_input'>
						<input
							onChange={() => setTerminal('GPON ONU C-DATA')}
							checked={choisenTerminal === 'GPON ONU C-DATA'}
							className='btn_radio'
							type='radio'
							name='terminal'
							value="GPON ONU C-DATA"
						/>
						<div>C-Data Абонентский терминал GPON ONU</div>
					</div>
					<div className='radio_input'>
						<input
							checked={choisenTerminal === 'ELTEX NTE-2 (b+)'}
							onChange={() => setTerminal('ELTEX NTE-2 (b+)')}
							className='btn_radio'
							name='terminal'
							value="ELTEX NTE-2 (b+)"
							type='radio' />
						<div>Eltex Абонентский терминал NTE-2 (b+)</div>
					</div>
					<div className='radio_input'>
						<input
							onChange={() => setTerminal('C-DATA FD511G-X')}
							checked={choisenTerminal === 'C-DATA FD511G-X'}
							className='btn_radio'
							name='terminal'
							value="C-DATA FD511G-X"
							type='radio' />
						<div>C-Data Абонентский терминал FD511G-X</div>

					</div>

					<AddingMacOrNum
						setChoisenMacSRTrue={setChoisenMacSRTrue}
						choisenMacSRTrue={choisenMacSRTrue}
						setMacSR={setMacSR}
						choisenMacSR={choisenMacSR}
						choisenTerminal={choisenTerminal} />
					<TerminalGiveTo
						choisenMacSR={choisenMacSR}
						givenTo={givenTo}
						setGivenTo={setGivenTo}
						choisenMacSRTrue={choisenMacSRTrue}
						choisenTerminal={choisenTerminal}
					/>
					<GiveNameToTerminal
						givenTo={givenTo}
						giveNameToTerminal={giveNameToTerminal}
						setGiveNameToTerminal={setGiveNameToTerminal}
						choisenMacSRTrue={choisenMacSRTrue}
						choisenMacSR={choisenMacSR}
						choisenTerminal={choisenTerminal}
					/>
					<AddConnection
						addConnection={addConnection}
						setConnection={setConnection}
						givenTo={givenTo}
						choisenMacSR={choisenMacSR}
						choisenTerminal={choisenTerminal}
						givenTo={givenTo}
						giveNameToTerminal={giveNameToTerminal}
					/>
				</form>

			</div>

		</>
	)
}





export default TerminalAdding
