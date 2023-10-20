/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const UpdateProducts = ({ product }) => {
  const updateProduct = useLoaderData();
  const [brand, setBrand ] = useState(updateProduct?.brand || '' )
  const [photo, setPhoto ] = useState(updateProduct?.photo || '' )
  const [details, setDetails ] = useState(updateProduct?.details || '' )
  const [name, setName ] = useState(updateProduct?.name || '' )
  const [rating, setRating ] = useState(updateProduct?.rating || '' )
  console.log(updateProduct);
  const { _id, price,  } = product || {};

  const handleUpdateProducts = (e) => {
    e.preventDefault();

    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const updateProducts = { brand, name, details, rating, price, photo };
    console.log(updateProducts);

    // send data to the server
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
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
            Update Product: {name}
          </h2>
          <form onSubmit={handleUpdateProducts}>
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
                    defaultValue={brand}
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
                    defaultValue={name}
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
                    defaultValue={details}
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
                    defaultValue={rating}
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
                    defaultValue={price}
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
                    defaultValue={photo}
                    placeholder='Photo URL'
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type='submit'
                value='Update Products'
                className='btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white w-full'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
