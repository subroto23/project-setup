import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Home from "./Components/Pages/Home/Home";
import AddProductshtmlForm from "./Components/Products/AddProductsForm";
import CatagoryForm from "./Components/ProductCatagoryForm/CatagoryForm";
import BrandFirstPage from "./Components/BrandFirstPage/BrandFirstPage";
import AddSlides from "./Components/AddSlideForm/AddSlides";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-products",
        element: <AddProductshtmlForm />,
        loader: () => fetch("http://localhost:5000/catagory"),
      },
      {
        path: "/catagory-form",
        element: <CatagoryForm />,
      },
      {
        path: "/slider-form",
        element: <AddSlides />,
        loader: () => fetch("http://localhost:5000/catagory"),
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/registation",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products/search/:catagory",
        element: <BrandFirstPage />,
        loader: async ({ params }) =>
          await fetch(
            `http://localhost:5000/products/search/${params.catagory}`
          ),
      },
    ],
  },
]);
export default router;
