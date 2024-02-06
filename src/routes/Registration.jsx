import React, { useState } from "react";
import computer from "../assets/computer.jpg";
import logo from "../assets/logo.png";

const Registration = () => {

  const [password, setPassword] = useState(true);

  const handleClick = () => {
    setPassword(!password);
  };

  return (
    <div className="Login-color">
      <div className="h-[100%] bg-cover grid">
        <div className="flex justify-between my-[31%] xxs:my-[27%] xs:my-[20.5%] md:my-[11.4%] lg:my-[9.18%] mx-10 bg-[#fff] rounded-[2rem] xl:my-[5.45%] xl:mx-36 shadow-2xl">
          <div className="md:my-8 md:mx-8 xl:my-11 xl:ml-16 border-2 rounded-3xl hidden md:block">
            <img
              alt="img"
              src={computer}
              className="md:mt-10 xl:mt-20 w-[110%] h-[80%]"
            ></img>
          </div>
          <from action="/" className="md:mr-5 lg:mr-10 xl:mr-24">
            <div className="flex mx-4 my-4 md:mt-8 md:mb-2">
              <img
                alt="logo"
                src={logo}
                className="size-4 mt-1 xl:size-6 xl:mt-6"
              ></img>
              <h1 className="text-cyan-600 text-center font-bold xl:my-5 xl:text-xl xl:flex">
                &nbsp; PHELOX
              </h1>
            </div>
            <div>
              <h1 className="px-4 font-bold xs:text-lg xl:text-3xl tracking-wide xl:mt-2">
                Welcome,
                <br />
                The Amazing World
              </h1>
              <div className="text-xs px-4 py-3">
                <h1 className="xl:pt-2 font-bold xl:text-sm lg:text-[15px]">
                  <i className="fa-solid fa-user xl:mx-1">&nbsp;</i> Full Name
                </h1>
                <input
                  type="text"
                  className="pr-16 xl:pl-3 rounded border text-xs py-1 xxs:pr-28 xs:pr-36 xs:px-2 xs:my-1 md:pr-28 sm:pr-36 lg:py-2 lg:pr-52 xl:w-[25.3rem] xl:text-sm xl:my-1"
                  placeholder="Enter your Full Name"
                  required
                ></input>
                <div className="lg:flex text-sm">
                  <div className="mt-2">
                    <h1 className="font-bold">
                      <i className="fa-solid fa-phone mx-1">&nbsp;</i>Phone No.
                    </h1>
                    <input
                      type="text"
                      placeholder="Phone no."
                      className="py-1 mt-1 xxs:pr-[6.5rem] xs:pr-36 xs:px-2 xs:my-1 md:pr-28 lg:py-2 border rounded-md px-2 pr-14"
                      required
                    ></input>
                  </div>
                  <div className="lg:mt-2 lg:mx-2 xl:mt-2 xl:ml-7">
                    <h1 className=" my-[2px] mx-1 font-bold">Gender</h1>
                    <select
                      id="gender"
                      name="gender"
                      className="border rounded-md py-[5px] lg:py-[7px] pr-5 pl-2">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <h1 className="pt-2 font-bold lg:text-[15px] ">
                  <i className="fa-solid fa-envelope mx-1">&nbsp;</i> Email
                </h1>
                <input
                  type="text"
                  className="pr-16 pl-3 rounded border text-xs py-1 xxs:pr-24 xs:pr-36 xs:px-2 xs:my-1 md:pr-28 sm:pr-36 lg:py-2 lg:pr-52 xl:pr-52 xl:text-sm"
                  placeholder="name@gamil.com"
                  required
                ></input>
                <div>
                <h1 className="pt-2 font-bold lg:text-[15px] xl:mt-1">
                  <i className="fa-solid fa-lock mx-1">&nbsp;</i> PASSWORD
                </h1>
                <input
                  type={password ? 'password' : 'text' }
                  className="pr-16 pl-3 rounded border text-xs py-1 xxs:pr-24 xs:pr-36 xs:px-2 xs:my-1 md:pr-28 sm:pr-36 lg:py-2 lg:pr-52 xl:pr-52 xl:text-sm my-1"
                  placeholder="Enter your Password"
                  required
                ></input>
                <div className="inline-block">
                    {password ? (
                      <i
                        onClick={handleClick}
                        className="fa-solid fa-eye relative right-[2rem] cursor-pointer"
                      ></i>
                    ) : (
                      <i
                        onClick={handleClick}
                        className="fa-sharp fa-solid fa-eye-slash relative right-[2.05rem] cursor-pointer"
                      ></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
              <button type="submit" className="text-xs ml-[62%] my-3 px-3 py-1 mb-5 bg-[#000000e7] text-white rounded-2xl md:ml-[70%] xl:ml-[5%] md:mt-2 xl:px-[10.1rem] lg:ml-[73%] lg:text-sm xl:py-2 xl:mt-3 xl:mb-7 hover:bg-gray-800 hover:duration-500">
                Sign Up
              </button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Registration;
