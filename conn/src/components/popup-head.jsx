import { useEffect, useState } from 'react'
import '../static/popup-head.css'

const PopupHead = (props) => {

	const {
		tabs,
		tabStep
	} = props

	const [whatTab, setTab] = useState(1)

	useEffect(() => {
		switch (true) {
			case tabStep == 'terminal':
				setTab(1)
				break
			case tabStep == 'connection':
				setTab(2)
				break
		}

	}, [tabStep])

	return (
		<ul className='popup__head'>
			{
				tabs.map(el => {
					return (
						<li
							key={el.ind}
							className={`popup__el ${el.ind <= whatTab ? 'active' : ''}`}>
							{el.title}
						</li>)
				})
			}
		</ul>
	)
}

export default PopupHead
