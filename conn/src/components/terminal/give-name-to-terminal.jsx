import { motion } from 'framer-motion'

const GiveNameToTerminal = (props) => {
    const {
        choisenTerminal,
        choisenMacSR,
        choisenMacSRTrue,
        giveNameToTerminal,
        setGiveNameToTerminal,
        givenTo
    } = props

    return (
        <motion.div
            className='tabpage__container'
            initial={{ backgroundColor: "#808080", y: 10 }}
            animate={{
                padding:
                    	choisenMacSRTrue == null ||
                        choisenMacSRTrue == false ||
                        givenTo == 'Никто не выбран' ||
                        givenTo == null ||
                        choisenMacSR == null ||
                        choisenMacSR.length == 0 ? 10 : 0,
                backgroundColor:
                    choisenMacSRTrue == null ||
                        choisenMacSRTrue == false ||
                        givenTo == 'Никто не выбран' ||
                        givenTo == null ||
                        choisenMacSR == null ||
                        choisenMacSR.length == 0
                        ? "#808080" : "#ffffff",
                y:
                    choisenMacSRTrue == null ||
                        choisenMacSRTrue == false ||
                        givenTo == 'Никто не выбран' ||
                        givenTo == null ||
                        choisenMacSR == null ||
                        choisenMacSR.length == 0 ? 10 : 0
            }}>
            <div className='tabpage__title'>
                Введите имя терминала:
            </div>
            <input
	    	placeholder='c_data_ivanov'
                onChange={(e) => setGiveNameToTerminal(e.target.value)}
                className='common_input'
                value={giveNameToTerminal == null ? '' : giveNameToTerminal}
                type='text'
                disabled={
                    choisenMacSR == null ||
                    givenTo == null ||
                    givenTo == 'Никто не выбран' ? true : false 
                } />

        </motion.div >
    )
}

export default GiveNameToTerminal
