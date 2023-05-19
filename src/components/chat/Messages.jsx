import { useContext } from "react"
import { IncommingMessage } from "./IncommingMessage"
import { OutgoingMessage } from "./OutgoingMessage"
import { SendMessage } from "./SendMessage"
import { ChatContext } from "../../context/chat/ChatContext"
import { AuthContext } from "../../context/auth/AuthContext"


export const Messages = () => {

    // const msgs = []

    const { chatState } = useContext(ChatContext)
    const { auth } = useContext(AuthContext)


    return (
        <>
            {/* <!-- Chat inicio --> */}
            <div

                className="mesgs">

                {/* <!-- Historia inicio --> */}
                <div
                    className="msg_history"
                    id="mensajes"
                >

                    {
                        chatState.mensajes.map(msg => (
                            (msg.para === auth.uid)
                                ? <IncommingMessage key={msg._id} msg={msg} />
                                : <OutgoingMessage key={msg._id} msg={msg} />
                        ))
                    }

                </div>
                {/* <!-- Historia Fin --> */}

                <SendMessage />

            </div>
            {/* <!-- Chat Fin --> */}
        </>
    )
}
