import { useContext, useState } from "react"
import { SocketContext } from "../../context/sockets/SocketContext"
import { AuthContext } from "../../context/auth/AuthContext"
import { ChatContext } from "../../context/chat/ChatContext"


export const SendMessage = () => {

    const [mensaje, setMensaje] = useState('')
    const { socket } = useContext(SocketContext)
    const { auth } = useContext(AuthContext)
    const {chatState} = useContext(ChatContext)

    const onChange = ({ target }) => {
        setMensaje(target.value)

    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (mensaje.length === 0) return
        console.log(mensaje)
        setMensaje('')

        // TODO: Emitir un evento de sockets para enviar el mensaje
        // {
        // de: UID del usuario que envia el mensaje
        // para: UID del usuario que recibe el mensaje
        // mensaje: El mensaje en si
        // }

        socket.emit('mensaje-personal', {
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje
        })

        // TODO: Hacer el dispatch del mensaje...


    }

    return (
        <form
            onSubmit={onSubmit}
        >
            {/* <!-- Enviar mensaje Inicio --> */}
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Mensaje..."
                        value={mensaje}
                        onChange={onChange}
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button
                        className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
            {/* <!-- Enviar mensaje Fin --> */}
        </form>
    )
}
