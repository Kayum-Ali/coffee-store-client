import propTypes from 'prop-types'

const CoffeeCard = ({coffee}) => {
    // const key = Object.keys(coffee);
    // console.log(key)
    const {_id,name,chef,taste,category,photo,} = coffee
    return (
        <div className="bg-[#F5F4F1] flex p-8 gap-20 items-center justify-around rounded-md">
            <div>
                <img src={photo} alt={name} className="" />
            </div>
            <div>
                <h2 className='text-2xl text-black font-medium'>Name : <span className='raleway text-[#A8A7A6] text-xl'>{name}</span></h2>
                <h2 className='text-2xl text-black font-medium'>Chef : <span className='raleway text-[#A8A7A6] text-xl'>{chef}</span></h2>
                <h2 className='text-2xl text-black font-medium'>Taste : <span className='raleway text-[#A8A7A6] text-xl'>{taste}</span></h2>
               
            </div>
            <div className='flex flex-col gap-5'>
                <button className='btn btn-warning'>Details</button>
                <button className='btn btn-neutral'>Edit</button>
                <button className='btn btn-error'> Delete</button>
            </div>

            
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: propTypes.object.isRequired
}
export default CoffeeCard;