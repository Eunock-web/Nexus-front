import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/router";
import { AuthProvider } from "./context/AuthContext";


const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient} >
        <AuthProvider>
          <RouterProvider router={appRouter} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

