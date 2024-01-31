import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"

const Cart = ({ cart, setCart , handleChange  }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () =>{
    let ans = 0;
    cart.map((item)=>(
      ans += item.amount * item.discountedPrice
    ))
    setPrice(ans);
  }
  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
  }

  useEffect(()=>{
    handlePrice();
  })  

 const isCartEmpty = cart.length === 0;

  return (
    <>
    <Navbar/>
    <div className="xl:w-[94%] dark:bg-gray-950 dark:text-white h-[100rem] text-black w-full m-auto lg:py-10">
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between mt-5 border-2">
          <div className="flex w-72">
            <img src={item.image} className="xl:w-20 xl:h-24 w-14 h-16"/>
            <p className="font-bold text-xs mt-3 ml-2 w-16 md:text-lg md:mt-4 md:w-36 md:ml-5">{item.name}</p>
          </div>
          <div className="flex gap-10">
          <input type="number" 
         defaultValue="1"
          className="sm:hidden w-10 border border-black"/>
            <button onClick={()=>handleChange(item ,-1)} className="px-3 py-1 hidden sm:block rounded font-bold h-8 bg-black text-white">-</button>
            <button className="hidden sm:block">{item.amount}</button>
            <button onClick={()=>handleChange(item ,+1)} className="px-3 py-1 hidden sm:block rounded font-bold h-8 bg-black text-white">+</button>
          </div>
          <div>
            <span className="font-bold">$</span>
            <span className="line-through text-xs ml-1 md:text-sm md:ml-2 px-1 bg-green-800 text-white md:px-3 rounded-lg md:py-1">{item.originalPrice}</span>
            <span className=" text-xs ml-1 md:text-sm md:ml-2 bg-green-800 px-1 text-white md:px-3 rounded-lg md:py-1">{item.discountedPrice * item.amount}</span>
            <button onClick={()=> handleRemove(item.id)} className="bg-gray-800 text-white rounded-full px-1 text-xs py-1 ml-2 md:px-2 md:py-2">Remove</button>
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-5">
        <span className="xl:text-2xl tracking-wider px-5 sm:px-10" >Total Price of your Cart is</span>
        <span className="xl:text-3xl font-bold xl:mr-5"> $ - {price} </span>
      </div>
      <div>
        {isCartEmpty ? (
          <button
            className="text-end text-sm bg-gray-500 text-white px-2 py-2 rounded-full xl:mt-5 xl:ml-[92%] my-10 ml-[67%] xs:ml-80 sm:ml-[33rem] md:ml-[41rem] lg:ml-[57rem] 2xl:ml-[95%] cursor-not-allowed"
            disabled
          >
            Proceed to Pay
          </button>
        ) : (
          <Link to="/Payment">
            <button className="text-end text-sm bg-slate-800 text-white px-2 py-2 rounded-full xl:mt-5 xl:ml-[92%] my-10 ml-[67%] xs:ml-80 sm:ml-[33rem] md:ml-[41rem] lg:ml-[57rem] 2xl:ml-[95%]">
              Proceed to Pay
            </button>
          </Link>
        )}
      </div>
    </div>
    </>
  );
};

export default Cart;
