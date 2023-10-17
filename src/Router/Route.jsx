import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Sponsor from "../Pages/Sponsor/Sponsor";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path:'/addProducts',
            element: <AddProducts></AddProducts>
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