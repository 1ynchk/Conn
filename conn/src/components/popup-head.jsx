import '../static/popup-head.css'

const PopupHead = (props) => {
	
	const {
		tabs,
		setTab,
		whatTab
	} = props 

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
