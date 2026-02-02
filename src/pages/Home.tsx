import CarousselPresentation from "../layouts/home/CarousselPresentation";
import Hero from "../layouts/home/Hero";
import Main from "../layouts/home/Main";
import PostFooter from "../layouts/home/PostFooter";


function Home(){
    return <>
        <div className="px-3 flex flex-col gap-20">
            <Hero/>
            <Main />
            <CarousselPresentation />
            <PostFooter />
        </div>
    </>
}

export default Home;