import Footer from "../Components/Footer";
import Adminnavbar from "./Adminnavbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../Store/Slices/UserSlice";

const Admin = () => {

  const dispatch = useDispatch()


  const addNewProduct = (name) => {
    console.log(name);
    dispatch(addProduct(name))
  };

  return (
    <>
      <Adminnavbar />
      <div>
        <div>
          <h1 className="text-center font-bold text-2xl my-5">Add Product</h1>
        </div>
        <div className="mx-56 my-3">
          <h1 className="mt-2 px-1 font-semibold">Product name</h1>
          <input
            placeholder="Product name"
            className="border-2 rounded px-2 pr-80 py-2"
          ></input>
          <h1 className="mt-2 px-1 font-semibold">Product Description</h1>
          <input
            placeholder="Product Description"
            className="border-2 rounded px-2 pr-80 py-2"
          ></input>
          <h1 className="mt-2 px-1 font-semibold">Price</h1>
          <input
            placeholder="Price"
            className="border-2 rounded px-2 pr-80 py-2"
          ></input>
          <h1 className="mt-2 px-1 font-semibold">Category</h1>
          <select
            placeholder="Category"
            className="border-2 rounded px-2 pr-48 py-2">
            <option value="Phone">Phone</option>
            <option value="Earphone">Earphone</option>
            <option value="Laptop">Laptop</option>
            <option value="VR headset">VR headsets</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Keybord">Keybord</option>
            <option value="Watch">Watch</option>
            <option value="Headphone">Headphone</option>
          </select>
          <h1 className="mt-2 px-1 font-semibold">Product img</h1>
          <input
            placeholder=""
            type="file"
            className="border-2 py-2 px-2 rounded"
          ></input>
          <div className="my-5 mb-12">
            <button
              onClick={() => addNewProduct()}
              className="bg-slate-900 text-white rounded px-3 py-2"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
