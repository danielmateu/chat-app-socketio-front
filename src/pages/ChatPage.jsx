import { useState } from 'react'
import { ChatSelect } from '../components/chat/ChatSelect'
import { InboxPeople } from '../components/chat/InboxPeople'
import { Messages } from '../components/chat/Messages'
import '../css/chat.css'

const ChatPage = () => {

    const [chatActivo] = useState(true)

    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />
                {
                    (chatActivo)
                        ? <Messages />
                        : <ChatSelect />
                }
            </div>
        </div>
    )
}

export default ChatPage