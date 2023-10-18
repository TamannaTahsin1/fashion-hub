
import { FaCartPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
  const { brand, photo, details, price, name } = product || {};

    
    const handleAddToCart = () =>{


  }
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={photo} alt='Shoes' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2>{brand}</h2>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
          <p className='font-bold'>Price: {price}</p>
          <div className='card-actions'>
            <button
            onClick={handleAddToCart}
            className='btn btn-primary'>
            
              Add to Cart <FaCartPlus></FaCartPlus>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
