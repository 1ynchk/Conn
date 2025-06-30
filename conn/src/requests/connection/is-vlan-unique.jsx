import axios from 'axios'
import BACKEND_URL from './../host';

export const isVlanUnique = (params) => {
	return axios.get(
	`${BACKEND_URL}/api/connection/is-vlan-unique/?vlan=${params.vlan}`,
	{ withCredentials: true }
	)
	.then(result => result.data)
	.catch(err => console.log(err))
}
