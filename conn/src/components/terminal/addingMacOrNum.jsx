import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { isMacUnique } from '../../requests/terminal/is-mac-unique';

const AddingMacOrNum = (props) => {

    const {
        choisenTerminal,
        setMacSR,
        choisenMacSR,
        setChoisenMacSRTrue,
        choisenMacSRTrue
    } = props

    useEffect(() => {

        const checkMac = setTimeout(() => {
            const is_mac = !(choisenTerminal == 'C-DATA FD511G-X')

            if (choisenMacSR != null) {
                if (choisenTerminal != 'C-DATA FD511G-X' && choisenMacSR.length == 17) {
                    isMacUnique({ 'mac': choisenMacSR, 'is_mac': is_mac })
                        .then(result => {
                            setChoisenMacSRTrue(result.is_unique)
                        }
                        )
                } else {
                    setChoisenMacSRTrue(null)
                }

                if (choisenTerminal == 'C-DATA FD511G-X' && choisenMacSR.length != 0) {
                    isMacUnique({ 'mac': choisenMacSR, 'is_mac': is_mac })
                        .then(result => {
                            setChoisenMacSRTrue(result.is_unique)
                        }
                        )
                } else {
                    setChoisenMacSRTrue(null)
                }

            }
        }, 1000)

        return () => clearTimeout(checkMac)
    }, [choisenMacSR, choisenTerminal])
	
    return (
        <motion.div
            className='tabpage__container'
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                padding: choisenTerminal != null ? 0 : 10,
                backgroundColor: choisenTerminal != null ? "#ffffff" : "#808080",
                y: choisenTerminal != null ? 0 : 10
            }}>
            <div className='tabpage__title'>
                Введите {choisenTerminal === 'C-DATA FD511G-X' ? 'серийный номер' : 'MAC адрес'} терминала:
            </div>
            <input
                maxLength={17}
                onChange={(e) => setMacSR(e.target.value)}
                placeholder={choisenTerminal === 'C-DATA FD511G-X' ? 'HWTCХХХХХХХХ' : 'ff:ff:ff:ff:ff:ff'}
                className='common_input'
                value={choisenMacSR == null ? '' : choisenMacSR}
                type='text'
                disabled={choisenTerminal != null ? false : true} />

            {
                choisenMacSRTrue == false && (
                    <motion.div
                        className='terminal_is_taken'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Такое устройство уже есть!
                    </motion.div>
                )
            }

            {
                choisenMacSRTrue == true && choisenMacSR.length != 0 && (
                    <motion.div
                        className='terminal_is_not_taken'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Такого устройства нет
                    </motion.div>
                )
            }

        </motion.div>
    )
}

export default AddingMacOrNum
