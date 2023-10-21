/** @format */

import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const AddProducts = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();

    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newProducts = { brand, name, details, rating, price, photo };
    console.log(newProducts);

    // send data to the server
    fetch("https://fashion-hub-server-c0gv1u9kj-tamanna-tahsins-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Thanks for choosing us",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
    <div
      className='container mx-auto mt-20'
      data-aos='fade-up'
      data-aos-duration='500'>
      <div className=' bg-slate-200 p-20 '>
        <h2 className='text-3xl font-semibold text-purple-600'>
          Add Your Favorite Products
        </h2>
        <form onSubmit={handleAddProducts}>
          {/* form brand name and product name row */}
          <div className='md:flex gap-3'>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Brand Name</span>
              </label>
              <label className='input-group'>
                <input
                  name='brand'
                  type='text'
                  placeholder='Brand name'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Product Name</span>
              </label>
              <label className='input-group'>
                <input
                  name='name'
                  type='text'
                  placeholder='Product Name'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
          </div>
          {/* form details and rating row */}
          <div className='md:flex gap-3'>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Product Details</span>
              </label>
              <label className='input-group'>
                <input
                  name='details'
                  type='text'
                  placeholder='Details'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Rating</span>
              </label>
              <label className='input-group'>
                <input
                  name='rating'
                  type='text'
                  placeholder='Rating'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
          </div>
          {/* form price and img row */}
          <div className='md:flex gap-3 mb-8'>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <label className='input-group'>
                <input
                  name='price'
                  type='text'
                  placeholder='Price'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <label className='input-group'>
                <input
                  name='photo'
                  type='text'
                  placeholder='Photo URL'
                  className='input input-bordered w-full'
                />
              </label>
            </div>
          </div>
          <div>
            <input
              type='submit'
              value='Add Products'
              className='btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white w-full'
            />
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AddProducts;
