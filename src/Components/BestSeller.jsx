import Airpods2 from "../assets/Airpods2.png";
import Macbook from "../assets/Mackbook air.png";
import Samsungs23 from "../assets/Samsung s23.png";
import PS5 from "../assets/PS5.png";
import Boatheadphone from "../assets/Boat headphone.png";
import Appleheadphone from "../assets/Apple headphone.png";
import VRHeadset from "../assets/VRHeadset.png";
import Keybord from "../assets/Keybord.png";

function BestSeller({ handleClick }) {
  const showAlert = (productName) => {
    alert(`Added ${productName} to the cart!`);
  };

  const products = [
    {
      id: "1",
      name: "Samsung S24 Ultra",
      image: Samsungs23,
      originalPrice: 9999,
      discountedPrice: "7999",
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "2",
      name: "Apple Headphone",
      image: Appleheadphone,
      originalPrice: 4999,
      discountedPrice: "3999",
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "3",
      name: "Macbook",
      image: Macbook,
      originalPrice: 9999,
      discountedPrice: "5999",
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "4",
      name: "VRHeadset",
      image: VRHeadset,
      originalPrice: 9999,
      discountedPrice: 3599,
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "5",
      name: "PS5",
      image: PS5,
      originalPrice: 9999,
      discountedPrice: 1599,
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "6",
      name: "Airpods2",
      image: Airpods2,
      originalPrice: 9999,
      discountedPrice: 999,
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "7",
      name: "Keybord",
      image: Keybord,
      originalPrice: 9999,
      discountedPrice: 1299,
      discount: "20% OFF",
      amount: 1,
    },
    {
      id: "8",
      name: "Boatheadphone",
      image: Boatheadphone,
      originalPrice: 9999,
      discountedPrice: "899",
      discount: "20% OFF",
      amount: 1,
    },
  ];
  const [id, name, image, originalPrice, discountedPrice, discount] = products;

  return (
    <div className="dark:bg-gray-950 dark:text-white xl:py-14">
      <h1 className="pt-5 text-xl md:text-2xl text-center font-bold">
        Best Seller Products
      </h1>
      <h5 className="hidden sm:block md:py-2 md:text-sm text-center text-lg">
        Designed for a specific niche, like gamers, musicians, or students
      </h5>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-center xl:mt-12 xl:ml-5">
        {products.map((product, index) => (
          <div key={index} className="lg:mx-7 mx-10 my-5">
            <div className="lg:rounded-lg xs:w-72 xs:h-72 rounded-2xl py-1 lg:h-[16rem] lg:w-56 bg-[#000000de] xl:rounded-2xl xl:w-80 xl:h-80 hover:bg-gray-200 hover:duration-1000  dark:bg-gray-200 dark:hover:bg-[#000000de] ">
              <img
                alt={product.name}
                src={product.image}
                className="object-contain xs:w-48 xs:ml-10 xs:mt-3 md:ml-10 lg:ml-0 lg:w-[30rem] xl:m-auto xl:w-56 xl:pt-5 drop-shadow-[0_10px_45px_rgba(0,0,0,0.50)] hover:w-[15rem] hover:duration-1000 xl:hover:pt-3 "
              />
            </div>
            <div className="lg:text-sm xl:pl-2 xl:text-lg flex justify-between">
              {product.name}
              <div className="xl:pl-8 xl:font-bold">
                <h6 className="font-bold">{product.discount}</h6>
              </div>
            </div>
            <div className="flex">
              <h1 className="xl:pl-2 line-through">${product.originalPrice}</h1>
              <h1> &nbsp; ${product.discountedPrice}</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <button
                  onClick={() => {
                    handleClick(product);
                    showAlert(product.name);
                  }}
                  className="bg-gray-800 text-white rounded-full py-2 border-2 px-2 my-4 mx-1 hover:text-black hover:bg-white hover:border-2 inline hover:duration-500">
                  Add to cart
                </button>
              </div>
              <div>
                <button className="bg-gray-800 text-white rounded-full py-2 border-2 px-4 my-4 mx-1 hover:text-black hover:bg-white hover:border-2 inline hover:duration-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
