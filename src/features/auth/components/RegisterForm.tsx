import { useForm } from "react-hook-form";
import Button from "../../../components/Button"
import useRegister from "../hooks/useRegister"
import type { RegisterInput } from "../types";


function RegisterForm(){

    //Usage du useRegister pour l'envoie de la donnée
    const {mutate, isPending, error} = useRegister();
    
    //Usage de l'hook useForm pour la gestion du formulaire
    const {register, handleSubmit} = useForm<RegisterInput>();


    const onSubmit = (data : RegisterInput)=>{
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

                    {/**Formulaire */}
                    <div>
                        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="firstname">FirstName</label>
                                <input type="text" className="input border-0 " {...register("firstname")} />
                            </div>

                            <div className="">
                                <label htmlFor="lastname">LastName</label>
                                <input type="text" {...register("lastname")} />
                            </div>

                            <div className="">
                                <label htmlFor="email">Email</label>
                                <input type="email" {...register("email")} />
                            </div>

                            <div className="">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input type="password" {...register("password")} />

                                </div>
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