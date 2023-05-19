/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../chat/ChatContext';
import { types } from '../../types/types';
// import { scrollToBottomAnimated } from '../../helpers/scrollToBottom';
import { animateScroll } from 'react-scroll';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)

    useEffect(() => {
        if (auth.logged) {
            conectarSocket()
            // console.log('Conectar socket');
        }
    }, [auth, conectarSocket])

    useEffect(() => {
        if (!auth.logged) {
            desconectarSocket()
            // console.log('Desconectar socket');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    // Escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('lista-usuarios', (usuarios) => {
            // console.log(usuarios);
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios

            })
        })
    }, [socket, dispatch])

    useEffect(() => {
        socket?.on('mensaje-personal', (mensaje) => {
            // console.log(mensaje);
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            })
            setTimeout(() => {
                animateScroll.scrollToBottom({
                    containerId: 'mensajes',
                    // duration: 0
                })
            }, 50);
            // TODO: Mover el scroll al final
            // scrollToBottomAnimated('mensajes')

        })
    }, [socket, dispatch])



    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}