import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Products from "../../Components/Products/Products";
import Footer from "../../Components/Footer/Footer";
import Brands from "../../Components/BrandSection/Brands";
import Review from "../../Components/Review/Review";


const Home = () => {
    const products = useLoaderData()
    // console.log(products)

    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Products products={products}></Products>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;