import { useForm, type SubmitHandler } from "react-hook-form";
import useLogin from "../hooks/useLogin"
import type { LoginInterface } from "../../../types";
import { LoginSchema, type LoginType } from "../schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GithubIcon, Lock, Mail, Zap } from "lucide-react";
import Button from "../../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function LoginForm() {
    const { mutate, isPending, error, isSuccess, data } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({ 
        resolver: zodResolver(LoginSchema) 
    });

    const onSubmit: SubmitHandler<LoginInterface> = (data) => {
        mutate(data);
    }

    return (
        <div className="flex min-h-screen max-h-screen">
            {/** Partie GAUCHE visible sur desktop (Identique au Register) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-semiprimary text-white p-12 flex-col justify-between min-w-0">
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                    <svg fill="none" height="100%" viewBox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-slow">
                        <circle cx="400" cy="400" r="300" stroke="white" strokeDasharray="20 20" strokeWidth="2"></circle>
                        <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="4"></circle>
                        <path d="M0 800L800 0" stroke="white" strokeWidth="1"></path>
                        <path d="M100 800L800 100" stroke="white" strokeWidth="1"></path>
                    </svg>
                </div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-black"> Nexus </h1>
                </div>

                <div className="flex flex-col gap-4 relative z-10 max-w-[80%]">
                    <h1 className="font-black text-6xl "> Experience real-time collaboration that scales with your ambition. </h1>
                    <p className="font-medium mb-8 text-xl text-white/80 relative z-10 max-w-[70%]"> Built for high-performance teams. Join 10,000+ organizations building the future.</p>
                </div>

                <div className="flex flex-row gap-3 border border-white/20 px-5 py-6 bg-white/20 rounded-xl relative z-10 max-w-[75%]">
                    <div>
                        <Zap className="bg-white/20 border-white/20 border p-2 rounded-full " size={60} fill="white" />
                    </div>
                    <div className="flex flex-col justify-center relative z-10 max-w-[80%]">
                        <h1 className=" font-bold text-2xl "> Instant Sync </h1>
                        <p className="text-2sm leading-relaxed text-white/80 ">Every change you make is reflected instantly across your entire team's dashboard.</p>
                    </div>
                </div>

                <p className="text-white/80 text-sm relative z-10"> © 2024 Nexus Inc. All rights reserved. </p>
            </div>

            {/** Partie DROITE (Formulaire) */}
            <div className="flex flex-col gap-4 mx-4 w-full lg:w-1/2 lg:px-45 lg:py-12 justify-center">
                {/** Logo mobile uniquement */}
                <div className="flex lg:hidden justify-center items-center">
                    <h1 className="font-bold text-3xl"> Nexus </h1>
                </div>

                {/** Header du formulaire */}
                <div className="flex flex-col gap-1 lg:items-start items-center">
                    <h1 className="text-4xl font-bold "> Welcome back </h1>
                    <p className="text-lg text-gray-500 leading-relaxed text-center lg:text-left"> 
                        Enter your credentials to access your workspace 
                    </p>
                </div>

                {/** Gestion des retours API */}
                <div className="text-center">
                    {error && <span className="text-red-500 font-medium"> {error.message} </span>}
                    {isSuccess && <span className="text-green-500 font-medium"> {data.response} </span>}
                </div>

                {/** Formulaire */}
                <div className="mt-4">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-xl">Email</label>
                            <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary">
                                <Mail className="text-gray-500" size={25} />
                                <input 
                                    type="email" 
                                    className="w-full placeholder-gray-700 text-lg outline-0 bg-transparent" 
                                    placeholder="Enter your Email" 
                                    {...register("email")}
                                    required
                                />
                            </div>
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-medium text-xl">Password</label>
                            <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary">
                                <Lock className="text-gray-500" size={25} />
                                <input 
                                    type="password" 
                                    className="w-full placeholder-gray-700 text-lg outline-0 bg-transparent" 
                                    placeholder="Enter your password" 
                                    {...register("password")}
                                    required
                                />
                            </div>
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <input type="checkbox" id="checkbox" className="h-4 w-4" />
                                <label htmlFor="checkbox" className="text-gray-600"> Remember me</label>
                            </div>
                            <span className="text-semiprimary font-medium cursor-pointer hover:underline">Forgot Password?</span>
                        </div>

                        <Button className="rounded-xl bg-semiprimary px-4 py-3 w-full text-white mt-2" disabled={isPending}>
                            {isPending ? 'Envoi en cours...' : 'Sign In'}
                        </Button>
                    </form>

                    <p className="text-gray-500 text-sm text-center my-6"> Or Continue with </p>

                    {/** OAuth2 Buttons */}
                    <div className="flex flex-row justify-between mb-8">
                            <Button className="flex flex-row gap-2 lg:px-18  px-9 py-2 border border-gray-400 rounded-xl transition-colors" >
                                <FcGoogle size={30} />
                                <span className="flex font-semibold text-lg items-center"> Google </span>
                            </Button>

                            <Button className="flex flex-row gap-2 lg:px-20 px-9 py-2 border border-gray-400 rounded-xl transition-colors" >
                                <GithubIcon className="  text-black" size={30} />
                                <span className="flex font-semibold text-lg items-center"> GitHub </span>
                            </Button>
                    </div>

                    <p className="text-center text-gray-500 leading-relaxed">
                        Don't have an account? 
                        <Link to="/register" className="text-semiprimary text-lg font-medium hover:underline ml-1">
                            Start your 14-day free trial
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;