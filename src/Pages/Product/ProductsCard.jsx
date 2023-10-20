import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
  const { brand, photo, details, price, name } = product || {};

    
    const handleAddToCart = () =>{
      const cartProduct = {name, photo, price };
      fetch('http://localhost:5000/cart',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartProduct)
      })
      Swal.fire({
        title: 'Success!',
        text: 'Product added successfully!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
  }
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl' data-aos="flip-right">
        <figure className='px-10 pt-10'>
          <img src={photo} alt='Shoes' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className="text-blue-400">{brand}</h2>
          <h2 className='card-title'>{name}</h2>
          <p className="text-gray-400">{details}</p>
          <p className='font-bold'>Price: {price}</p>
          <div className='card-actions'>
            <button
            onClick={handleAddToCart}
            className='btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-indigo-500 text-white'>          
              Add to Cart <FaCartPlus></FaCartPlus>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
