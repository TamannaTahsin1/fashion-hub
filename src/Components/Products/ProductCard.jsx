

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { image, brand_name, name, details, price, rating } = product || {};
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={image} alt='Shoes' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h5>{brand_name}</h5>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
          <p>Rating: {rating}</p>
          <p>Price: ${price}</p>
          <div className='card-actions'>
            <button className='btn btn-primary'>Check Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
