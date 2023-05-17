/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { createContext, useState } from "react";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
// import Swal from "sweetalert2";
export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState)

    const login = async (email, password) => {
        const resp = await fetchSinToken('login', { email, password }, 'POST')
        // console.log(resp);

        if (resp.ok) {
            localStorage.setItem('token', resp.token)
            const { usuario } = resp
            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                nombre: usuario.nombre,
                email: usuario.email
            })
        }

        console.log('Autenticado!');

        return resp.ok

    }

    const register = async(nombre, email, password) => {

        const resp = await fetchConToken('login/new', { nombre, email, password }, 'POST')
        // console.log(resp);

        if (resp.ok) {
            localStorage.setItem('token', resp.token)
            const { usuario } = resp
            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email
            })
            console.log('Registrado!');
            return true
        }
        return resp.msg
    }

    const verifyToken = useCallback(() => { }, [])

    const logout = () => { }



    return (
        <AuthContext.Provider value={{
            login,
            register,
            verifyToken,
            logout,
            auth
        }}>
            {children}
        </AuthContext.Provider>
    )
}