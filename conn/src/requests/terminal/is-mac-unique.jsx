import axios from 'axios'

import BACKEND_URL from '../host.js'

export const isMacUnique = (params) => {
	  return axios.get(
		  `${BACKEND_URL}/api/devices/is-mac-unique/?mac=${params.mac}&is_mac=${params.is_mac}`, {
		      withCredentials: true
		    })
	  .then(response => response.data)
	  .catch(error => {
		      console.error('Ошибка:', error)
		      throw error
		    })
}
