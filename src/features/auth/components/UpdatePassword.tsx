import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth"
import useUpdate from "../hooks/useUpdate";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { UpdateInterface } from "../../../types";


function UpdatePassword() {
    const { tempEmail } = useAuth();
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useUpdate();

    const { handleSubmit, register, formState: { errors } } = useForm<Pick<UpdateInterface, 'password'>>();

    const handleSubmitUpdate: SubmitHandler<Pick<UpdateInterface, 'password'>> = (data) => {
        if (!tempEmail) return;
        mutate({ ...data, email: tempEmail }, {
            onSuccess: () => {
                setTimeout(() => navigate("/login"), 3000);
            }
        })
    }

    return <>
        <div>
            <div className="flex flex-col items-center justify-center h-screen ">
                <div className="w-full max-w-md p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center">Update Password</h2>

                    <div>
                        {isError && <span> {error.message} </span>}
                    </div>

                    <p className="text-center text-gray-600npm run dev">Enter your new password</p>
                    <form className="space-y-4" onSubmit={handleSubmit(handleSubmitUpdate)} >

                        <input type="password" placeholder="* * * * * * * * *" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" {...register("password", { required: "Password is required" })} />
                        {errors.password && <span className="text-red-500 text-sm"> {errors.password.message} </span>}
                        <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90">{isPending ? 'En cours' : 'Update Password'}</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UpdatePassword