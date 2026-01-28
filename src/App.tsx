import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RegisterForm from "./features/auth/components/RegisterForm";
import LoginForm from "./features/auth/components/LoginForm"


const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient} >
            <RegisterForm />
            <LoginForm />
      </QueryClientProvider>
    </>
  )
}

export default App
