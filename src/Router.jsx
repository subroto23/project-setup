import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
