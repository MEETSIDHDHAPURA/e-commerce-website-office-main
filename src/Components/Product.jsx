import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import S233 from "../assets/S32cut.png";
import Macbook from "../assets/Mackbook air.png";
import PS5 from "../assets/PS5.png";
import Appleheadphone from "../assets/Apple headphone.png";
import VRHeadset from "../assets/VRHeadset.png";
import Keybord from "../assets/Keybord.png";
import Airpods2 from "../assets/Airpods2.png";
import Oldphone from "../assets/Oldphone.png";
import Foursquer from "../assets/Foursquer.png";
import { productDatabase } from "../Components/data";
import Footer from "../Components/Footer";

const Product = ({ addToCart }) => {
  return (
    <>
      <Navbar />
      <div className="grid xl:grid-cols-9 grid-cols-3 sm:grid-cols-4 sm:gap-2 md:grid-cols-4 gap-1 lg:grid-cols-5 lg:mt-5 xl:px-10 xl:py-5 dark:text-white">
        <div className="mx-auto">
          <div className="rounded-full xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={Foursquer} className="mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center font-bold">All</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={S233} className="xl:h-20 xl:w-8 w-7 mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center">Mobile</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={Airpods2} className="w-20 mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center">Earbuds</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img
              alt=""
              src={Macbook}
              className="xl:w-16 w-14 py-1 mx-auto"
            ></img>
          </div>
          <div>
            <h1 className="text-center">Laptops</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={VRHeadset} className="w-14 xl:py-1 mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center">VRHeadsets</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={PS5} className="xl:w-14 w-10 py-2 mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center">PlayStation</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img alt="" src={Keybord} className="w-20 py-3 mx-auto"></img>
          </div>
          <div>
            <h1 className="text-center">Keybords</h1>
          </div>
        </div>
        <div className="mx-auto sm:hidden md:block">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img
              alt=""
              src={Oldphone}
              className="xl:w-14 w-10 py-1 mx-auto"
            ></img>
          </div>
          <div>
            <h1 className="text-center">Old Phones</h1>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-xl xl:h-20 xl:w-20 h-16 w-16 bg-[#cd4a4a]">
            <img
              alt=""
              src={Appleheadphone}
              className="xl:w-14 w-12 py-1 mx-auto"
            ></img>
          </div>
          <div>
            <h1 className="text-center">HeadPhone</h1>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3  xl:gap-10 xl:px-28 xl:py-14 p-10  dark:text-white">
        {productDatabase.map((product) => (
          <div key={product.id} className="rounded-xl border-2 py-2 my-3">
            <div>
              <img
                alt={product.name}
                src={product.image}
                className="size-56 mx-auto"
              />
            </div>
            <div className="px-10">
              <div className="flex justify-between">
                <h1 className="">{product.name}</h1>
                <h1 className="">{product.discount}</h1>
              </div>
              <div>
                <h2 className="">{`$${product.discountedPrice}`}</h2>
              </div>
            </div>
            <div className="flex justify-center gap-4 my-3">
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-800 text-white xs: rounded-full py-2 border-2 px-2 hover:text-black  hover:bg-white hover:border-2 inline hover:duration-500"
              >
                Add to Cart
              </button>
              <button className="bg-gray-800 text-white xs:rounded-full py-2 border-2 px-4 hover:text-black  hover:bg-white hover:border-2 inline hover:duration-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Product;
