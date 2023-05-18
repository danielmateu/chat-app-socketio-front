import { useContext } from "react";
import { SidebarChatItem } from "./SidebarChatItem"
import { ChatContext } from "../../context/chat/ChatContext";
import { AuthContext } from "../../context/auth/AuthContext";


export const Sidebar = () => {

    const { chatState } = useContext(ChatContext)
    const { auth } = useContext(AuthContext)
    const { usuarios } = chatState
    const { uid } = auth

    return (
        <>
            {/* <!-- Sidebar inicio --> */}
            <div className="inbox_chat">

                {usuarios
                    .filter(usuario => usuario.uid !== uid)
                    .map(usuario => (
                        <SidebarChatItem
                            key={usuario.uid}
                            usuario={usuario}
                            // name={usuario.nombre}
                            // online={usuario.online}
                            // uid={usuario.uid}
                        />))
                }
                {/* <!-- Espacio extra para scroll --> */}
                <div className="extra_space"></div>
            </div>
            {/* <!-- Sidebar Fin --> */}
        </>
    )
}
