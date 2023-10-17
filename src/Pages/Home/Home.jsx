import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Products from "../../Components/Products/Products";


const Home = () => {
    const products = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;