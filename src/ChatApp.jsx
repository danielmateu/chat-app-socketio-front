import { AuthProvider } from "./context/auth/AuthContext"
import AppRouter from "./router/AppRouter"


function ChatApp() {


  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default ChatApp
