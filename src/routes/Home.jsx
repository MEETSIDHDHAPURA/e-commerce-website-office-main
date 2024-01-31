import Homepage from "../Components/Homepage";
import Footer from "../Components/Footer";
import Faster from "../Components/fast";
import Containt from "../Components/Containt";
import BestSeller from "../Components/BestSeller";
import Navbar from "../Components/Navbar";

const Home = ({ cart, setCart }) => {
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((Product) => {
      if (item.id === Product.id) isPresent = true;
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Homepage />
      <Faster />
      <Containt />
      <BestSeller handleClick={handleClick} />
      <Footer />
    </>
  );
};

export default Home;
