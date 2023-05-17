/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { createContext, useState } from "react";
import { fetchSinToken } from "../../helpers/fetch";

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
                name: usuario.nombre,
                email: usuario.email
            })
        }

        return resp.ok

    }

    const register = (name, email, password) => { }

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