import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const Cart = () => {
  const cartItems = useLoaderData();
  const [cartDelItems, setCartDelItems] = useState(cartItems);
  return (
    <div className='my-10'>
      <h2 className='text-4xl font-bold text-center'>Cart</h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {cartItems?.map((cartItem) => (
          <CartProduct
            key={cartItem._id}
            cartItem={cartItem}
            cartDelItems={cartDelItems}
            setCartDelItems={setCartDelItems}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
