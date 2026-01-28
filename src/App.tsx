import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RegisterForm from "./features/auth/components/RegisterForm";

const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient} >
            <RegisterForm />
        </QueryClientProvider>
    </>
  )
}

export default App
