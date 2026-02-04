import { ShieldCheck } from "lucide-react"
import Button from "../../../components/Button"
import useOtp from "../hooks/useOtp"
import { useForm } from "react-hook-form"


function OtpCard(){

    // const {mutate, data, isPending, error, isSuccess} = useOtp();


    // const {register, handleSubmit} = useForm<>();
    return <>
        <div>
            <div className="flex flex-col gap-5 h-screen justify-center items-center">
                
                <div>
                    <ShieldCheck className="text-primary border border-gray-200 bg-gray-200 p-3 rounded-full " size={70} />
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-center text-3xl "> Verify your email </h1>
                    <p className="text-center  font-medium text-gray-500"> We sent a 6-digit code to <span className="font-bold ">erwin@gmail.com</span> </p>
                </div>

                <form className="flex flex-col gap-3" >
                    <div className="flex flex-raw gap-5">
                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />

                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />

                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />

                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />

                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />

                        <input type="text" className="w-10 p-4 border rounded-xl  focus:outline-0 focus:border-primary focus:border-2" />
                    </div>

                        <Button className="bg-primary border border-primary text-white w-full p-3 rounded-xl focus:border-primary focus:outline-0 focus:border "> Verify Code </Button>
                </form>

                <p className="text-lg text-gray-500"> Didn't receive a code? Resend in 00:54 </p>

            </div>
        </div>
    </>
}

export default OtpCard