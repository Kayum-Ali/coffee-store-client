const Banner = () => {
  return (
    <div className=" ">
     

     <div className=" ">
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726372452/3_qttoqr.png')]  bg-top bg-cover   lg:h-[650px] text-white flex justify-center items-center bg-no-repeat max-w-[1920px] mx-auto py-8">
           <div className="lg:translate-x-1/2 lg:w-[600px] md:w-[600px] space-y-3 lg:-mt-10 px-5">
                <h2 className="lg:text-4xl text-3xl">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-[#FFFFFF] raleway">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.    </p>
                <button className="px-5 py-2.5 bg-[#E3B577] text-black text-xl hover:text-white hover:border hover:border-white hover:bg-transparent hover:duration-500 ">Learn More</button>
           </div>
        </div>
     </div>

        {/* category */}
        <div className="bg-[#ECEAE3] py-10 px-5">
        <div className="flex container flex-col lg:flex-row md:flex-row pl-20 lg:pl-0 md:pl-0 md:justify-center mx-auto gap-5   "> 
              <div className="space-y-2 flex-1">
                 <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1726375667/1_wgn8hq.png" alt="" />
                 <h2 className="text-[#331A15] text-3xl">Awesome Aroma</h2>
                 <p className="raleway">You will definitely be a fan of the design <br /> & aroma of your coffee</p>
              </div>
              <div className="space-y-2 flex-1">
                 <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1726377377/2_sll7sj.png" alt="" />
                 <h2 className="text-[#331A15] text-3xl">High Quality</h2>
                 <p className="raleway">We served the coffee to you maintaining  <br />the best quality</p>
              </div>
              <div className="space-y-2 flex-1">
                 <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1726377395/3_cwojqg.png" alt="" />
                 <h2 className="text-[#331A15] text-3xl">Pure Grades</h2>
                 <p className="raleway">The coffee is made of the green coffee <br /> beans which you will love</p>
              </div>
              <div className="space-y-2 flex-1">
                 <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1726377412/4_ymxh9e.png" alt="" />
                 <h2 className="text-[#331A15] text-3xl">Proper Roasting</h2>
                 <p className="raleway">Your coffee is brewed by first roasting <br /> the green coffee beans</p>
              </div>
        </div>
     </div>




    </div>
  );
};

export default Banner;
