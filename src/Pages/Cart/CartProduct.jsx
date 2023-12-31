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
              fetch(`https://fashion-hub-server-c0gv1u9kj-tamanna-tahsins-projects.vercel.app/cart/${_id}`,{
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
      <div className='card card-compact w-full bg-base-100 shadow-xl' data-aos="flip-right">
        <div className="flex justify-around gap-5">
        <div>
      <figure>
          <img
            src={photo}
            alt='product img'
            className="w-80 h-full"
          />
        </figure>
      </div>
        <div className='card-body'>
            <h5>{brand}</h5>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
          <p><span className="font-semibold">Price:</span> ${price}</p>
        </div>
        <div className="card-actions justify-end pr-5 pb-5">
      <button
      onClick={() => handleDelete(_id)}
      className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-indigo-500 text-white">X</button>
    </div>
        </div>

      </div>
    </div>
  );
};

export default CartProduct;
