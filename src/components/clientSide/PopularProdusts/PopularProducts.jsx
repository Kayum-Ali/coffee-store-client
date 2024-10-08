import { BsFillCupHotFill } from "react-icons/bs";
import { Link, } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";


const PopularProducts = () => {
   
    const [coffeed, setCoffeed] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('https://coffee-store-server-rouge-iota.vercel.app/coffee')
        .then(response => response.json())
        .then(data => {
            setCoffeed(data)
            setLoading(false)
        })
       
    },[])
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

              {
                loading ? <h1 className="text-black text-2xl text-center mt-14">Loading...</h1> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 z-10 py-10 px-5 lg:px-0">
                {
                    coffeed?.map(coffee=> <CoffeeCard key={coffee?._id}
                         coffee={coffee}
                         coffeed={coffeed}
                         setCoffeed={setCoffeed}
                         
                         ></CoffeeCard>)
                }
              

                </div>

              }  
               

            </div>
            
        </div>
    );
};

export default PopularProducts;