import { useSelector } from "react-redux";
import Adminnavbar from "./Adminnavbar";

const Allproduct = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  console.log(data);

  return (
    <div>
      <Adminnavbar />
      <div>
        {data.map((data, index) => (
          <div key={index}>
            <div className="flex">
              <div>Img</div>
              <div>Name</div>
              <div>Category</div>
              <div>Price</div>
              <div>Action</div>
            </div>
            <div>
              <img alt="" src={data.image}></img>
            </div>
            <div>{data.name}</div>
            <div>{data.category}</div>
            <div>{data.price}</div>
            <div>Action</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Allproduct;
