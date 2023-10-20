import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const SignUp = () => {
  const { handleRegistation, handleUpdateUser, handleGLogin } =
    useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [errmessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  //submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setErrMessage("");
    const form = new FormData(e.currentTarget);
    const name = form.get("fullname");
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");

    //Password Validation Checks
    if (password.length < 6) {
      setErrMessage("Password must be at least 6 characters long");
      return;
    }
    if (password.search(/[A-Z]/) < 0) {
      setErrMessage("Password must contain an uppercase");
      return;
    }
    if (password.search(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/) < 0) {
      setErrMessage("Password must contain an Special Character");
      return;
    }
    const userData = { name, email, password, photoUrl };
    //
    await handleRegistation(userData)
      .then(() => {
        setSuccess("Successfully created Account");
        Swal.fire("SuccessFully Registation!");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => setErrMessage(err));

    //
    await handleUpdateUser(name, photoUrl)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container my-6 max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 py-6 shadow-md border-4 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-green-500">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                required
              />
            </div>
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
            <div>
              <label htmlFor="file">Photo URL</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photoUrl"
                placeholder="Photo Url"
                required
              />
            </div>
            <input
              type="submit"
              className="w-full btn btn-gost text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700 focus:outline-none my-1"
              value="Create Account"
            />
          </form>
          <div className="text-center text-sm  mt-4">
            {errmessage && <span className="text-red-500">{errmessage}</span>}
            {success && <span className="text-green-500">{success}</span>}
          </div>

          {/*  Google Login */}
          <div className="mt-5">
            <button
              type="submit"
              onClick={() => handleGLogin()}
              className="flex w-1/2 mx-auto justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>
                <AiFillGoogleCircle className="text-xl text-green mr-2" />
              </span>
              Continue with Google
            </button>
          </div>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </Link>{" "}
            and
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b font-bold px-2 text-green-500 border-blue text-blue"
            to="/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
