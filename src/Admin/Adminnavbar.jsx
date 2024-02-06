import { Link } from "react-router-dom";    
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

const Adminnavbar = () => {
  return (
    <div>
      <div className="flex justify-around py-2 bg-slate-900">
        <div className="flex my-auto">
          <img alt="" src={logo} className="size-8"></img>
          <h2 className="font-bold text-cyan-600 mt-1 mx-1 text-xl">PHELOX</h2>
        </div>
        <div className="my-1">
          <input
            placeholder="Search"
            className="border-2 rounded px-2 pr-24 py-1"
          ></input>
        </div>
        <div className="flex justify-evenly text-white">
          <Link to="/Home"><i className="fa-regular fa-bell py-5 mx-4"></i></Link>
          <i className="fa-solid fa-gear my-auto "></i>
        <div>
          <img  alt="" src={avatar} className="w-20 rounded-full"></img></div>
      </div>
        </div>
      <div className="bg-orange-100 flex justify-center py-5">
      <Link to="/Admin"><div className="mx-3 rounded hover:bg-gray-950 hover:duration-700 hover:text-white px-2 py-1">
          Dashbord
        </div></Link>
        <Link to="/Allproduct"><div className="mx-3 rounded hover:bg-gray-950 hover:duration-700 hover:text-white px-2 py-1">
          All products
        </div></Link>
        <div className="mx-3 rounded hover:bg-gray-950 hover:duration-700 hover:text-white px-2 py-1">
          Orders
        </div>
        <div className="mx-3 rounded hover:bg-gray-950 hover:duration-700 hover:text-white px-2 py-1">
          Users
        </div>
      </div>
    </div>
  )
}

export default Adminnavbar
