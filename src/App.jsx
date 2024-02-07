import { useState } from "react";
import Cart from "./routes/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Payment from "./routes/Payment";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import Product from "./Components/Product";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Admin from "./Admin/Admin";
import Allproducts from "./Admin/Allproduct";
import FirstPage  from "./Components/Firstpage"
import Detail from "./Components/Detail";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const temArr = cart;
    temArr[ind].amount += d;

    if (temArr[ind].amount === 0) temArr[ind].amount = 1;

    setCart([...temArr]);
  };

  return (
    <>
      <div className="App dark:bg-gray-950">
        <Routes>
        <Route path="/" element={<FirstPage/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route>
          <Route path="/Admin" element={<Admin/>} ></Route>
          <Route path="/Allproduct" element={<Allproducts/>} ></Route>
          <Route path="/Detail" element={<Detail/>} ></Route>
          <Route path="/Product" element={<Product addToCart={addToCart} />}></Route>
          <Route path="/Home" element={<Home cart={cart} setCart={setCart} />}  />
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/AboutUS" element={<AboutUs />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>
          <Route path="/Payment" element={<Payment cart={cart} setCart={setCart} handleChange={handleChange} />}/>
        </Routes>
      </div>
    </>
  );
}
