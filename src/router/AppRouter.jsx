import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import ChatPage from "../pages/ChatPage"

import { AuthRouter } from "./AuthRouter"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth/AuthContext"

const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext)

    useEffect(() => {
        verifyToken()
    }, [verifyToken])

    if (auth.checking) return 'Espere un momento...'

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/*" element={<Navigate to="/chat" />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter