import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { isMacUnique } from './../requests/terminal/is-mac-unique';

const AddConnection = (props) => {

    const {
        choisenTerminal,
        setMacSR,
        choisenMacSR,
        setChoisenMacSRTrue,
        choisenMacSRTrue,
        setConnection,
        addConnection
    } = props

    return (
        <motion.div
            className='tabpage__container'
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                opacity: choisenMacSRTrue == null ||
                    choisenMacSRTrue == false ||
                    choisenMacSR == null ||
                    choisenMacSR.length == 0 ? 0 : 1,
                padding: choisenMacSRTrue == null ||
                    choisenMacSRTrue == false ||
                    choisenMacSR == null ||
                    choisenMacSR.length == 0 ? 0 : 1,
                backgroundColor: choisenMacSRTrue == null ||
                    choisenMacSRTrue == false ||
                    givenTo == 'Никто не выбран' ||
                    givenTo == null ||
                    choisenMacSR == null ||
                    choisenMacSR.length == 0
                    ? "#808080" : "#ffffff",
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

export default AddConnection