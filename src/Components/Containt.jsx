import BlackHeadphone from "../assets/BlackHeadphone.png"

const Containt = () => {
  return (
    <>
    <div className="dark:bg-gray-950 py-10">
    <div className="w-[90%] xs:w-[97%] grid grid-cols-1 sm:grid-cols-2 px-12  m-auto bg-black xl:w-[98%] xl:mx-5 rounded-3xl  text-white xl:mt-36 xl:mb-10 xl:gap-64 hover:bg-[#000000f7] dark:bg-[#ffffffe2] dark:text-black dark:hover:text-black dark:hover:bg-[#ffffffe2]">
        <div className="sm:flex">
            <div className="py-4 md:my-5 md:px-16 lg:px-24 xl:px-40 xl:py-24">
                <h6>25% OFF</h6>
                <h2 className="font-extrabold text-7xl" >FINE <br/>SMILE</h2>
                <h6>1 JAN to 15 JAN</h6>
            </div>
            <img alt="headphone" src={BlackHeadphone} className="hidden relative lg:block lg:w-[20rem] lg:top-[-5rem] lg:left-[-15rem] xl:top-[-7rem] xl:left-[-15rem] xl:w-[28rem]  xl:hover:h-[15rem] xl:hover:duration-[8s] xl:hover:rotate-[360deg]  xl:hover:left-[16rem] xl:hover:relative xl:hover:top-[-54rem]"></img>
        </div>
        <div className="my-5">
            <div className="md:px-16 md:py-10 xl:px-10 xl:py-16 xl:w-[60%]" >
            <h6>Boats Solo Air</h6>
            <h2 className="font-bold xl:text-4xl" >Winter Sale is Live</h2>
            <h6 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eos aliquid tempore id necessitatibus fugit aperiam!</h6>
            <button className="my-5 bg-white md:mt-5 xs:py-1 px-8 text-black font-bold rounded-full xl:mt-5 xl:px-10 hover:bg-black hover:text-white  border-2 dark:bg-gray-300">Add to cart </button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Containt
