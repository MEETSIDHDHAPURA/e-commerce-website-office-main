import Navbar from "../Components/Navbar"
import AI from "../assets/AI2.jpeg"
import Footer from "../Components/Footer"

const AboutUs = () => {
  return (
      <>
    <Navbar/>
    <div className="xl:mb-20 dark:text-white">
        <div>
            <h1 className="xl:text-center xl:text-4xl xl:font-bold xl:my-5">About Us</h1>
            <h1 className="xl:text-center xl:font-semibold xl:mb-16">PHELOX : Transforming Dreams into Digital Realities</h1>
        </div>
        <div className="xl:flex xl:w-[80%] xl:mx-auto">
            <div className="flex">
                <img alt="" src={AI} className="Aboutimg"></img>

                <div className="xl:w-[35%] xl:ml-20" class="Aboutdata">
                    <h1 className="xl:text-3xl xl:tracking-wide xl:my-8 xl:font-semibold">About Our Compony</h1>
                    <h1 className="text-xl xl:tracking-wide ">I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus.</h1>
                </div>
            </div>
            <div className="xl:w-96 xl:mr-24" class="detail">
                <h1 className="xl:font-semibold xl:my-8 xl:text-3xl">Details</h1>
                <div className="xl:w-40">
                <h1>Compony Name : <br/> <h1 className="text-cyan-600 font-bold xl:my-2">PHELOX</h1></h1>
                <h1 className="font-bold xl:my-2">Year : <br/> </h1>
                <h1>8 Years</h1>
                <h1 className="font-bold xl:my-2">Location : <br/> </h1>
                <h1>9993 Jasper Dale, SG Highway, Ahmedabad - 390006, Gujarat, India.</h1>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
