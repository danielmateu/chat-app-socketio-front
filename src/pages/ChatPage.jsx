import { useContext } from 'react'
import { ChatSelect } from '../components/chat/ChatSelect'
import { InboxPeople } from '../components/chat/InboxPeople'
import { Messages } from '../components/chat/Messages'
import '../css/chat.css'
import { ChatContext } from '../context/chat/ChatContext'

const ChatPage = () => {

    const { chatState } = useContext(ChatContext)
    const { chatActivo } = chatState

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