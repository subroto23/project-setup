import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
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

            <input
              type="submit"
              className="w-full btn btn-gost text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700 focus:outline-none my-1"
              value="Log In"
            />
          </form>
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
