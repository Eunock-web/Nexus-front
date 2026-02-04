import { useForm, type SubmitHandler } from "react-hook-form";
import useLogin from "../hooks/useLogin"
import type { LoginInterface } from "../types";
import { LoginSchema, type LoginType } from "../schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {  GithubIcon, Lock, Mail } from "lucide-react";
import Button from "../../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


function LoginForm(){
    const {mutate, isPending,error, isSuccess, data} = useLogin();

    const {register, handleSubmit, formState : {errors}} = useForm<LoginType>({resolver : zodResolver(LoginSchema)});

    const onSubmit: SubmitHandler<LoginInterface> = (data) =>{
        mutate(data);
    }
    return <>
        <div>
            {/**Partie droite visible sur desktop */}
            <div>

            </div>

            {/**Partie gauche avec le formulaire */}
            <div className="flex flex-col gap-2 mx-3">
                {/**Logo avec nom app */}
                <div className="flex fleex-col justify-center items-center">
                    <h1 className="font-bold text-3xl"> Nexus </h1>
                </div>

                <div>
                    {error && <span> {error.message} </span>}
                </div>

                {/**Message apres success du login */}
                <div>
                    {isSuccess && <span> {data.response} </span>}
                </div>

                {/**Header avant le formulaire */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">Welcome back</h1>
                    <p className="text-lg font text-gray-500 leading-relaxed text-center">Enter your credentials to access your workspace</p>
                </div>

                {/**Formulaire */}
                <div className="flex flex-col gap-4 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                                    <div className="flex flex-col gap-2 ">
                                <label htmlFor="email" className="font-medium text-xl">Email</label>

                                <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary ">
                                    
                                    <Mail className="text-gray-500 " size={25} />
                                    <input 
                                        type="email" 
                                        className="input  placeholder-gray-700 text-lg outline-0 bg-transparent  " 
                                        placeholder="Enter your Email" {...register("email")}
                                        required
                                    />
                                </div>

                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="font-medium text-xl">Password</label>

                                <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary ">
                                    <Lock className="text-gray-500 " size={25} />
                                    <input 
                                        type="password" 
                                        className="input  placeholder-gray-700 text-lg outline-0 bg-transparent  " 
                                        placeholder="Min 8 character" {...register("password")}
                                        required
                                    />
                                </div>

                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            </div>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-2">
                                <input type="checkbox" id="checkbox" className="h-4 w-4 mt-1" />
                                <label htmlFor="checkbox"> Remember me</label>
                            </div>

                            <span className="text-semiprimary font-medium ">Forgot Password ?</span>
                        </div>

                        <div>
                                <Button className="rounded-xl bg-semiprimary px-4 py-3 w-full text-white mb-7" disabled = {isPending}>{isPending? 'Envoi en cours' : 'Sign In' }</Button>
                        </div>
                        
                    </form>

                        <p className="text-gray-500 text-sm text-center mb-7"> Or Continue with  </p>

                        {/**Boutton de l'OAuth2 */}
                        <div className="flex flex-row justify-between mb-7 ">
                            <Button className="flex flex-row gap-2  px-9 py-2 border border-gray-400 rounded-xl transition-colors" >
                                <FcGoogle size={30} />
                                <span className="flex font-semibold text-lg items-center"> Google </span>
                            </Button>

                            <Button className="flex flex-row gap-2  px-9 py-2 border border-gray-400 rounded-xl transition-colors" >
                                <GithubIcon className="  text-black" size={30} />
                                <span className="flex font-semibold text-lg items-center"> GitHub </span>
                            </Button>
                        </div>



                    {/** last Part */}
                    <p className="text-center text-gray-500 leading-relaxed mb-7">Don't have an account? <span className="text-semiprimary text-lg font-medium hover:underline">
                       <Link to={"/register"}>
                            Start your 14-day free trial
                       </Link> </span></p>
                </div>
            </div> 
        </div>
    </>
}

export default LoginForm