/* eslint-disable react/prop-types */
import { horaMes } from "../../helpers/horaMes"

// eslint-disable-next-line react/prop-types
export const OutgoingMessage = ({ msg }) => {

    // console.log(msg);
    const { mensaje } = msg
    const horaCreacion = horaMes(msg.timeStamps)

    return (
        <>
            {/* <!-- Mensaje enviado inicio --> */}
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{mensaje}</p>
                    <span className="time_date">{horaCreacion}</span>
                </div>
            </div>
            {/* <!-- Mensaje enviado inicio --> */}
        </>
    )
}
