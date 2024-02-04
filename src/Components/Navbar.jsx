import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function App({ size }) {
  const savedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedDarkMode ? JSON.parse(savedDarkMode) : false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white bg-white text-black ">
        <div className="py-5 px-5 xxs:px-10 md:px-0 md:ml-5 xl:py-0 h-24 xl:text-lg flex">
          <Link to="/Home" className="text-xl mt-5 lg:mt-9 lg:mx-8 text-cyan-600 xl:mx-8 font-bold tracking-widest xl:text-2xl h-9 flex"><img alt="logo" src={logo} className="size-5 mt-[6px]"></img>
            &nbsp;PHLOX
          </Link>
          <div className="hidden md:pt-5 md:pl-5 md:gap-5 md:flex lg:gap-8 lg:mt-5">
            <Link
              to="/Home"
              className="lg:font-bold hover:underline h-8 underline-offset-2 cursor-pointer">
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
              to="/Home"
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
          <Link to="/" className="font-bold inline ml-8 h-8 text-xs py-6 px-2 xs:ml-32 sm:ml-72 md:ml-14 md:py-0 md:my-5 lg:mt-8 lg:ml-44 xl:ml-[29rem] xl:mx-3 xl:mt-10 hover:underline hover:underline-offset-2 cursor-pointer sm:text-lg">
            Login
          </Link>
          <button>
          <i className="fa-regular fa-heart px-2 text-sm py-6 sm:text-lg xl:my-4 lg:my-2 "></i>
          </button>
          <Link to="/cart" className="relative" >
            <i className="fa-sharp fa-solid fa-cart-shopping my-6 text-sm px-2 xl:my-10 xl:mx-5 lg:my-8 sm:text-lg cursor-pointer hover:scale-110 hover:duration-300"></i>
          <div className="font-bold absolute bg-red-800 rounded-full text-sm text-white px-1 right-0 top-3 lg:top-6 xl:top-8 xl:right-5 hover:scale-110 hover:duration-300 ">
            {size}
          </div>
          </Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('darkMode',true);
            }}
            className="bg-gray-950 dark:bg-white hover:bg-gray-800 dark:text-black text-white dark:hover:text-white dark:hover:bg-gray-950 dark:hover:border-2 xl:px-7 rounded-3xl xl:ml-4 xl:my-9 lg:px-5 lg:my-8 px-2  h-7 mt-5">
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </>
  );
}
