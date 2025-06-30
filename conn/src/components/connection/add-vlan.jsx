import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

import { isVlanUnique } from '../../requests/connection/is-vlan-unique.jsx'

const AddVlan = (props) => {

	const {
		isSwitch, 
		choisenPort,
		isVlan,
		setVlan
	} = props

	const [vlanComponent, setVlanComponent] = useState(null)
	const [isAvailable, setAvailable] = useState(null)

	console.log(isVlan)

	useEffect(() => {
		const timeout = setTimeout(
			() => {
				if (vlanComponent != null && vlanComponent.length == 0) {
					setVlan(null)
					setAvailable(null)
				}
				if (vlanComponent != null && vlanComponent.length != 0) {
					isVlanUnique({'vlan': vlanComponent})
					.then(
						result => {
						setAvailable(result.data)
						
						if (result.data) {
							setVlan(vlanComponent)
						} else {
							setVlan(null)
						}
					}
			 	)
				} else {

				}
		}, 
		1000
	)
		return () => clearTimeout(timeout)
	}

	, [vlanComponent])

	useEffect(() => {
		if (isVlan != null && isVlan.length != 0) {
			setVlanComponent(isVlan)
			setAvailable(true)
		}
	}, [])

	return (
		<motion.div
			className='tabpage__container'
			initial={{ backgroundColor: "#808080", y: 10 }}
			animate={{ 
				padding: isSwitch != null 
				&& typeof (isSwitch) == 'object' 
				&& choisenPort != null
					? 0 : 10, 
				backgroundColor: 
				isSwitch != null 
				&& typeof (isSwitch) == 'object' 
				&& choisenPort != null
				? "#ffffff" : "#808080"
			}}
		>
			<div className='tabpage__title'>
				Введите vlan:
			</div>

			<input 
				disabled={
				isSwitch != null 
				&& typeof (isSwitch) == 'object' 
				&& choisenPort != null ? false : true
				}
				value={vlanComponent == null ? '' : vlanComponent}
				onChange={(e) => setVlanComponent(e.target.value)}
				placeholder='1337.228'
				className='common_input'
				type='text'
				/>
			{
				isAvailable === true && (
					<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					className='terminal_is_not_taken'
					>
						Vlan не занят
					</motion.div>
				)
			}

			{
				isAvailable === false && (
					<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					className='terminal_is_taken'
					>
						Vlan занят
					</motion.div>
				)
			}
		</motion.div>
	)
}

export default AddVlan
