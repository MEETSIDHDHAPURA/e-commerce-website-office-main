import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import UserData from "./UserData";
import Allproduct from "./Allproduct";
import Orders from "./Orders";
import { useState } from "react";

const AdminMain = () => {
  const [formdata, setFormData] = useState({
    ProductName: "",
    ProductPrice: "",
    ProductDiscount: "",
    DiscountedPrice: "",
    ProductDescription: "",
    Catrgories: "",
    ImageUrl: "",
  });

  return (
    <div>
      <Routes>
        <Route path="/Admin" element={<Admin formdata={formdata} />} />
        <Route
          path="/Allproduct"
          element={<Allproduct formdata={formdata} />}
        />
      </Routes>
    </div>
  );
};

export default AdminMain;
