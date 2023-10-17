import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import About from "../Pages/About/About";
import Sponsor from "../Pages/Sponsor/Sponsor";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/products',
            element: <Products></Products>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/cart',
            element: <Cart></Cart>
        },
        {
            path:'/sponsor',
            element: <Sponsor></Sponsor>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/footer',
            element: <Footer></Footer>
        },
      ]
    },
  ]);

export default myCreatedRoute;