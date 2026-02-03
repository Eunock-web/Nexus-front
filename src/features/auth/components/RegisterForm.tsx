import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button"
import useRegister from "../hooks/useRegister"
import type { RegisterInput } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../schemas/RegisterSchema";


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
            <div>

            </div>

            {/**Partie droite du register */}
            <div>
                {/**Logo */}
                <div>

                </div>

                {/**Corps */}
                <div>
                    {/**Texte avant le formulaire */}
                    <div>
                        <h1> Create your account </h1>
                        <p> Join the plateform for high-performance teams </p>
                    </div>

                    <div>

                    </div>

                    {/** Affichage de l'erreur du mounted */}
                    <div>
                        {error && <span>{error.message}</span> }
                    </div>

                    <div>
                        {isSuccess && <span> {data.response}</span> } 
                        {isSuccess && <span> {data.otpResponse}</span> }
                    </div>

                    {/**Formulaire */}
                    <div>
                        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="firstname">FirstName</label>
                                <input type="text" className="input border-0 " {...register("firstname")} />
                                {errors.firstname && <span>{errors.firstname.message}</span> }
                            </div>

                            <div className="">
                                <label htmlFor="lastname">LastName</label>
                                <input type="text" {...register("lastname")} />
                                {errors.lastname && <span>{errors.lastname.message}</span> }
                            </div>

                            <div className="">
                                <label htmlFor="email">Email</label>
                                <input type="email" {...register("email")} />
                                {errors.email && <span>{errors.email.message}</span> }
                            </div>

                            <div className="">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input type="password" {...register("password")} />

                                </div>
                                {errors.password && <span>{errors.password.message}</span> }
                            </div>

                            <div className="">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div>
                                    <input type="password" {...register("confirmPassword")} />

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

                        <p>Already have an account? <span>Login</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RegisterForm