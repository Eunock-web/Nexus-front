import Button from "../../components/Button"


function PostFooter(){
    return <>
        <div className="bg-primary/80 p-5 py-20 md:py-10 flex flex-col gap-20 md:gap-10 rounded-2xl md:w-[50%] justify-center items-center md:ml-120">
            <div className="flex flex-col justify-center items-center gap-10 md:gap-5">
                <h1 className="font-bold text-white text-4xl text-center md:text-5xl"> Ready to transform your workspace?</h1>
                <p className="text-center text-white md:text-xl"> Join 50,000+ professionals who have optimized their daily flow with Negux. </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2  gap-3 justify-center items-center ">
                <Button className="text-primary py-3 px-5 rounded-xl border border-white  bg-white text-xl " > Get Started Free </Button>
                <Button className=" bg-primary/80 border border-gray-100 py-3 px-5  rounded-xl text-white text-xl ml-2 " > Contact Sales </Button>
            </div>

            <p className="text-center text-white"> No credits card required. 14-day free trial. </p>
        </div>
    </>
}

export default PostFooter