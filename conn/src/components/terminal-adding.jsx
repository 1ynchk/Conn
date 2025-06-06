

const TerminalAdding = (props) => {

	const {
		setTerminal,
		choisenTerminal
	} = props

	return (
		<div className='terminaladding'>
			<div className='tabpage__title'>Выберите терминал:</div>
			<form className='tabpage__form'>
				<div className='radio_input'>
					<input 
						onClick={() => setTerminal('GPON ONU C-DATA')}
						className='btn_radio' 
						type='radio' 
						name='terminal'/>
					<div>C-Data Абонентский терминал GPON ONU</div>
				</div>
				<div className='radio_input'>
					<input 
						onChange={() => setTerminal('ELTEX NTE-2 (b+)')}
						checked={choisenTerminal == 'ELTEX NTE-2 (b+)'? false : true}
						className='btn_radio' 
						name='terminal'
						type='radio'/>
					<div>Eltex Абонентский терминал NTE-2 (b+)</div>
				</div>
				<div className='radio_input'>
					<input 
						onClick={() => setTerminal('C-DATA FD511G-X')}
						className='btn_radio' 
						name='terminal'
						type='radio'/>
					<div>C-Data Абонентский терминал FD511G-X</div>
				</div>
			</form>
		</div>
	)
}

export default TerminalAdding
