import axios from 'axios'

import BACKEND_URL from '../host.js'

export const isConnectionUnique = (params) => {
	return axios.get(
		`${BACKEND_URL}/api/connection/is-connection-unique/?connection=${params.connection}`,
		{
			withCredentials: true
		}
	)
	.then(response => response.data)
	.catch(error => console.error(error))
}
