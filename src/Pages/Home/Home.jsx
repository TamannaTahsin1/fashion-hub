import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Products from "../../Components/Products/Products";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    const products = useLoaderData()
    console.log(products)

    return (
        <div>
            <Banner></Banner>
            <Products products={products}></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;