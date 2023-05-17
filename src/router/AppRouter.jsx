import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth/AuthContext"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PRivateRoute"

const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext)
    // console.log(auth);

    useEffect(() => {
        verifyToken()
    }, [verifyToken])

    if (auth.checking) return 'Espere un momento...'

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*"
                    element={<PublicRoute isAuthenticated={auth.logged} />}
                />
                <Route
                    path="/"
                    element={<PrivateRoute isAuthenticated={auth.logged} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter