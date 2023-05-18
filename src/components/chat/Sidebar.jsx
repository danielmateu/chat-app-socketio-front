import { useContext } from "react";
import { SidebarChatItem } from "./SidebarChatItem"
import { ChatContext } from "../../context/chat/ChatContext";


export const Sidebar = () => {

    const { chatState } = useContext(ChatContext)

    const { usuarios } = chatState

    return (
        <>
            {/* <!-- Sidebar inicio --> */}
            <div className="inbox_chat">
                {usuarios.map(usuario => (
                    <SidebarChatItem
                        key={usuario.uid}
                        name={usuario.nombre}
                        online={usuario.online}
                    />))}
                {/* <!-- Espacio extra para scroll --> */}
                <div className="extra_space"></div>
            </div>
            {/* <!-- Sidebar Fin --> */}
        </>
    )
}
