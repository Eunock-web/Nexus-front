import { useAuth } from "../hooks/useAuth"



function Dashboard(){
    const {user} = useAuth();
    return <>
            <div>
                <h1> Hello {user?.email} </h1>
            </div>
        </>
}

export default Dashboard