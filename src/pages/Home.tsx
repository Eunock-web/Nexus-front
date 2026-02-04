import CarousselPresentation from "../layouts/home/CarousselPresentation";
import Footer from "../layouts/home/Footer";
import Hero from "../layouts/home/Hero";
import Main from "../layouts/home/Main";
import PostFooter from "../layouts/home/PostFooter";


function Home(){
    return <>
        <div className="px-3 flex flex-col gap-20 bg-dark">
            <Hero />
            <Main />
            <CarousselPresentation />
            <PostFooter />
            <Footer />
        </div>
    </>
}

export default Home;