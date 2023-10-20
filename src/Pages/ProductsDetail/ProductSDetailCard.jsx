import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductSDetailCard = ({ product }) => {
  const { _id, brand, photo, details, price, name } = product || {};

  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl' data-aos='flip-right'>
        <figure className='px-10 pt-10'>
          <img src={photo} alt='Shoes' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='text-blue-400'>{brand}</h2>
          <h2 className='card-title'>{name}</h2>
          <p className='text-gray-400'>{details}</p>
          <p className='font-bold'>Price: {price}</p>
          <div className='rating rating-sm'>
            <input
              type='radio'
              name='rating-1'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              checked
            />
            <input
              type='radio'
              name='rating-3'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-orange-400'
            />
            <input
              type='radio'
              name='rating-5'
              className='mask mask-star-2 bg-orange-400'
            />
          </div>
          <div className='card-actions'>
            <Link to={`/products/${brand}`}>
              <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-indigo-500 text-white'>
                Details
              </button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-indigo-500 text-white'>
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSDetailCard;
