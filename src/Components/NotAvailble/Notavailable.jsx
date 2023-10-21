import { Link } from "react-router-dom";

const Notavailable = () => {
  return (
    <div className="text-center">
      <h1 className="text-lg:4xl md:text-2xl font-bold text-xl">
        Out of Stock
      </h1>
      <Link
        to="/"
        className="btn my-4 bg-green-500 text-white hover:bg-green-800"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Notavailable;
