/* eslint-disable react/prop-types */

import { horaMes } from "../../helpers/horaMes"


// eslint-disable-next-line react/prop-types
export const IncommingMessage = ({ msg }) => {

    const { mensaje } = msg

    const horaCreacion = horaMes(msg.timeStamps)

    return (
        <>
            {/* <!-- Mensaje recibido Inicio --> */}
            <div className="incoming_msg">
                <div className="incoming_msg_img">
                    <img src="../useravatar.png" alt="sunil" />
                </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{mensaje}</p>
                        <span className="time_date"> {horaCreacion}</span>
                    </div>
                </div>
            </div>
            {/* <!-- Mensaje recibido Fin --> */}
        </>
    )
}
