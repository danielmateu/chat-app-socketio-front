/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
export const IncommingMessage = ({ msg }) => {

    // console.log(msg);

    const { mensaje } = msg

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
                        <span className="time_date"> 11:01 AM | June 9</span>
                    </div>
                </div>
            </div>
            {/* <!-- Mensaje recibido Fin --> */}
        </>
    )
}
