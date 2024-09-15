import { Outlet } from "react-router-dom";
import Navbar from "../components/clientSide/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex items-center justify-center bg-[#372727]  text-white ">
        <div className="flex items-center gap-5">
          <img
            className="w-[60px]"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1726366533/logo1_griwfg.png"
            alt=""
          />
          <p className=" text-xl lg:text-3xl w-full block">Espresso Emporium</p>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
