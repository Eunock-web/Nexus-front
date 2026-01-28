import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LoginForm from "./features/auth/components/LoginForm"


const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    </>
  )
}

export default App
