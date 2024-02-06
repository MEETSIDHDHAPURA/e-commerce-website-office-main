import Navbar from "../Components/Navbar"
import AI from "../assets/AI2.jpeg"
import Footer from "../Components/Footer"

const AboutUs = () => {
  return (
      <>
    <Navbar/>
    <div className="lg:mb-20 dark:text-white">
        <div>
            <h1 className="my-3 text-center lg:text-4xl font-bold lg:my-5">About Us</h1>
            <h1 className="text-center font-semibold mb-16">PHELOX : Transforming Dreams into Digital Realities</h1>
        </div>
        <div className=" lg:flex xl:w-[80%] lg:mx-5 xl:mx-20">
            <div className="lg:flex">
                <img alt="" src={AI} className="Aboutimg"></img>

                <div className="lg:w-[35%] lg:ml-20" class="Aboutdata">
                    <h1 className="my-3 text-center w-[100%] lg:text-3xl tracking-wide lg:my-8 font-semibold">About Our Compony</h1>
                    <h1 className="px-5 lg:text-xl lg:tracking-wide ">I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus.</h1>
                </div>
            </div>
            <div className="text-center my-5 lg:w-96 lg:mr-24" class="detail">
                <h1 className="font-semibold lg:my-8 lg:text-3xl">Details</h1>
                <div className="lg:w-40">
                <h1>Compony Name : <br/> <h1 className="text-cyan-600 font-bold lg:my-2">PHELOX</h1></h1>
                <h1 className="font-bold lg:my-2">Year : <br/> </h1>
                <h1>8 Years</h1>
                <h1 className="font-bold lg:my-2">Location : <br/> </h1>
                <h1 className="px-3 md:px-0">9993 Jasper Dale, SG Highway, Ahmedabad - 390006, Gujarat, India.</h1>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
