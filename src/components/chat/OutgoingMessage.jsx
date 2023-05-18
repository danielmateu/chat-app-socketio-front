/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
export const OutgoingMessage = ({ msg }) => {

    // console.log(msg);
    const { mensaje } = msg

    return (
        <>
            {/* <!-- Mensaje enviado inicio --> */}
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{mensaje}</p>
                    <span className="time_date"> 11:01 AM | June 9</span>
                </div>
            </div>
            {/* <!-- Mensaje enviado inicio --> */}
        </>
    )
}
