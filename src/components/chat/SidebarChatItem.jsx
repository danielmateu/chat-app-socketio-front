import { useContext } from "react"
import { ChatContext } from "../../context/chat/ChatContext"
import { types } from "../../types/types"
import { fetchConToken } from "../../helpers/fetch"

/* eslint-disable react/prop-types */
export const SidebarChatItem = ({ usuario }) => {

    // console.log(usuario);
    const { chatState, dispatch } = useContext(ChatContext)
    const { chatActivo } = chatState

    const onClick = async () => {
        // console.log(usuario.uid);
        // console.log(chatActivo);
        dispatch({
            type: types.activarChat,
            payload: usuario.uid,

        })

        //  Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${usuario.uid}`)
        // console.log(resp.mensajes);
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes.reverse()
        })

    }

    return (
        <>
            {/* <!-- conversación activa inicio --> */}
            <div
                className={`chat_list ${usuario.uid === chatActivo && 'active_chat'}}`}
                // className="chat_list active_chat"
                onClick={onClick}
            >
                {/* active_chat */}
                <div className="chat_people">
                    <div className="chat_img">
                        <img src="../useravatar.png" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                        <h5>{usuario.nombre}</h5>
                        {
                            usuario.online
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
