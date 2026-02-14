import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button"
import useRegister from "../hooks/useRegister"
import type { RegisterInput } from "../../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { GithubIcon, Lock, Mail, User, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../hooks/useAuth";
import useGoogle from "../hooks/useGoogle";
import useGithub from "../hooks/useGithub";


function RegisterForm() {

    //Usage de l'hook useForm pour la gestion du formulaire
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({ resolver: zodResolver(RegisterSchema) });
    const { setTempEmail } = useAuth();
    const navigate = useNavigate();

    //Usage du useRegister pour l'envoie de la donnée
    const { mutate: mutateRegister, isPending: isRegisterPending, error, data, isSuccess } = useRegister();

    const { login: googleLogin } = useGoogle();
    const { login: githubLogin } = useGithub();

    const onSubmit: SubmitHandler<RegisterInput> = (data) => {
        mutateRegister(data, {
            onSuccess: () => {
                setTempEmail(data.email);
                setTimeout(() => navigate("/otp"), 3000)
            }
        });
    }

    return <>
        <div className="flex min-h-screen max-h-screen">
            {/** Partie gauche du register visible sur desktop */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-semiprimary text-white p-12 flex-col justify-between min-w-0 ">
                {/* Background Decoration - Repris de WorkspacePro */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                    <svg fill="none" height="100%" viewBox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-slow">
                        <circle cx="400" cy="400" r="300" stroke="white" strokeDasharray="20 20" strokeWidth="2"></circle>
                        <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="4"></circle>
                        <path d="M0 800L800 0" stroke="white" strokeWidth="1"></path>
                        <path d="M100 800L800 100" stroke="white" strokeWidth="1"></path>
                    </svg>
                </div>

                <div>
                    {/**Logo + Appname */}
                    <h1 className="text-5xl font-black"> Nexus </h1>
                </div>

                <div className="flex flex-col gap-4 relative z-10 max-w-[80%]">
                    <h1 className="font-black text-6xl "> Experience real-time collaboration that scales with your ambition. </h1>
                    <p className="font-medium mb-8 text-xl text-white/80 relative z-10 max-w-[70%]"> Built for high-performance teams. Join, 10,000+ organizations building the future.</p>
                </div>

                <div className="flex flex-row gap-3 border border-white/20 px-5 py-6 bg-white/20 rounded-xl relative z-10 max-w-[75%]">
                    <div>
                        <Zap className="bg-white/20 border-white/20 border p-2 rounded-full " size={60} fill="white" />
                    </div>

                    <div className="flex flex-col justify-center relative z-10 max-w-[80%]">
                        <h1 className=" font-bold text-2xl "> Instance Sync </h1>
                        <p className="text-2sm leading-relaxed font- text-white/80 ">Every change you  make is reflected instanctly across your entire teams's dashboard.</p>
                    </div>
                </div>

                <p className="text-white/80 text-sm relative z-10 max-w-[80%]"> 2024 Nexus Inc. All rights reserved. </p>
            </div>

            {/**Partie droite du register */}
            <div className="flex flex-col gap-4 mx-4 lg:w-1/2 lg:px-50 lg:py-8 lg:max-h-screen">
                {/**Logo */}
                <div className="flex fleex-col justify-center items-center">
                    <h1 className="font-bold text-3xl"> Nexus </h1>
                </div>

                {/**Corps */}
                <div className=" flex flex-col gap-2 ">
                    {/**Texte avant le formulaire */}
                    <div className="flex flex-col gap-1 ">
                        <h1 className="text-3xl font-bold "> Create your account </h1>
                        <p className="text-lg font text-gray-500 leading-relaxed"> Join the plateform for high-performance teams. </p>
                    </div>


                    {/** Affichage de l'erreur du mounted */}
                    <div>
                        {isSuccess && <span className="text-green-600 text-xl text-center"> {data.otpResponse}</span>}
                    </div>

                    <div>
                        {error && <span className="text-red-600 text-xl text-center">{error.message}</span>}
                    </div>


                    <div className="flex ">
                        {isSuccess && <span className="text-green-600 text-xl text-center justify-center items-center"> {data.response}</span>}
                    </div>

                    {/**Formulaire */}
                    <div className="">
                        <form className="flex flex-col gap-5 lg:gap-3 lg:-mt-5" onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="firstname" className="font-medium text-xl">FirstName</label>

                                <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary ">
                                    <User className="text-gray-500 " size={25} />
                                    <input
                                        type="text"
                                        className="input  placeholder-gray-700 text-lg outline-0 bg-transparent "
                                        placeholder="Enter your firstname" {...register("firstname")}
                                        required
                                    />
                                </div>

                                {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="lastname" className="font-medium text-xl">LastName</label>

                                <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary ">
                                    <User className="text-gray-500 " size={25} />
                                    <input
                                        type="text"
                                        className="input  placeholder-gray-700 text-lg outline-0 bg-transparent"
                                        placeholder="Enter your lastname" {...register("lastname")}
                                        required
                                    />
                                </div>

                                {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
                            </div>

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

                            <div className="flex flex-col gap-2">
                                <label htmlFor="confirmPassword" className="font-medium text-xl">Confirm Password</label>

                                <div className="flex flex-row gap-2 border border-gray-400 p-3 rounded-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-primary ">
                                    <Lock className="text-gray-500 " size={25} />
                                    <input
                                        type="password"
                                        className="input  placeholder-gray-700 text-lg focus:ring-0 outline-0 bg-transparent  "
                                        placeholder="Min 8 character" {...register("confirmPassword")}
                                        required
                                    />
                                </div>

                                {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                            </div>

                            <div className="flex flex-row gap-2">
                                <input type="checkbox" className="h-4 w-4 mt-1" />
                                <p className="text-gray-500"> I agree to the <span className="text-semiprimary font-bold text-sm leading-relaxed">Terms of Service</span> and <span className="text-semiprimary font-bold text-sm leading-relaxed">Privacy Policy.</span></p>
                            </div>

                            <div className="">
                                <Button className="rounded-xl bg-semiprimary px-4 py-3 w-full text-white mb-5" disabled={isRegisterPending}>{isRegisterPending ? 'Envoi en cours' : 'Create Acount'}</Button>
                            </div>
                        </form>

                        <p className="text-gray-500 text-sm text-center mb-5"> Or Continue with  </p>

                        {/**Boutton de l'OAuth2 */}
                        <div className="flex flex-row justify-between mb-5 ">
                            <Button className="flex flex-row gap-2 lg:px-18  px-9 py-2 border border-gray-400 rounded-xl transition-colors hover:bg-primary hover:text-white " onClick={() => googleLogin()} >
                                <FcGoogle size={30} />
                                <span className="flex font-semibold text-lg items-center"> Google </span>
                            </Button>

                            <Button className="flex flex-row gap-2 lg:px-20 px-9 py-2 border border-gray-400 rounded-xl transition-colors hover:bg-primary hover:text-white" onClick={() => githubLogin()} >
                                <GithubIcon className=" hover:bg-primary hover:text-white  text-black" size={30} />
                                <span className="flex font-semibold text-lg items-center "> GitHub </span>
                            </Button>
                        </div>

                        <p className="text-center text-gray-500 leading-relaxed mb-7">Already have an account? <Link to={"/login"} className="text-semiprimary text-lg font-medium hover:underline"> Login In </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RegisterForm