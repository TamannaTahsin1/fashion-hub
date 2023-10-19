/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const CartProduct = ({ cartItem, cartDelItems, setCartDelItems }) => {
    const {_id, name, brand, photo, details, price } = cartItem || {};
    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/cart/${_id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                      )
                      const remaining = cartDelItems?.filter(cartDelItem => cartDelItem._id !== _id)
                      setCartDelItems(remaining)
                }
              })
            }
          })
    }

  return (
    <div>
      <div className='card card-compact w-80 bg-base-100 shadow-xl'>
        <figure>
          <img
            src={photo}
            alt='product img'
            className="w-80"
          />
        </figure>
        <div className='card-body'>
            <h5>{brand}</h5>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="card-actions  justify-end pr-5 pb-5">
      <button
      onClick={() => handleDelete(_id)}
      className="btn bg-red-600 rounded-full text-white">X</button>
    </div>
      </div>
    </div>
  );
};

export default CartProduct;
