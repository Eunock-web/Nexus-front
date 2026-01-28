

function LoginForm(){
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

                {/**Header avant le formulaire */}
                <div>
                    <h1>Welcome back</h1>
                    <p>Enter your credentials to access your workspace</p>
                </div>

                {/**Formulaire */}
                <div>
                    <form >
                        <div>
                            <label htmlFor="email">Email address</label>
                            <div>
                                <input type="email" id="email" />

                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">Email address</label>
                            <div>
                                <input type="password" id="password" />

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
                                <button className="rounded-xl" >Sign In </button>
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