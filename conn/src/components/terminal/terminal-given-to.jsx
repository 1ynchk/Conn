import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { getAllStaff } from '../../requests/terminal/get-all-staff.jsx'
import { useState } from 'react'

const TerminalGiveTo = (props) => {

    const {
        choisenTerminal,
        choisenMacSRTrue,
        givenTo,
        setGivenTo,
        choisenMacSR
    } = props

    const [staff, setStaff] = useState([])
    const [firstLoading, setLoading] = useState(true)

    useEffect(() => {
        if (firstLoading) {
            getAllStaff()
                .then(result => {
                    setStaff(result.data)
                }
                )
            setLoading(false)
        }
    }, [])

    return (
        <motion.div
            className='tabpage__container'
            initial={{
                backgroundColor: "#808080",
                y: 10
            }}
            animate={{
                padding: choisenMacSRTrue == true  ? 0 : 10,
                backgroundColor: choisenMacSRTrue == true || choisenMacSR != null && choisenMacSR.length == 17  ? "#ffffff" : "#808080",
                y: choisenMacSRTrue == true ? 0 : 10
            }}
        >
            <div className='tabpage__title'>
                Выписать терминал на:
            </div>

            <select
                value={givenTo || ''}
                onChange={(e) => {
                    setGivenTo(e.target.value)
                }}
                disabled={choisenMacSRTrue == false || choisenMacSRTrue == null ? true : false}
                className='common_input'>
                <option>Никто не выбран</option>
                {
                    staff.map((el, ind) => {
                        return (
                            <option key={ind} value={el.id}>
                                {el.name}
                            </option>
                        )
                    })
                }
            </select>
        </motion.div>
    )
}

export default TerminalGiveTo
