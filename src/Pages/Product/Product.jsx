import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const Product = () => {
    const [product, setProduct] = useState([])
    const {brand} = useParams()
    // console.log(brand)
    // loader data
    const products = useLoaderData()
    // console.log(products)

    useEffect(() =>{
        const findProduct = products?.filter(product => product.brand == brand)
        // console.log(findProduct)
        setProduct(findProduct)
        // console.log(product)
    },[brand, products])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container gap-5 mx-auto">
          {
            product?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
          }
        </div>
    );
};

export default Product;