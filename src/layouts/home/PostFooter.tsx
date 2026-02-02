import Button from "../../components/Button"


function PostFooter(){
    return <>
        <div className="bg-primary/80 p-5 py-20 flex flex-col gap-20 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="font-bold text-white text-4xl text-center"> Ready to transform your workspace?</h1>
                <p className="text-center text-white "> Join 50,000+ professionals who have optimized their daily flow with Negux. </p>
            </div>

            <div className=" flex flex-col  gap-3 justify-center items-center ">
                <Button className="text-primary p-5 rounded-xl border border-white  bg-white " > Get Started Free </Button>
                <Button className=" bg-primary/80 border border-gray-100 py-3 px-5  rounded-xl text-white " > Contact Sales </Button>
            </div>

            <p className="text-center text-white"> No credits card required. 14-day free trial. </p>
        </div>
    </>
}

export default PostFooter