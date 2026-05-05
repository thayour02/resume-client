import  Banner from "../components/home/banner"
import Hero from "../components/home/hero"
import Features from "../components/home/features"
import Footer from "../components/home/footer"

const Home = () => {

    return (
        <div>
            <Banner />
            {/* <div className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10'> */}
                  <Hero/>
            <Features />
            <Footer/>
            {/* </div> */}
          
        </div>
    )
}

export default Home