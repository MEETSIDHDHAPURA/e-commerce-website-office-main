import Navbar from "../Components/Navbar";
import Samsungs23 from "../assets/Samsung s23.png";
import Footer from "./Footer";
import Faster from "./fast";

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className=" xl:my-5">
        <div>
          <h1 className="xl:text-2xl xl:my-5 xl:mx-40">Product name</h1>
        </div>
        <div className=" w-[80%] flex mx-auto gap-28">
          <div>
            <div className="bg-gray-100 xl:my-5 rounded-lg">
              <img
                alt=""
                src={Samsungs23}
                className="xl:size-[25rem] object-contain"
              ></img>
            </div>

            <div className="xl:grid xl:grid-cols-5 xl:gap-3 xl:h-20">
              <div className="bg-gray-100 rounded-lg ">
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/I/713UmakQhoL._SL1500_.jpg"
                  className="size-16 mx-auto my-2 object-contain"
                ></img>
              </div>
              <div className="bg-gray-100 rounded-lg">
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/I/81zvjTVzREL._SL1500_.jpg"
                  className="size-20 object-contain"
                ></img>
              </div>
              <div className="bg-gray-100 rounded-lg">
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/I/71+kVbD8yPL._SL1500_.jpg"
                  className="size-20 object-contain"
                ></img>
              </div>
              <div className="bg-gray-100 rounded-lg">
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/I/81BkeBFzU2L._SL1500_.jpg"
                  className="size-20 object-contain"
                ></img>
              </div>
              <div className="bg-gray-100 rounded-lg">
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/I/91a8P0kkrdL._SL1500_.jpg"
                  className="size-20 object-contain"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-[50%] xl:my-3">
            <h1 className="text-sm xl:my-1">Store name</h1>
            <h1 className="xl:text-xl xl:font-bold xl:my-2">Product name</h1>
            <hr />
            <h1 className="inline-block px-3 py-1 rounded-lg text-sm bg-red-600 text-white font-bold xl:mt-3">
              Deal of the day
            </h1>
            <div className="flex gap-5">
                <h1>discount</h1>
                <h1>Price</h1>
            </div>
            <h1 className="">MRP </h1>
            <h1>Inclusive of all taxes</h1>
            <h1 className="xl:mb-2">No Cost EMI available</h1>
            <hr/>
            <div>
                
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Detail;
