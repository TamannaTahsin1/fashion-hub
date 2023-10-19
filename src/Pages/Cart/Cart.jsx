import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";


const Cart = () => {
    const cartItems = useLoaderData()
    console.log(cartItems)
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center">Cart</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    cartItems?.map(cartItem => <CartProduct key={cartItem._id} cartItem={cartItem}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;