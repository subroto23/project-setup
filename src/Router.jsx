import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Home from "./Components/Pages/Home/Home";
import AddProductshtmlForm from "./Components/Products/AddProductsForm";
import CatagoryForm from "./Components/ProductCatagoryForm/CatagoryForm";

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
        path: "/registation",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
