import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import ChatPage from "../pages/ChatPage"

import { AuthRouter } from "./AuthRouter"

const AppRouter = () => {
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