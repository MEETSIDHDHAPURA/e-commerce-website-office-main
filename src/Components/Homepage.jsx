import HEADPHONE from "../assets/HEADPHONE.png";
import Earphone from "../assets/EARPHONE.png";
import Watch from "../assets/Rolex.png";
import Laptop from "../assets/Laptop.png";
import PS5 from "../assets/PS5.png";
import VR from "../assets/VR.png";
import Speaker from "../assets/Speaker.png";
import mobile from "../assets/mobile-headphone.png";

const Homepage = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-10">
        <div className="w-[90%] h-96 m-auto  md:w-[95%] flex xl:w-[97%] md:h-[35rem] xl:h-[45rem] bg-gray-300 rounded-2xl hover:bg-gray-400 hover:duration-1000">
          <div className="pl-20 text-center pt-60 xs:pl-32 sm:pl-56 md:pl-16 lg:py-20 md:py-36 xl:pl-32 xl:py-36">
            <h5 className="w-36 font-bold sm:w-32 text-2xl md:py-3 ">
              Beats Solo
            </h5>
            <h2 className="sm:w-36 font-bold text-2xl md:text-4xl lg:text-7xl">
              Wireless
            </h2>
            <h1 className="text-black sm:mx-0 md:text-8xl lg:text-[8rem] sm:text-white xl:text-[12rem] font-bold xl:py-5 ">
              HEADPHONE <br />
            </h1>
            <button className="bg-black text-white px-3 py-2 text-sm md:py-3 rounded-full hover:bg-[#ffffffbe] hover:text-black md:mr-[32rem] sm:mt-14 lg:mr-[43rem] xl:mr-[65rem] xl:px-10">
              Browse
            </button>
          </div>
          <img
            src={mobile}
            className="relative top-[-4rem] size-80 left-[-14rem] xs:-left-60 sm:-left-60 md:hidden "
          ></img>
          <img
            alt="HEADPHONE"
            src={HEADPHONE}
            className="relative hidden md:block md:size-80 md:top-28 md:right-80 lg:size-96 lg:top-20 lg:right-[30rem] xl:w-[70%] xl:h-[80%] xl:top-[7rem]"
          ></img>
        </div>
        <div className="flex my-5 gap-2 ml-4 xs:ml-4 sm:gap-3 sm:ml-8 sm:my-5 md:ml-5 md:gap-5 lg:gap-6 xl:mx-5">
          <div className="bg-[#3D3B40] text-white w-[30%] h-40  md:h-60 lg:w-60 lg:h-60 rounded-2xl xl:w-96 xl:h-80 hover:bg-[#2b2830] hover:duration-1000">
            <div className="px-2 py-8 xs:px-7 sm:py-6 sm:p-0 sm:pl-5 md:py-10 md:px-5 xl:py-16 xl:px-8">
              <h6 className="font-bold text-lg">Enjoy</h6>
              <h6 className="font-bold text-xl xl:py-3">With</h6>
              <h4 className="text-lg md:text-4xl text-[#fbf9f159] font-bold xl:text-5xl xl:tracking-wide">
                Earphone
              </h4>
              <button className="hidden sm:block md:my-5 md:py-1 lg:my-5 lg:py-1 px-5 bg-gray-950 text-white xl:py-2 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="Earphone"
                  src={Earphone}
                  className="hidden sm:block relative sm:top-[-7rem] sm:-right-4 lg:w-56 md:top-[-10rem] md:right-[-3rem] xl:top-[-13rem] xl:right-[-5rem] xl:w-[100%] "
                ></img>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-40 md:h-60 lg:w-60 lg:h-60 bg-[#5C8374] text-white rounded-2xl xl:w-96 xl:h-80 hover:bg-[#365f4f] hover:duration-1000">
            <div className="px-2 xs:px-7 py-8 md:py-9 md:px-5 xl:py-16 xl:px-8">
              <h6 className="font-bold text-lg">New</h6>
              <h6 className="font-bold text-lg lg:py-0">WEAR</h6>
              <h4 className="text-lg md:text-4xl text-[#fcfcfc6f] font-bold xl:text-5xl xl:tracking-wide">
                WATCH
              </h4>
              <button className="hidden sm:block md:my-5 md:py-1 lg:my-5 lg:py-1 px-5 bg-gray-950 text-white xl:py-2 xl:px-5 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="Watch"
                  src={Watch}
                  className="hidden sm:block  relative sm:top-[-9.5rem] sm:-right-8 lg:w-44 md:top-[-13.5rem] md:right-[-2.8rem] lg:right-[-3.5rem] xl:top-[-20rem] xl:right-[-4rem] xl:w-[100%]"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-40 md:w-60 md:h-60 lg:w-[45%] lg:h-60 bg-[#463894] text-white rounded-2xl xl:w-[45%] xl:h-80 hover:bg-[#28214c] hover:duration-1000 2xl:w-[45%]">
            <div className="px-2 xs:px-7 py-8 md:py-9 md:px-5 xl:py-10 xl:px-8">
              <h6 className="text-lg font-bold sm:text-2xl">Trand</h6>
              <h6 className="text-lg md:text-3xl  font-bold xl:text-5xl xl:py-1">
                Device
              </h6>
              <h4 className="text-lg md:text-5xl text-[#ffffff7b] font-bold xl:text-7xl xl:tracking-wider">
                Laptop
              </h4>
              <button className=" hidden sm:block md:my-5 md:px-5 bg-gray-950 text-white xl:py-2 xl:px-5 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="Laptop"
                  src={Laptop}
                  className="hidden sm:block relative sm:top-[-10rem] sm:-right-10 lg:h-[20rem] md:top-[-16rem] md:right-[-2rem] lg:right-[-12rem] xl:top-[-24rem] xl:right-[-16rem] xl:h-[32rem]"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2  ml-4 xs:ml-4 sm:gap-3 sm:ml-8 md:ml-5 md:gap-5 lg:gap-6">
          <div className="w-[30%] h-40 md:w-56 md:h-60 lg:w-[45%] lg:h-60 bg-gray-300 text-white rounded-2xl xl:w-[44.3%] xl:h-80 hover:bg-gray-400 hover:duration-1000 2xl:w-[44%]">
            <div className="px-2 xs:px-7 py-8 md:py-10 md:px-5 xl:py-12 xl:px-8">
              <h6 className="text-lg font-bold md:text-lg xl:text-3xl text-black">
                Best
              </h6>
              <h6 className="text-xl md:text-3xl font-bold xl:text-5xl text-black">
                Gaming
              </h6>
              <h2 className="overflow-hidden text-black md:text-5xl sm:text-[#ffffffef] font-bold xl:text-7xl tracking-wide">
                CONSOLE
              </h2>
              <button className="hidden sm:block md:my-5 md:py-1 bg-gray-950 text-white xl:py-2 px-5 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="PS"
                  src={PS5}
                  className="hidden sm:block relative sm:top-[-7rem] sm:size-28 sm:-right-8 md:size-36 lg:size-44 md:top-[-10rem] md:right-[-4rem] lg:right-[-14rem] xl:top-[-16rem] xl:right-[-20rem] xl:size-64"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-40 md:w-56 md:h-60 lg:w-60 lg:h-60 bg-[#1d402af7] text-white rounded-2xl xl:w-96 xl:h-80 hover:bg-[#163020f7] hover:duration-1000">
            <div className="px-2 xs:px-7 py-8 md:py-10 md:px-5 xl:py-16 xl:px-8">
              <h6 className="text-lg font-bold md:text-xl">Play</h6>
              <h6 className="text-lg md:text-3xl font-bold xl:text-3xl xl:py-3">
                Game
              </h6>
              <h2 className="md:text-5xl text-[#fcfcfc63] font-bold xl:text-5xl tracking-wide">
                OCULUS
              </h2>
              <button className="hidden sm:block  md:my-5 md:py-1 bg-gray-950 text-white xl:py-2 px-5 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="VR"
                  src={VR}
                  className="hidden sm:block  relative sm:top-[-6.4rem] sm:-right-8 md:w-48 md:top-[-10.5rem] md:right-[-3rem]  xl:top-[-15.5rem] xl:right-[-6rem] xl:size-72"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-40 md:w-60 md:h-60 lg:w-60 lg:h-60 bg-[#3f99b8] text-white rounded-2xl xl:w-96 xl:h-80 hover:bg-[#176B87] hover:duration-1000">
            <div className="px-2 xs:px-7 py-8 md:py-10 md:px-5 xl:py-16 xl:px-8">
              <h6 className="text-lg font-bold md:text-xl">New</h6>
              <h6 className="text-lg md:text-3xl font-bold xl:text-3xl xl:py-3">
                Amazon
              </h6>
              <h2 className="md:text-5xl text-[#fcfcfc63] font-bold xl:text-5xl xl:tracking-wide">
                SPEAKER
              </h2>
              <button className="hidden sm:block md:my-5 md:py-1 bg-gray-950 text-white xl:py-2 px-5 xl:my-5 rounded-full hover:bg-[#ffffff77] hover:text-black">
                Browse
              </button>
              <div>
                <img
                  alt="Speaker"
                  src={Speaker}
                  className="hidden sm:block relative sm:top-[-8rem] sm:-right-8 md:w-48 md:top-[-14rem] md:right-[-3rem]  xl:top-[-17rem] xl:right-[-5rem] xl:size-72"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
