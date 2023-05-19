import moment from "moment"
import { AuthProvider } from "./context/auth/AuthContext"
import { ChatProvider } from "./context/chat/ChatContext"
import { SocketProvider } from "./context/sockets/SocketContext"
import AppRouter from "./router/AppRouter"
import 'moment/locale/es'

moment.locale('es')

function ChatApp() {
  
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>

  )
}

export default ChatApp
