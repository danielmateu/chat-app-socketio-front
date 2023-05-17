import { AuthProvider } from "./context/auth/AuthContext"
import { SocketProvider } from "./context/sockets/SocketContext"
import AppRouter from "./router/AppRouter"


function ChatApp() {


  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  )
}

export default ChatApp
