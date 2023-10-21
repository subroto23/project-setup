import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2.js";

const ProductDetails = () => {
  const loader = useLoaderData();
  const productDetails = loader.payload;
  const { name, brand, imageUrl, price, type } = productDetails;
  const productData = { name, brand, imageUrl, price, type };
  const handleAddProduct = () => {
    axios
      .post("http://localhost:5000/store/create", productData, {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => {
        Swal.fire("SuccessFully Add Cart!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={productDetails?.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productDetails?.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetails?.name}
              </h1>

              <p className="leading-relaxed text-justify mb-6">
                {productDetails?.shortDetails}
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${productDetails.price}
                </span>
                <button
                  onClick={handleAddProduct}
                  className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
