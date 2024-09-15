import { BsFillCupHotFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";


const PopularProducts = () => {
    const coffees = useLoaderData()
    return (
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726407930/1_lrwqi9.png')] bg-contain z-20">
            <div className="container mx-auto py-14">
                <div className="text-center space-y-3">
                      <h3 className="raleway">--- Sip & Savor ---</h3>
                      <h2 className="text-[#331A15] text-4xl font-bold">Our Popular Products</h2>
                      <div className="flex justify-center">
                          <Link to={`/add-coffee`} className="flex items-center gap-2 border-2 border-[#331A15] px-5 py-2.5 bg-[#E2B477]  text-white hover:text-[#331A15] text-2xl font-medium rounded-md">Add Coffee <BsFillCupHotFill className="text-[#331A15] hover:text-white"></BsFillCupHotFill></Link>
                      </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 z-10 py-10">
                    {
                        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                  

                </div>

            </div>
            
        </div>
    );
};

export default PopularProducts;