import React from "react";
import computer from "../assets/computer.jpg"
import logo from "../assets/logo.png"

const Login = () => {
  return (
    <div className="Login-color">
      <div className="xl:h-[100%] bg-cover grid ">
        <div className="flex justify-between my-[35.9%] xxs:[] xs:my-[27%] md:my-[14.45%] lg:my-[7.3%] mx-10 bg-[#fff] rounded-[2rem] xl:my-[5.1%] xl:mx-36 shadow-2xl">
          <div className="xl:mx-16 xl:my-5">
          <div className="flex px-5 py-2 xs:px-10 xs:py-4">
          <img alt="" src={logo} className="size-4 mt-1 lg:size-5 xl:size-6"></img>
            <h1 className="text-cyan-600 text-center font-bold md:text-xl xl:text-2xl xl:flex">&nbsp; PHELOX</h1>
            </div>
            <div>
              <h1 className="text-xl px-4 pt-3 xs:px-10 xs:pt-0 md:text-2xl lg:text-3xl font-bold xl:text-4xl tracking-wider xl:pt-2">Get Started</h1>
              <h1 className="px-4 py-2 xs:px-10 xl:flex text-xs xl:my-1 xl:px-11 xl:text-sm tracking-wide ">Already have an account? &nbsp; 
              <a href="/Registration"><h1 className="underline font-bold">Sign Up</h1></a></h1>
              <div className="px-3 pt-2 xs:px-9 lg:pt-5 xl:pt-0 xl:px-10">
                <h1 className="text-xs xl:pt-2 font-bold xl:text-sm xl:mt-5">
                  <i className="fa-solid fa-user mx-1">&nbsp;</i> NAME
                </h1>
                <input
                  type="text"
                  className="pr-16 pl-3 rounded border text-xs py-1 xs:pr-28 md:pr-32 sm:pr-36 lg:py-2 lg:pr-48 xl:pr-52 xl:text-sm my-1"
                  placeholder="Enter your Name"
                ></input>
              <h1 className="text-xs pt-2 font-bold xl:text-sm lg:text-[15px] xl:mt-1 ">
                  <i className="fa-solid fa-envelope mx-1">&nbsp;</i> USERNAME
                </h1>
                <input
                  type="text"
                  className="pr-16 pl-3 rounded border text-xs py-1 xs:pr-28 md:pr-32 sm:pr-36 lg:py-2 lg:pr-48 xl:pr-52 xl:text-sm my-1"
                  placeholder="Enter your Username"
                ></input>
                <h1 className="text-xs pt-2 font-bold xl:text-sm lg:text-[15px] xl:mt-1">
                <i class="fa-solid fa-lock mx-1">&nbsp;</i> PASSWORD 
                </h1>
                <input
                  type="text"
                  className="pr-16 pl-3 rounded border text-xs py-1 xs:pr-28 md:pr-32 sm:pr-36 lg:py-2 lg:pr-48 xl:pr-52 xl:text-sm my-1"
                  placeholder="Enter your Password"
                ></input>
              </div>
              <a href="/Home"><button className="px-3 ml-[70%] my-3 text-xs py-1 bg-[#000000e7] text-white rounded-xl lg:px-5 lg:ml-[73%] lg:my-5 xl:py-2 xl:px-7 xl:rounded-full hover:bg-gray-800 hover:duration-500">Login
              </button></a>

              <h1 className="text-xs px-5 pt-3 pb-5 lg:my-2 xs:px-10 xl:px-11 xl:text-sm">By signing up, i agree to the <span className="underline decoration-1 underline-offset-2">Term of service</span> and <p className="underline decoration-1 underline-offset-2 inline">Privacy policy</p></h1>
            </div>
          </div>
          <div className="my-12 md:mr-8 xl:mr-16 xl:px-5 border-2 rounded-3xl hidden md:block">
            <img alt="" src={computer} className="md:mt-12 xl:mt-20 w-[110%] h-[80%] "></img>
          </div>
        </div>

      </div>
    </div>
    
  );
};

export default Login;
