import { ShieldCheck } from "lucide-react"
import Button from "../../../components/Button"
import useOtp from "../hooks/useOtp"
import { useAuth } from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"


function OtpCard() {
    const { tempEmail } = useAuth();
    const navigate = useNavigate();
    const { mutate, isPending, error } = useOtp();

    // Redirect to register if no email is found in context
    useEffect(() => {
        if (!tempEmail) {
            navigate("/register");
        }
    }, [tempEmail, navigate]);

    // Use react-hook-form to handle the input (simplified as a single string for now, or 6 inputs)
    // For simplicity, let's assume the user enters the code in the inputs, but we'll manage state to aggregate them
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length === 6 && tempEmail) {
            mutate({ email: tempEmail, code }, {
                onSuccess: () => {
                    navigate("/login");
                }
            }); 
        }
    };

    return <>
        <div>
            <div className="flex flex-col gap-5 h-screen justify-center items-center">

                <div>
                    <ShieldCheck className="text-primary border border-gray-200 bg-gray-200 p-3 rounded-full " size={70} />
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-center text-3xl "> Verify your email </h1>
                    <p className="text-center  font-medium text-gray-500"> We sent a 6-digit code to <span className="font-bold ">{tempEmail}</span> </p>
                </div>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-raw gap-5">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    className="w-10 p-4 border rounded-xl focus:outline-0 focus:border-primary focus:border-2 text-center"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    ref={el => { inputRefs.current[index] = el }}
                                />
                            );
                        })}
                    </div>

                    {error && <span className="text-red-500 text-center">{error.message}</span>}

                    <Button className="bg-primary border border-primary text-white w-full p-3 rounded-xl focus:border-primary focus:outline-0 focus:border " disabled={isPending}>
                        {isPending ? "Verifying..." : "Verify Code"}
                    </Button>
                </form>

                <p className="text-lg text-gray-500"> Didn't receive a code? Resend in 00:54 </p>

            </div>
        </div>
    </>
}

export default OtpCard