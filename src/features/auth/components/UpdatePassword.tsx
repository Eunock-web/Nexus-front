

function UpdatePassword(){
    return <>
        <div>
            <div  className="flex flex-col items-center justify-center h-screen ">
                <div className="w-full max-w-md p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center">Update Password</h2>
                    <p className="text-center text-gray-600">Enter your new password</p>
                    <form className="space-y-4"  >
                        <input type="password" placeholder="* * * * * * * * *" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"  />
                        <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UpdatePassword