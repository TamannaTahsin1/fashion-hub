import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { brand, image } = product || {};
  return (
    <div>
      <Link to={`/products/${brand}`}>
      <button>
        <div className='card w-80 bg-base-100 shadow-xl image-full' data-aos="zoom-in-up">
          <figure>
            <img src={image} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{brand}</h2>
          </div>
        </div>
      </button>
      </Link>
    </div>
  );
};

export default ProductCard;
