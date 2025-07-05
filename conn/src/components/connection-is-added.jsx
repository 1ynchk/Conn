import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const ConnectionIsAdded = (props) => {

    const {
        isDone,
        setDone
    } = props

    return (
        <div className="done">
            {isDone != null
                && isDone.comment !== undefined
                && isDone.comment === 'success' ? (
                <>
                    <GiConfirmed className="done-icon" />
                    <div className="done-title">Успех!</div>
                    <div className="done-comment">Терминал был успешно добавлен</div>
                </>
            ) : (
                <>
                    <MdOutlineCancel className="done-icon-false" />
                    <div className="done-title">Не успех!</div>
                    <div className="done-comment">
                        Терминал не был добавлен. Ниже приведен список возможных проблем в процессе добавления терминала:
                    </div>
                    <table className='table add-connection-table'>
                        <tr className='table-row'>
                            <td className='table-data'>Подключение существует</td>
                            <td>
                                {
                                    isDone != null && isDone.data.check_conn ?
                                        <div className="done-true">Да</div>
                                        :
                                        <div className="done-false">Нет</div>
                                }
                            </td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-data'>Терминал был добавлен</td>
                            <td>
                                {
                                    isDone != null && isDone.data.check_terminal ?
                                        <div className="done-true">Да</div>
                                        :
                                        <div className="done-false">Нет</div>
                                }
                            </td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-data'>Подключение добавлено на порт коммутатора</td>
                            <td>
                                {
                                    isDone != null && isDone.data.check_switch 
                                    && isDone.data.check_port 
                                    && isDone.data.check_vlan  ?
                                        <div className="done-true">Да</div>
                                        :
                                        <div className="done-false">Нет</div>
                                }
                            </td>
                        </tr>
                    </table>
                </>
            )}
        </div>
    )
}

export default ConnectionIsAdded
