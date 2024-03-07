import { useState } from "react";
import Footer from "../Components/Footer";
import AdminNavbar from "./AdminNavbar";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Admin = ({ formdata }) => {
  const [formData, setFormData] = useState(formdata);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addNewProduct = () => {
    // Implement your logic for adding a new product using formData
    console.log(formData);
  };
  return (
    <>
      <AdminNavbar />
      <div>
        <div>
          <h1 className="text-center font-bold text-2xl my-5 underline underline-offset-4">
            Add Product
          </h1>
        </div>
        <form>
          <div className="flex flex-col mx-56 my-3">
            <TextField
              id="outlined-basic"
              sx={{ width: "30rem", mt: "24px" }}
              size="small"
              label="Product Name"
              variant="outlined"
              name="ProductName"
              value={formData.ProductName}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "30rem", mt: "24px" }}
              size="small"
              label="Product Price"
              variant="outlined"
              type="number"
              name="productPrice"
              value={formdata.ProductPrice}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "30rem", mt: "24px" }}
              size="small"
              label="Product Discount"
              variant="outlined"
              type="number"
              name="ProductDiscount"
              value={formdata.ProductDiscount}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "30rem", mt: "24px" }}
              size="small"
              label="Discounted Price"
              variant="outlined"
              type="number"
              name="DiscountedPrice"
              value={formdata.DiscountedPrice}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Product Description"
              className="border-2 rounded px-2 w-[30rem] py-1 mt-6"
              maxLength="200"
              name="ProductDescription"
              value={formdata.ProductDescription}
              onChange={handleInputChange}
            ></textarea>
            <FormControl sx={{ mt: "24px" }} size="small">
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ width: "20rem" }}
                label="Categories"
                onChange={handleInputChange}
                name="Catrgories"
                value={formdata.Catrgories}
              >
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="Laptop">Laptop</MenuItem>
                <MenuItem value="Earphone">Earphone</MenuItem>
                <MenuItem value="VR headsets">VR headsets</MenuItem>
                <MenuItem value="PlayStation">PlayStation</MenuItem>
                <MenuItem value="Keybord">Keybord</MenuItem>
                <MenuItem value="Watch">Watch</MenuItem>
                <MenuItem value="Headphone">Headphone</MenuItem>
              </Select>
            </FormControl>
            <input
              type="file"
              className="border-2 py-2 px-2 rounded w-80 mt-4"
              name="ImageUrl"
              onChange={handleInputChange}
              value={formdata.ImageUrl}
            ></input>
            <div className="my-5 mb-12">
              <button
                type="submit"
                onClick={() => addNewProduct()}
                className="bg-slate-900 text-white rounded px-3 py-2"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
