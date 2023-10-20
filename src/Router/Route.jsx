import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Sponsor from "../Pages/Sponsor/Sponsor";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Product from "../Pages/Product/Product";
import Users from "../Components/Users/Users";
import PrivateRoute from "./PrivateRoute";
import ProductsDetail from "../Pages/ProductsDetail/ProductsDetail";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path:'/addProducts',
            element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },
        {
            path:'/products/:brand',
            element: <PrivateRoute><Product></Product></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path:'/productsDetail/:brand',
            element: <PrivateRoute><ProductsDetail></ProductsDetail></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path:'/updateProduct/:id',
            element: <UpdateProducts></UpdateProducts>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/cart')
        },
        {
            path:'/sponsor',
            element: <PrivateRoute><Sponsor></Sponsor></PrivateRoute>,
            loader: () => fetch('/sponsor.json')
        },
        {
            path:'/users',
            element:<Users></Users>
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