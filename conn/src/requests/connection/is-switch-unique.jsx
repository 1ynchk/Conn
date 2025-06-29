import axios from 'axios'
import BACKEND_URL from './../host';

export const isSwitchUnique = (params) => {
    return axios.get(
        `${BACKEND_URL}/api/switches/is-switch-unique/?switch=${params.switch}`,
        {
            withCredentials: true
        }
    )
    .then(response => response.data)
    .catch(error => console.log(error))
}