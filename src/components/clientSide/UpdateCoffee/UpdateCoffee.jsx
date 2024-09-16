import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const navigate = useNavigate()
    

    const handleSubmit = e =>{
        e.preventDefault();
        const name= e.target.name.value;
        const chef= e.target.chef.value;
        const supplier= e.target.supplier.value;
        const taste= e.target.taste.value;
        const details= e.target.details.value;
        const photo= e.target.photo.value;
        const category= e.target.category.value;
       
        const updatedCoffee = { name, chef, supplier, taste, category, photo, details }
        // add new coffee to database
        fetch(`https://coffee-store-server-rouge-iota.vercel.app/coffee/${coffee?._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCoffee),
        })
        .then(res => res.json())
         .then(data => {
            console.log(data)
              if(data.modifiedCount > 0){
               
                Swal.fire({
                  title: 'success ',
                  text: 'Coffee Updated successfully  ',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                e.target.reset();
               
                
              }
         });
      }
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
          <div className="text-center lg:px-44 space-y-3">
            <h2 className="text-3xl font-bold text-[#374151]">
             Update Existing Coffee Details
            </h2>
            <p className="raleway opacity-90">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label className="text-2xl pl-2" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  required
                  
                  name="name"
                  defaultValue={coffee?.name}
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
                  required
                  defaultValue={coffee?.chef}
                   name="chef"
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
                  required
                  defaultValue={coffee?.supplier}
                   name="supplier"
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
                  defaultValue={coffee?.taste}
                  required
                   name="taste"
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
                  name="category"
                  defaultValue={coffee?.category}
                  required
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
                  required
                  defaultValue={coffee?.details}
                  name="details"
                  className="outline-none p-3 rounded-md raleway"
                  placeholder="Enter coffee details"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full pt-3">
                        <label className="text-2xl pl-2" htmlFor="">Photo URL</label>
                        <input 
                        type="text"
                        required
                        defaultValue={coffee?.photo}
                        name="photo"
                         className="outline-none p-3 rounded-md raleway w-full"
                           placeholder="Enter photo URL"/>
             </div>

             <div className="flex justify-center mt-3 text-2xl border border-[#331A15]  rounded-md">

                <input type="submit" value={`Update Coffee`} className="bg-[#D2B48C]  rounded-md py-2.5 w-full"/>
              </div>
          </form>
        </div>
      </div>
           </div>
            
            
        </div>
    );
};

export default UpdateCoffee;