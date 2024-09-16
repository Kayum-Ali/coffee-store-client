import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
     
      <div className="container mx-auto px-8 lg:px-0">
         <div
          onClick={() => navigate(-1)}
          className="flex gap-5 items-center  w-max px-3 mt-5 mx-auto rounded-md text-2xl py-5 hover:bg-[#D2B48C]"
         >
          <FaLongArrowAltLeft></FaLongArrowAltLeft>
          <p className="drop-shadow-md ">Back to home</p>
         </div>

         <div>
              <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1726472764/404_szd88c.gif" alt="" />
         </div>
      </div>
    
    </div>
  );
};

export default ErrorPage;
