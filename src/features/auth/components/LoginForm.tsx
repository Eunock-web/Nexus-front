import { useForm, type SubmitHandler } from "react-hook-form";
import useLogin from "../hooks/useLogin"
import type { LoginInterface } from "../types";
import { LoginSchema } from "../schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function LoginForm(){
    const {mutate, isPending, isSuccess, data} = useLogin();

    const {register, handleSubmit, formState : {errors}} = useForm<LoginInterface>({resolver : zodResolver(LoginSchema)});

    const onSubmit: SubmitHandler<LoginInterface> = (data) =>{
        mutate(data);
    }
    return <>
        <div>
            {/**Partie droite visible sur desktop */}
            <div>

            </div>

            {/**Partie gauche avec le formulaire */}
            <div>
                {/**Logo avec nom app */}
                <div>
                    <div>

                    </div>
                    <h1>Nexus</h1>
                </div>

                {/**Message apres success du login */}
                <div>
                    {isSuccess && data.response}
                </div>

                {/**Header avant le formulaire */}
                <div>
                    <h1>Welcome back</h1>
                    <p>Enter your credentials to access your workspace</p>
                </div>

                {/**Formulaire */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <div>
                                <input type="email" id="email" { ...register("email")}/>
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">Email address</label>
                            <div>
                                <input type="password" id="password" {...register("password")} />

                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row ">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"></label>
                            </div>

                            <span>Forgot Password ?</span>
                        </div>

                        <div>
                                <button className="rounded-xl" disabled = {isPending}>{isPending? 'Envoi en cours' : 'Sign In' }</button>
                        </div>
                        
                    </form>

                    {/**Boutton de l'OAuth */}

                    <div>
                        {/**Google */}
                        <div>
                            <div>

                            </div>
                            <h1>Google</h1>
                        </div>

                        {/**Github */}
                        <div>
                            <div>
                                
                            </div>
                            <h2>Github</h2>
                        </div>
                    </div>

                    {/** last Part */}
                    <p>Don't have an account? <span>Start your 14-day free trial</span></p>
                </div>
            </div> 
        </div>
    </>
}

export default LoginForm