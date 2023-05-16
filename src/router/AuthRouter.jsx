import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import '../css/login-register.css'


export const AuthRouter = () => {
    return (

        <>
            <div className="limiter">

                <div className="container-login100">

                    <div className="wrap-login100 p-t-50 p-b-90">
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />

                            {/* /* This route is a catch-all route that matches any path that hasn't been matched by the
        previous routes. It uses the `Navigate` component to redirect the user to the `/auth/login`
        path, effectively forcing them to log in before accessing any other pages. */ }
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </>

    )
}
