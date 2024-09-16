import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";


const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726378592/11_dc6zmw.png')]">
      <div className="container mx-auto py-10 lg:px-28   ">
        {/* breadcumbs */}
        <div onClick={()=> navigate(-1)} className="flex gap-5 items-center w-max px-3 rounded-md text-2xl py-5 hover:bg-[#D2B48C]">
          <FaLongArrowAltLeft></FaLongArrowAltLeft>
          <p className="drop-shadow-md ">Back to home</p>
        </div>

        {/* add coffee */}
        <div className="bg-[#F4F3F0] rounded-md p-14">
            <div className="flex">
                  <div className="flex-1 text-center flex items-center">
                       <img className="mx-auto " src={coffee.photo} alt="" />
                  </div>
                  <div className="flex-1 pt-5 *:text-black *:text-xl raleway  space-y-2">
                      <h2 className="text-[#331A15] font-bold text-3xl rancho-regular">Niceties</h2>
                      <p className="">Name: <span className="text-[#5C5B5B]"> {coffee.name}</span> </p>

                      <p>Chef: <span className="text-[#5C5B5B]"> {coffee.chef}</span>  </p>


                      <p>Supplier: <span className="text-[#5C5B5B]"> {coffee.supplier}</span> </p>

                      <p>Taste: <span className="text-[#5C5B5B]"> {coffee.taste}</span>  </p>

                      <p>Cetegory: <span className="text-[#5C5B5B]">  {coffee.category}</span> </p>

                      <p>Details: <span className="text-[#5C5B5B]"> {coffee.details}</span> </p>
                  </div>
            </div>
          

         
        </div>
      </div>
</div>
</div>
    );
};

export default CoffeeDetails;