import logo from "../assets/logo.png";

const Firstpage = () => {
  return (
    <div>
      <div className='absolute top-[20%] left-[45%] bg-gray-200 px-10 py-5 rounded-md'>
        <div className="flex mx-20">
        <img alt="" src={logo} className="size-7"></img>
        <h1 className="text-cyan-600 font-bold text-xl">&nbsp; PHELOX</h1>
        </div>
      <div>
        <h1 className="font-bold text-2xl my-2">Welcome to Tech World</h1>
      </div>
      </div>
    </div>
  )
}

export default Firstpage
