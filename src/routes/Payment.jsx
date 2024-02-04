import { useState, useEffect } from "react";
import mastercard from "../assets/mastercard.png";
import Visa from "../assets/visa.png";
import rupay from "../assets/rupay.png";
import gpay from "../assets/gpay.png";
import paytm from "../assets/paytm.png";
import mobikwik from "../assets/mobikwik.png";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

const Payment = ({ cart}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    if (cart && cart.length > 0) {
      ans = cart.reduce(
        (total, item) => total + item.amount * item.discountedPrice,
        0
      );
    }
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleClick = () => {
    Swal.fire({
      title: "Payment SuccessFull",
      icon: "success",
      confirmButtonText: "Done!",
    });
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-400 dark:text-black bg-[#000000e8] text-white md:w-[80%]  mx-auto lg:rounded-2xl">
        <div className="sm:flex">
          <div className="w-[100%] py-5">
            <h1 className="text-center">Add Basic Details</h1>
            <div className=" py-3 text-center">
              <label>First name:</label>
              <br />
              <input
                type="text"
                placeholder="First name"
                className="text-black my-2 rounded"
              />
              <br />
              <label>Last name:</label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                className="text-black my-2 rounded"
              />
              <br />
              <label>E-mail </label>
              <br />
              <input
                type="text"
                placeholder="E-mail"
                className="text-black my-2 rounded" 
              />
              <br />
              <label>Zip Code</label>
              <br />
              <input
                type="text"
                placeholder="Zip Code"
                className="text-black my-2 rounded"
              />
              <br />
            </div>
          </div>

          <div className="w-[100%]">
            <h1 className="text-center py-2 ">Contact Details</h1>
            <div className=" py-3 text-center">
              <label>Phone no.</label>
              <br />
              <input
                type="text"
                placeholder="Phone no."
                className="text-black my-2 rounded"
              />
              <br />
              <label>Address</label>
              <br />
              <input
                type="text"
                placeholder="Address"
                className="text-black my-2 rounded"
              />
              <br />
              <label> City </label>
              <br />
              <input
                type="text"
                placeholder="City"
                className="text-black my-2 rounded"
              />
              <br />
              <label> State </label>
              <br />
              <input
                type="text"
                placeholder="State"
                className="text-black my-2 rounded"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex xl:ml-32 lg:gap-16 xl:gap-44 ">
          <div className="flex-col md:px-20 lg:px-0 ">
            <div>
              <h1 className="text-center w-[100%] py-5">Order Details</h1>
              <div className="flex gap-6 xl:gap-16 xs:gap-16">
                <h1 className="">Product</h1>
                <h1 className="ml-12">Quantity</h1>
                <h1 className="">Price</h1>
                <h1 className="">Total</h1>
              </div>
              <div>
                {cart?.map((item, index) => (
                  <div key={index} className="flex gap-5 xs:gap-14">
                    <h1 className="w-32">{item.name}</h1>
                    <h1 className="w-10">{item.amount}</h1>
                    <h1 className="w-10">{item.discountedPrice}</h1>
                    <h1 className="w-10">
                      {item.amount * item.discountedPrice}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-500 h-px w-[100%] my-5 hidden sm:block"></div>
            <div className="flex md:flex-row lg:flex-row my-5">
              <span className="">Total</span>
              <span className="xxs:ml-[60%] xs:ml-[70%] md:ml-[60%] lg:ml-[65%] xl:ml-[65%] ">
                Rs - {price}
              </span>
            </div>
          </div>
          <div className="lg:w-[40%] py-5 ">
            <h1 className="text-center">Payment Method</h1>
            <div className="text-center">
              <div className="px-5 xs:px-20 lg:px-0">
                <div className="flex my-5 ">
                  <img
                    alt=""
                    src={mastercard}
                    className="h-10 sm:mx-5 sm:w-20 bg-black"
                  ></img>
                  <label></label>
                  <input
                    type="text"
                    placeholder="enter number"
                    className="text-white bg-black "
                  ></input>
                </div>
                <div className="flex my-5">
                  <img
                    alt=""
                    src={Visa}
                    className="h-14 sm:w-20 sm:mx-5 bg-black"
                  ></img>
                  <label></label>
                  <input
                    type="text"
                    placeholder="enter number"
                    className="text-white bg-black "
                  ></input>
                </div>
                <div className="flex my-5">
                  <img
                    alt=""
                    src={rupay}
                    className="h-10 sm:mx-5  bg-black"
                  ></img>
                  <label></label>
                  <input
                    type="text"
                    placeholder="enter number"
                    className="text-white bg-black "
                  ></input>
                </div>

                <div className="flex my-3 md:px-5">
                  CVV
                  <input
                    type="text"
                    placeholder="CVV"
                    className="text-white bg-black ml-5"
                  ></input>
                </div>
              </div>
              <div className="flex xs:px-20 xs:py-2 md:px-24 lg:px-5">
                <img alt="" src={gpay} className="h-10 w-20"></img>
                <input type="checkbox"></input>
                <img alt="" src={paytm} className="h-8 w-16"></img>
                <input type="checkbox"></input>
                <img alt="" src={mobikwik} className="h-10 w-16 "></img>
                <input type="checkbox"></input>
              </div>
              <div className="flex xs:px-20 xs:py-2 md:w-96 md:px-24 lg:px-5">
                <input type="radio"></input>
                Cash on Delivery (COD)
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick} className="bg-gray-200 rounded-full text-black px-10 font-bold hover:bg-gray-400 py-2 ml-[60%] md:ml-[80%] my-5 hover:border"
        >
          PAY
        </button>
      </div>
    </>
  );
};

export default Payment;
