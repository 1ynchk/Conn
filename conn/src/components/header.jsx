import '../static/header.css'

const Header = (props) => {

	const {
		isPopup,
		setPopup
	} = props

	const tabs = [
	{"title": 'Склад', "ind": 1},
	{"title": 'Сеть', "ind": 2},
	{"title": 'Проекты', "ind": 3},
	{"title": 'Задачи', "ind": 4},
	{"title": 'Календарь', "ind": 5},
	{"title": 'Компания', "ind": 6},
	{"title": 'Клиенты', "ind": 7},
	{"title": 'Звонки', "ind": 8},
	{"title": 'Admin', "ind": 9},
	{"title": 'Профиль', "ind": 10},
	{"title": 'Выход', "ind": 11},
	{"title": 'Привязать абонента', 'ind': 12}
	]

	return (
		<header className='header'>
			{
				tabs.map(el => {
					return (
						<button
							onClick={() => {
								if (el.ind == 12) {
									setPopup(!isPopup)
								}
								}
							}
							key={el.ind}
							className='header__btn'
						>
						{el.title}
						</button>
					)
				})
			}
		</header>
	)
}

export default Header
