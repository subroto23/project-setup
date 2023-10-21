import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2.js";

const ProductUpdateForm = () => {
  const loader = useLoaderData();
  const { name, imageUrl, brand, price, rating, type } = loader;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const brand = form.get("brand");
    const name = form.get("name");
    const type = form.get("type");
    const price = form.get("price");
    const imageUrl = form.get("imageUrl");
    const rating = form.get("rating");
    const productsData = {
      brand,
      name,
      type,
      price,
      imageUrl,
      rating,
    };
    axios
      .put(
        `http://localhost:5000/products/update/${loader.payload._id}`,
        productsData,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(() => {
        Swal.fire("SuccessFully Updated!");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-green-500  capitalize dark:text-white">
        Update Products
      </h2>
      <div className="my-8 mx-auto max-w-6xl border-2 md:p-8 shadow-xl border-green-500">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-0  px-2 py-4 md:grid-cols-2 gap-6 space-y-4">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Product Brand
              </label>
              <input
                name="brand"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter Name of Product"
                defaultValue={brand}
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Product Name
              </label>
              <input
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter Name of Product"
                defaultValue={name}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Product Type
              </label>
              <input
                type="text"
                name="type"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="phone/computer/laptop"
                defaultValue={type}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Product Price
              </label>
              <input
                type="text"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Product Price"
                defaultValue={price}
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Product Image Url
              </label>
              <input
                type="text"
                name="imageUrl"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Product imageUrl"
                defaultValue={imageUrl}
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Rating Number 0 to 5"
                defaultValue={rating}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              className="px-8 my-5 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-green-800 focus:outline-none focus:bg-gray-600 text-center"
              value="Submit"
            />
          </div>
        </form>
        v
      </div>
    </section>
  );
};

export default ProductUpdateForm;
