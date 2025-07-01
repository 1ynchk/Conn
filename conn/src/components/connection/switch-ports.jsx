import { motion } from "framer-motion"
import port from '../../static/img/port.png'

const SwitchPorts = (props) => {

    const {
        choisenPort,
        setChoisenPort,
        isSwitch
    } = props

    return (
        <motion.div
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                padding: isSwitch != null && typeof (isSwitch) == 'object' ? 0 : 10,
                backgroundColor: isSwitch != null && typeof (isSwitch) == 'object' ? "#ffffff" : "#808080",
                y: isSwitch != null && typeof (isSwitch) == 'object' ? 0 : 10
            }}
            className="tabpage__container">
            <div className='tabpage__title'>
                Выберите порт:
            </div>
            <motion.div
                initial={{ backgroundColor: '#9c9c9c' }}
                animate={{ backgroundColor: isSwitch != null && typeof (isSwitch) == 'object' ? '#ffffff' : '#9c9c9c' }}
                className="connection-ports">
                {
                    isSwitch != null && typeof (isSwitch) == 'object' ? '' : <div className="connection-title">Выберите свитч</div>
                }

		{
			isSwitch != null && typeof (isSwitch) == 'object' && isSwitch.ports.length == 0 && (
				<div className='connection-switch-ports-warn'>

				</div>
			)
		}

                {
                    isSwitch != null && typeof (isSwitch) == 'object' && isSwitch.ports.length != 0 && (
                        isSwitch.ports.map((el, ind) => {
                            return (
                                <div key={ind} className="switch-port-container">
                                    <div 
				    	onClick={() => {
						if (choisenPort != null && el.id == choisenPort.id) {
							setChoisenPort(null)
						} else {
							setChoisenPort({name: el.name, id: el.id})
						}
						
					}} 
				    	className={`switch-port-wrapper ${choisenPort != null && el.id == choisenPort.id ? 'active' : ''}`}>
                                        <img className="switch-port" src={port} />
                                    </div>
                                    <div className="switch-port-name">{el.name}</div>
				    <div className='switch-port-hover'>
				    	<div className='switch-port-hover-name'>
						Название: {el.name}
				    	</div>

				    	<div className='switch-port-hover-connector'>
						Тип: {el.connector}	
				    	</div>

					<div className='switch-port-hover-vlan'>
						Vlan порта: {el.untgd_vlan}	
				    	</div>

				    	{
						el.connection.length != 0 ? (
							<div className='switch-port-hover-connections'>
								Подключения: { 
									el.connection.map(cel => {
										<span className='switch-port-connection-span'>cel.name </span>
									})
								}
				    			</div>
						) : (
							<div className='switch-port-hover-connections'>
								Подключений пока нет
				    			</div>
						)
					}
				    	

				    </div>
                                </div>
                            )
                        })

                    )
                }
            </motion.div>
        </motion.div >
    )
}

export default SwitchPorts
