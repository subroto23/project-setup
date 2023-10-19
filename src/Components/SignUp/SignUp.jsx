import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("fullname");
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");
    console.log(name, email, password, photoUrl);
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
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="file">Photo URL</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photoUrl"
                placeholder="Photo Url"
              />
            </div>
            <input
              type="submit"
              className="w-full btn btn-gost text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700 focus:outline-none my-1"
              value="Create Account"
            />
          </form>
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
