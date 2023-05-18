/* eslint-disable react/prop-types */
export const SidebarChatItem = ({  name, online, }) => {

    return (
        <>
            {/* <!-- conversación activa inicio --> */}
            <div className="chat_list ">
                {/* active_chat */}
                <div className="chat_people">
                    <div className="chat_img">
                        <img src="../useravatar.png" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                        <h5>{name}</h5>
                        {
                            online
                                ? <span className="text-success">Online</span>
                                : <span className="text-danger">Offline</span>
                        }
                    </div>
                </div>
            </div>

            {/* <!-- conversación activa Fin --> */}
        </>
    )
}
