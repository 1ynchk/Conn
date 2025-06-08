import {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import {getAllStaff} from '../requests/terminal/get-all-staff.jsx'
import {useState} from 'react'

const TerminalAdding = (props) => {

	const {
		setTerminal,
		choisenTerminal,
		choisenMacSR,
		setMacSR
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
						type='radio'/>
					<div>Eltex Абонентский терминал NTE-2 (b+)</div>
				</div>
				<div className='radio_input'>
					<input 
						onChange={() => setTerminal('C-DATA FD511G-X')}
						checked={choisenTerminal === 'C-DATA FD511G-X'}
						className='btn_radio' 
						name='terminal'
						value="C-DATA FD511G-X"
						type='radio'/>
					<div>C-Data Абонентский терминал FD511G-X</div>

				</div>

			<AddingMacOrNum choisenTerminal={choisenTerminal}/>
			<TerminalGiveTo 
				choisenTerminal={choisenTerminal}
				choisenMacSR={choisenMacSR} 
				setMacSR={setMacSR}/>
			</form>

		</div>
			
		</>
	)
}

const AddingMacOrNum = (props) => {
	
	const {
		choisenTerminal
	} = props

	const handleMacSR = () => {
		
	}
		
	return (
		<motion.div
			className='tabpage__container'
			initial={{backgroundColor: "#808080", y: 10}}
			animate={{
				padding: choisenTerminal != null ? 0 : 10,
				backgroundColor: choisenTerminal != null ? "#ffffff" : "#808080", 
				y: choisenTerminal != null ? 0 : 10 
			}}>
			<div className='tabpage__title'>
				Введите {choisenTerminal === 'C-DATA FD511G-X' ? 'серийный номер' : 'MAC адрес'} терминала:
			</div>
			<input
				placeholder={choisenTerminal === 'C-DATA FD511G-X' ? 'HWTCХХХХХХХХ' : 'ff:ff:ff:ff:ff:ff'}
				className='common_input'
				type='text' 
				disabled={choisenTerminal != null ? false : true} />
		</motion.div>
	)
}

const TerminalGiveTo = (props) => {
	
	const {
		setMacSR,
		choisenTerminal,
		choisenMacSR
	} = props

	const [staff, setStaff]	= useState([])
	const [firstLoading, setLoading] = useState(true)
	
	useEffect(() => {
		if (firstLoading) {
			getAllStaff()
				  .then(result => {
					setStaff(result.data)			
				}
			)
			setLoading(false)
		}
	}, [])
		  
	return (
		<motion.div
			className='tabpage__container'
			initial={{
				opacity: 0,
				backgroundColor: "#808080", 
				y: 10}}
			animate={{
				opacity: choisenTerminal == null ? 0 : 1,
				padding: choisenMacSR != null ? 0 : 10,
				backgroundColor: choisenMacSR != null ? "#ffffff" : "#808080", 
				y: choisenMacSR != null ? 0 : 10 
			}}
		>
			<div className='tabpage__title'>
				Выписать терминал на:
			</div>
			
			<select 
				disabled={choisenMacSR == null ? true : false}
				className='common_input'>
				<option>Никто не выбран</option>
				
			</select>
		</motion.div>
	)

}

export default TerminalAdding
