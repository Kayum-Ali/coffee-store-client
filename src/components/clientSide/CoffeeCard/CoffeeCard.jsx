import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffeed, setCoffeed }) => {
  // const key = Object.keys(coffee);
  // console.log(key)
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this coffee",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>{
           if(data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffeed.filter(cof => cof._id !== _id)
              setCoffeed(remaining)
           }
            
        })
      }
    });
    
  };

  return (
    <div className="bg-[#F5F4F1] flex flex-col lg:flex-row p-8 gap-8 lg:gap-20 items-center lg:justify-around rounded-md">
      <div>
        <img src={photo} alt={name} className="w-full" />
      </div>
      <div>
        <h2 className="text-2xl text-black font-medium">
          Name : <span className="raleway text-[#A8A7A6] text-xl">{name}</span>
        </h2>
        <h2 className="text-2xl text-black font-medium">
          Chef : <span className="raleway text-[#A8A7A6] text-xl">{chef}</span>
        </h2>
        <h2 className="text-2xl text-black font-medium">
          Taste :{" "}
          <span className="raleway text-[#A8A7A6] text-xl">{taste}</span>
        </h2>
      </div>
      <div className="flex lg:flex-col flex-row raleway gap-5">
       <Link to={`/coffee-details/${_id}`}>
            <button className="btn btn-warning">Details</button>
       </Link>
       <Link to={`/update-coffee/${_id}`}>
            <button className="btn btn-neutral">Edit</button>
       </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: propTypes.object.isRequired,
  coffeed: propTypes.array.isRequired,
  setCoffeed: propTypes.func.isRequired,
};
export default CoffeeCard;
