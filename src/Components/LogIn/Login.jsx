import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import Swal from "sweetalert2/dist/sweetalert2.js";
const Login = () => {
  const { handleLogin, handleGLogin } = useContext(AuthContext);
  const [errorLogin, setErrorLogIn] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorLogIn("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //handle Log In
    await handleLogin({ email, password })
      .then(() => {
        e.target.reset();
        Swal.fire("SuccessFully login!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => {
        setErrorLogIn("Your email and Passwords not match");
      });
  };
  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container my-6 max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 py-6 shadow-md border-4 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-green-500">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <input
              type="submit"
              className="w-full btn btn-gost text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700 focus:outline-none my-1"
              value="Log In"
            />
          </form>
          <div className="text-center text-sm  mt-4">
            {errorLogin && <span className="text-red-500">{errorLogin}</span>}
          </div>
        </div>
        {/*  Google Login */}
        <div className="mt-5">
          <button
            type="submit"
            onClick={() => handleGLogin()}
            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span>
              <AiFillGoogleCircle className="text-xl text-green mr-2" />
            </span>
            Continue with Google
          </button>
        </div>
        <div className="text-grey-dark mt-6">
          You have no account? please
          <Link
            className="no-underline px-2 border-b text-green-500 font-bold border-blue text-blue"
            to="/registation"
          >
            Registation
          </Link>
          first
        </div>
      </div>
    </div>
  );
};

export default Login;
