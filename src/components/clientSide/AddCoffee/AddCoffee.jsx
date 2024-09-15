
import { FaLongArrowAltLeft } from "react-icons/fa";

const AddCoffee = () => {
    return (
        <div>
            <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726378592/11_dc6zmw.png')]">
      <div className="container mx-auto py-10 lg:px-28   ">
        {/* breadcumbs */}
        <div className="flex gap-5 items-center text-2xl py-5">
          <FaLongArrowAltLeft></FaLongArrowAltLeft>
          <p className="drop-shadow-md ">Back to home</p>
        </div>

        {/* add coffee */}
        <div className="bg-[#F4F3F0] rounded-md p-14">
          <div className="text-center lg:px-44 space-y-3">
            <h2 className="text-3xl font-bold text-[#374151]">
              Add New Coffee
            </h2>
            <p className="raleway opacity-90">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form>
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Chef
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee chef"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Supplier
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Taste
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee taste"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Category
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee category"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Details
                </label>
                <input
                  type="text"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee details"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full pt-3">
                        <label className="text-2xl pl-2" htmlFor="">Photo</label>
                        <input type="text" className="outline-none p-3 rounded-md raleway w-full"  placeholder="Enter photo URL"/>
             </div>

             <div className="flex justify-center mt-3 text-2xl border border-[#331A15]  rounded-md">
                <input type="submit" value={`Add Coffee`} className="bg-[#D2B48C]  rounded-md py-2.5 w-full"/>
              </div>
          </form>
        </div>
      </div>
    </div>

            
        </div>
    );
};

export default AddCoffee;