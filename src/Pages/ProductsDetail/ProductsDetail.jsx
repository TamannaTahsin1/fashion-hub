import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductSDetailCard from "./ProductSDetailCard";
import ProductSlider from "./ProductSlider";


const ProductsDetail = () => {
    const [product, setProduct] = useState([])
    const {brand} = useParams()
    console.log(brand)
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
        <div>
          <div className="container mx-auto">
            <ProductSlider></ProductSlider>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5">
          {
            product?.map(product => <ProductSDetailCard key={product._id} product={product}></ProductSDetailCard>)
          }
        </div>
        </div>
    );
};

export default ProductsDetail;