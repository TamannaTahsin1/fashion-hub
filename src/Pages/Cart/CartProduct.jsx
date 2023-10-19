

// eslint-disable-next-line react/prop-types
const CartProduct = ({ cartItem }) => {
    const {name, brand, photo, details } = cartItem || {};

  return (
    <div>
      <div className='card card-compact w-80 bg-base-100 shadow-xl'>
        <figure>
          <img
            src={photo}
            alt='product img'
          />
        </figure>
        <div className='card-body'>
            <h5>{brand}</h5>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
