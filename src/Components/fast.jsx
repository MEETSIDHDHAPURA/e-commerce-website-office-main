import truck from "../assets/truck.png";
import Money from "../assets/Moneyback.png";
import Support from "../assets/support.png";
import Securepayment from "../assets/Securepayment.png";

const Faster = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white py-5">
      <div className=" grid grid-cols-1 xs:pl-2 xs:grid-cols-2 lg:grid-cols-4 md:mx-16 lg:gap-0 lg:py-10 xl:gap-10 xl:py-10">
        <div className="justify-center py-5 flex xs:my-5 xl:w-96">
          <img src={truck} alt="truck" className="xs:size-12 lg:size-16 xl:ml-14 xl:my-7" />
          <div className="md:mx-2 xs:text-sm font-bold xl:py-10 ">
            Free Shiping <br /> Free Shiping on All Oreder
          </div>
        </div>
        <div className="justify-center py-5 flex xs:my-5 md:mx-10 ">
          <img src={Money} alt="Money" className="xs:size-12 lg:size-16 xl:mx-10 xl:my-7" />
          <div className="lg:mx-2 xs:text-sm font-bold xl:py-7  ">
            Money Guarantee <br /> 30 day Money Back
          </div>
        </div>
        <div className="justify-center py-5 xs:my-5 flex">
          <img src={Support} alt="Support" className="xs:size-12 lg:size-16 xl:mx-10 xl:my-7" />
          <div className="lg:mx-2 xs:text-sm font-bold xl:py-7 md:">
            Online Support 24/7 <br /> Technical Support 24/7
          </div>
        </div>
        <div className="justify-center py-5 xs:my-5 flex md:mx-10">
          <img src={Securepayment} alt="Securepayment" className="xs:size-12 lg:size-16 xl:mx-10 xl:my-7" />
          <div className="lg:mx-2 xs:text-sm font-bold xl:py-7 md: ">
            Secure Payment <br /> All Cash Accepted
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faster;
