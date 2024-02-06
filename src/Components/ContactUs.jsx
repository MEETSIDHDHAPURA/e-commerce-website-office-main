import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="dark:text-white xl:mb-20">
        <div className="text-center xl:text-center xl:text-3xl font-bold xl:my-3 xl:mb-16 xl:tracking-wide">
          Contact Us
        </div>
        <div className="xl:w-[70%] xl:mx-auto xl:flex">
          <div className="md:px-20">
            <h1 className="px-2 my-2 xl:pr-14 xl:my-1">
              Will you be in Ahmedabad or any other branches any time soon? Stop
              by the office! We'd love to meet.
            </h1>
            <hr/>
            <div className="px-2 xl:flex xl:my-10">
              <h1 className="my-1 text-center text-blue-700 font-bold">
                Address
              </h1>
              <h1 className=" mb-3 xl:ml-14">
                9993 Jasper Dale, SG Highway, Ahmedabad - 390006, Gujarat,
                India.
              </h1>
            </div>
            <hr />
            <div className="xl:flex xl:my-10">
              <h1 className="text-center xl:my-auto text-blue-700 font-bold">
                Phone No.
              </h1>
              <h1 className="px-2 mb-3 xl:ml-14">
                1800 333 23332 (Toll Free) <br /> Time: 9:30 AM to 6:30 PM
              </h1>
            </div>
            <hr />
            <div className="my-1 xl:flex xl:my-10 ">
              <h1 className="text-center text-blue-700 font-bold">
                Email Address
              </h1>
              <h1 className="px-2 mb-3 cursor-pointer xl:ml-14">enisop@Xyz.com</h1>
            </div>
          </div>
          <div className="md:w-[90%] md:mx-auto md:my-10 mt-5 dark:bg-slate-800 bg-[#eaedf0] xl:rounded-md xl:px-10 xl:py-8 xl:mt-0">
            <div>
              <h1 className="text-center my-2 xl:text-xl font-semibold">
                Get In touch
              </h1>
              <h1 className="mx-7 my-2 dark:text-white xl:text-sm xl:mb-5 xl:mt-2 xl:text-gray-700 ">
                Feel free Contact with us, we love to make new partners &
                friends
              </h1>
            </div>
            <div className="mx-7">
              <div className="md:flex md:gap-4">
                <div>
                  <h1 className="">
                    <h1>
                    <i className="fa-solid fa-user xl:mx-1">&nbsp;</i>First name</h1>
                    <input
                      type="text"
                      className="w-60 xl:py-1 xl:rounded-md xl:px-2 border border-black"
                      placeholder="First name..."
                    ></input>
                  </h1>
                </div>
                <div>
                  <h1 className="xl:mx-3">
                    <h1>
                    <i className="fa-solid fa-user xl:mx-1">&nbsp;</i>Last name</h1>
                    <input
                      type="text"
                      className="w-60 xl:py-1 xl:rounded-md xl:px-2 border border-black"
                      placeholder="Last name..."
                    ></input>
                  </h1>
                </div>
              </div>
              <div className="xl:my-1">
                <h1 className="">
                  <i className="fa-solid fa-envelope mx-1">&nbsp;</i>Email
                  <br />
                  <input
                    type="text"
                    className="w-60 xl:w-[98%] xl:py-1 xl:rounded-md xl:px-2 xl:pr-[13.6rem] border border-black"
                    placeholder="Email Address"
                  ></input>
                </h1>
              </div>
              <div>
                <h1 className="">
                  <i className="fa-thin fa-message-dots"></i> Subject <br />
                  <input
                    type="text"
                    className="w-60 xl:w-[98%] xl:py-1 xl:rounded-md xl:px-2 xl:pr-[13.6rem] border border-black"
                    placeholder="Message Subject"
                  ></input>
                </h1>
              </div>
              <div className="hidden">
                <h1 className="xl:mt-2 xl:mb-1 ">
                  <i className="fa-solid fa-message-smile"></i>Message
                </h1>
                <textarea
                  rows="3"
                  cols="50"
                  placeholder="Message"
                  className="xl:px-3"
                ></textarea>
              </div>
              <button className=" my-2 px-5 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 xl:mt-5">
                Send Message
                <i className="fa-sharp fa-light fa-paper-plane-top"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
