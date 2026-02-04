import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button"
import useRegister from "../hooks/useRegister"
import type { RegisterInput } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";


function RegisterForm(){

    //Usage du useRegister pour l'envoie de la donnée
    const {mutate, isPending, error, data, isSuccess} = useRegister();
    
    //Usage de l'hook useForm pour la gestion du formulaire
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterInput>({resolver: zodResolver(RegisterSchema)});


    const onSubmit: SubmitHandler<RegisterInput> = (data)=>{
        mutate(data);
    }

return <>
        <div>
            {/** Partie gauche du register visible sur desktop */}
            <div className="hidden ">

            </div>

            {/**Partie droite du register */}
            <div className="flex flex-col gap-3">
                {/**Logo */}
                <div>

                </div>

                {/**Corps */}
                <div className=" flex flex-col gap-2 ">
                    {/**Texte avant le formulaire */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold "> Create your account </h1>
                        <p className="text-lg font text-gray-500 leading-relaxed"> Join the plateform for high-performance teams. </p>
                    </div>

                    <div>

                    </div>

                    {/** Affichage de l'erreur du mounted */}
                    <div>
                        {error && <span>{error.message}</span> }
                    </div>

                    <div>
                        {isSuccess && <span> {data.otpResponse}</span> }
                    </div>

                    <div>
                        {isSuccess && <span> {data.response}</span> }
                    </div>

                    {/**Formulaire */}
                    <div>
                        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="firstname" className="font-medium text-xl">FirstName</label>
                                <div className="flex flex-row gap-2 border border-gray-400 p-4 rounded-lg ">
                                    <User className="text-gray-500 " size={25} />
                                    <input type="text" className="input  placeholder-gray-700 text-lg  " placeholder="Enter your firstname" {...register("firstname")} />    
                                </div>
                                {errors.firstname && <span>{errors.firstname.message}</span> }
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="lastname" className="font-medium text-xl">LastName</label>
                                <div className="flex flex-row gap-2 border border-gray-400 p-4 rounded-lg ">
                                    <User className="text-gray-500 " size={25} />
                                    <input type="text" className="input  placeholder-gray-700 text-lg  " placeholder="Enter your lastname" {...register("lastname")} />    
                                </div>
                                {errors.lastname && <span>{errors.lastname.message}</span> }
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="email" className="font-medium text-xl">Email</label>
                                <div className="flex flex-row gap-2 border border-gray-400 p-4 rounded-lg ">
                                    <Mail className="text-gray-500 " size={25} />
                                    <input type="email" className="input  placeholder-gray-700 text-lg  " placeholder="Enter your Email" {...register("email")} />    
                                </div>
                                {errors.email && <span>{errors.email.message}</span> }
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="font-medium text-xl">Password</label>
                                <div className="flex flex-row gap-2 border border-gray-400 p-4 rounded-lg ">
                                    <Lock className="text-gray-500 " size={25} />
                                    <input type="password" className="input  placeholder-gray-700 text-lg  " placeholder="Min 8 character" {...register("password")} />    
                                </div>
                                {errors.password && <span>{errors.password.message}</span> }
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="confirmPassword" className="font-medium text-xl">Confirm Password</label>
                                <div className="flex flex-row gap-2 border border-gray-400 p-4 rounded-lg ">
                                    <Lock className="text-gray-500 " size={25} />
                                    <input type="password" className="input  placeholder-gray-700 text-lg  " placeholder="Min 8 character" {...register("confirmPassword")} />    
                                </div>
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span> }
                            </div>
                            
                            <div>
                                <input type="checkbox" />
                                <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy.</span></p>
                            </div>

                            <div>
                                <Button className="rounded-xl" disabled = {isPending}>{isPending? 'Envoi en cours' : 'Create Acount' }</Button>
                            </div>
                        </form>

                        {/**Boutton de l'OAuth2 */}
                        <div>
                            <div>
                                
                            </div>

                            <div>

                            </div>
                        </div>

                        <p>Already have an account? <Link to={"/login"}> Login </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RegisterForm