import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Home from "./Components/Pages/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Info from "./Components/Pages/Info/Info";
import Contact from "./Components/Pages/Contact/Contact";
import About from "./Components/Pages/About/About";
import CreateTask from "./Components/CreateTask/CreateTask";
import UsersHomePage from "./Pages/UsersHomePage/UsersHomePage";
import UpdateTask from "./Components/UpdateTask/UpdateTask";
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
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // Users Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <UsersHomePage />,
      },
      {
        path: "create/task",
        element: <CreateTask />,
      },
      {
        path: "task/edit/:id",
        element: <UpdateTask />,
        loader: ({ params }) =>
          fetch(
            `https://task-management-sigma-eosin.vercel.app/api/tasks/task/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
