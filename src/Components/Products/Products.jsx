import ProductCard from "./ProductCard";

// eslint-disable-next-line react/prop-types
const Products = ({products}) => {
    
    return (
        <div >
            <h1 className="text-center font-bold text-4xl mt-12">Featured Products</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    // eslint-disable-next-line react/prop-types
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;