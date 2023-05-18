/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { AuthContext } from '../auth/AuthContext';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');

    const { auth } = useContext(AuthContext)

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



    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}