import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const Product = () => {
    const [product, setProduct] = useState()
    const {brand} = useParams()
    console.log(brand)
    // loader data
    const products = useLoaderData()
    console.log(products)

    useEffect(() =>{
        const findProduct = products?.find(product => product.brand === brand)
        setProduct(findProduct)
        console.log(product)
    },[brand, products, product])

    return (
        <div>
           <ProductsCard product={product}></ProductsCard>
        </div>
    );
};

export default Product;