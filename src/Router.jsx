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
import ProductUpdateForm from "./Components/ProductUpdate/ProductUpdate";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProductshtmlForm />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(" https://server-1gapz0wlu-subroto23.vercel.app/catagory"),
      },
      {
        path: "/catagory-form",
        element: (
          <PrivateRoute>
            <CatagoryForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/slider-form",
        element: (
          <PrivateRoute>
            <AddSlides />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(" https://server-1gapz0wlu-subroto23.vercel.app/catagory"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://server-1gapz0wlu-subroto23.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <ProductUpdateForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://server-1gapz0wlu-subroto23.vercel.app/products/${params.id}`
          ),
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
            ` https://server-1gapz0wlu-subroto23.vercel.app/products/search/${params.catagory}`
          ),
      },
    ],
  },
]);
export default router;
