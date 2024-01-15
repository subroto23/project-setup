import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Home from "./Components/Pages/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import UsersHomePage from "./Pages/UsersHomePage/UsersHomePage";
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
        path: "/registation",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Users Dashboard
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <Dashboard />
      // </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <UsersHomePage />,
      },
    ],
  },
]);
export default router;
