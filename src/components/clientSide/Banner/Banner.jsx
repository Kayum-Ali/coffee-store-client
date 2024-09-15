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

     <div className=" ">
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726372452/3_qttoqr.png')]  bg-top bg-cover   lg:h-[650px] text-white flex justify-center items-center bg-no-repeat max-w-[1920px] mx-auto py-8">
           <div className="lg:translate-x-1/2 lg:w-[600px] md:w-[600px] space-y-3 lg:-mt-10 px-5">
                <h2 className="lg:text-4xl text-3xl">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-[#FFFFFF] raleway">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.    </p>
                <button className="px-5 py-2.5 bg-[#E3B577] text-black text-xl hover:text-white hover:border hover:border-white hover:bg-transparent hover:duration-500 ">Learn More</button>
           </div>
        

        </div>
     </div>




    </div>
  );
};

export default Banner;
