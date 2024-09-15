const Banner = () => {
  return (
    <div className=" ">
      <div className=" flex items-center justify-center bg-[#372727]  text-white ">
        <div  className="flex items-center gap-5">
          <img
            className="w-[60px]"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1726366533/logo1_griwfg.png"
            alt=""
          />
          <p className=" text-xl lg:text-3xl w-full block">
            Espresso Emporium
          </p>
        </div>
      </div>

     <div className="">
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726372452/3_qttoqr.png')] bg-cover bg-center h-[600px] text-white flex justify-center items-center ">
           <div className="translate-x-1/2 w-[500px] space-y-3 -mt-10">
                <h2 className="text-4xl">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-[#FFFFFF] raleway">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.    </p>
                <button className="px-5 py-2.5 bg-[#E3B577] text-black text-xl">Learn More</button>
           </div>
        

        </div>
     </div>


    </div>
  );
};

export default Banner;
