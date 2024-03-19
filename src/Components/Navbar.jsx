import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

export default function App({ size }) {
  const savedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    savedDarkMode ? JSON.parse(savedDarkMode) : false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white bg-white text-black ">
        <div className="py-5 pl- md:px-0 md:ml-5 xl:py-0 h-24 xl:text-lg flex">
          <Link
            to="/Home"
            className="text-xl mt-5 xxs:mx-auto lg:mt-9 lg:mx-8 text-cyan-600 xl:mx-8 font-bold tracking-widest xl:text-2xl h-9 flex"
          >
            <img alt="logo" src={logo} className="size-5 mt-[6px]"></img>
            &nbsp;PHLOX
          </Link>
          <div className="hidden md:pt-5 md:pr-5 md:gap-5 md:flex lg:gap-8 lg:mt-5">
            <Link
              to="/Home"
              className="lg:font-bold hover:underline h-8 underline-offset-2 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/AboutUs"
              className="xl:hover:underline underline-offset-2 h-8 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/Product"
              className="xl:hover:underline underline-offset-2 h-8 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/Blogs"
              className="xl:hover:underline underline-offset-2 h-8 cursor-pointer"
            >
              Blogs
            </Link>
            <Link
              to="/ContactUs"
              className="xl:hover:underline underline-offset-2 h-8 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <button>
              <i className="fa-regular fa-heart px-2 text-sm py-6 sm:text-lg xl:my-4 lg:my-2 inline ml-8 h-8 xs:ml-20 sm:ml-72 md:ml-4 md:py-0 md:my-5 lg:mt-8 lg:ml-28 xl:ml-[29rem] cursor-pointer"></i>
            </button>
            <Link to="/cart" className="relative">
              <i className="fa-sharp fa-solid fa-cart-shopping my-6 text-sm px-2 xl:my-10 xl:mx-5 lg:my-8 sm:text-lg cursor-pointer hover:scale-110 hover:duration-300"></i>
              <div className="font-bold absolute bg-red-800 rounded-full text-sm text-white px-1 right-0 top-3 lg:top-6 xl:-top-2 xl:right-5 hover:scale-110 hover:duration-300 ">
                {size}
              </div>
            </Link>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", true);
              }}
              className="bg-gray-950 dark:bg-white hover:bg-gray-800 dark:text-black text-white dark:hover:text-white dark:hover:bg-gray-950 dark:hover:border-2 xl:px-7 rounded-3xl xl:ml-4 xl:my-9 lg:px-5 lg:my-8 px-2  h-7 mt-5"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
          <div className="xl:size-14 size-10 rounded-full group cursor-pointer">
            <img
              src={avatar}
              alt="Userlogo"
              className="lg:mt-8 xl:mx-2 mt-5 md:mt-6" 
            ></img>
            <div className="dark:text-black absolute right-10 bg-white border-2 shadow-md my-1 opacity-0 group-hover:opacity-100 hover:duration-1000 rounded-lg px-10 py-7">
              <ul>
                <li className="my-3 hover:underline hover:underline-offset-3">
                  <Link to="/Admin">Admin</Link>
                </li>
                <li className="mt-3">
                  <Link to="/" className="text-lg  hover:underline hover:underline-offset-3 ">
                    Login
                  </Link>
                </li>
                <li className="mt-3 hover:underline hover:underline-offset-3">
                  <Link to="/Registration">Registration</Link>
                </li>
                <li className="mt-3">
                  <Link to="/" className="text-lg hover:underline hover:underline-offset-3 ">
                    Profile
                  </Link>
                </li>
                <hr />
                <hr />
                <li className="mt-3 hover:underline hover:underline-offset-3">
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
