
const Confirming = (props) => {

	const {
		isVlan,
		choisenPort,
		isSwitch,
		tabStep,
		addConnection,
		giveNameToTerminal,
		givenTo,
		choisenMacSR,
		choisenTerminal
	} = props

	return (
		<div>
			<table className='table'>
				<tr className='table-row'>
					<td className='table-data'>Терминал</td>
					<td>{choisenTerminal}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>MAC-адрес / серийник</td>
					<td>{choisenMacSR}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>Название терминала</td>
					<td>{giveNameToTerminal}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>Подключение</td>
					<td>{addConnection.name} {addConnection.addr}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>Коммутатор</td>
					<td>{isSwitch.name}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>Порт</td>
					<td>{choisenPort}</td>
				</tr>
				<tr className='table-row'>
					<td className='table-data'>VLAN</td>
					<td>{isVlan}</td>
				</tr>
			</table>
		</div>
	)
}

export default Confirming
