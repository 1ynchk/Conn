import axios from 'axios'

import BACKEND_URL from './../host.jsx'

export const addNewConnection = (params) => {
	
	return axios.post(
		`${BACKEND_URL}/api/connection/add-connection-and-terminal/`,
		{
			withCredentials: True
		},

		{
			type_terminal: params.type_terminal,
			mac_or_sr: params.mac_or_sr,
			given_to: params.given_to,
			name_terminal: params.name_terminal,
			connection: params.connection,
			"switch": params.switch,
			port: params.port,
			vlan: params.vlan
		}
	)
	.then(result => result.data)
	.catch(error => console.log(error))

}
