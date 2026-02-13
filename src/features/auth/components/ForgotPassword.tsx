import { useForm, type SubmitHandler } from "react-hook-form";
import { ForgotPasswordSchema, type ForgotPasswordType } from "../schemas/ForgotPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import useForgot from "../hooks/useForgot";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const {setTempEmail} = useAuth();
    const navigate = useNavigate();

    const {register, formState : {errors}, handleSubmit,  } = useForm<ForgotPasswordType>(
        {resolver : zodResolver(ForgotPasswordSchema)}
    )

    const {mutate, data, isSuccess, error, isPending} = useForgot();

    const ForgotSubmtHandle : SubmitHandler<ForgotPasswordType> = (data)=>{
        mutate(data,{
            onSuccess : () => {
                setTempEmail(data.email);
            }
        }
        )
    }
    
    return (
        <div>


            <div  className="flex flex-col items-center justify-center h-screen ">
                <div className="w-full max-w-md p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
            <div>
                {error && <span className="text-center text-red-500"> {error.message} </span>}
            </div>

            <div>
                {isSuccess && <span className="text-center text-green-500"> {data.response} </span>}
            </div>

                    <p className="text-center text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>

                    <form className="space-y-4" onSubmit={handleSubmit(ForgotSubmtHandle)} >
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" {...register('email')} />

                        {errors .email && <span className="text-red-500"> {errors.email.message} </span>}
                        
                        <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90  hover:cursor-pointer"> { isPending ? 'En cours ...' : 'Send Reset Link' } </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;