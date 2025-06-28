import axios from 'axios'

import BACKEND_URL from '../host.js'

export const getAllStaff = () => {
	  return axios.get(`${BACKEND_URL}/api/staff/get-all-staff/`, {
		      withCredentials: true
		    })
	  .then(response => response.data)
	  .catch(error => {
		      console.error('Ошибка:', error)
		      throw error
		    })
}
