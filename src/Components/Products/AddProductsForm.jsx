import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddProductshtmlForm = () => {
  const loader = useLoaderData();
  const [selectOption, setSelectOption] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const type = form.get("type");
    const price = form.get("price");
    const imageUrl = form.get("imageUrl");
    const rating = form.get("rating");
    const shortDetails = form.get("shortDetails");
    const productsData = {
      brand: selectOption,
      name,
      type,
      price,
      imageUrl,
      rating,
      shortDetails,
    };
    axios
      .post("http://localhost:5000/products/create", productsData, {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => {
        Swal.fire("SuccessFully Created!");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-green-500  capitalize dark:text-white">
        Add Products
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
              <select
                onChange={(e) => setSelectOption(e.target.value)}
                className="select  select-bordered  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled selected>
                  Choose Catagory
                </option>
                {loader.payload.map((data) => (
                  <option key={data._id} value={data.catagory}>
                    {data.catagory}
                  </option>
                ))}
              </select>
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Rating Number 0 to 5"
                required
              />
            </div>

            <div className="col-span-2">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Short Description
              </label>
              <textarea
                name="shortDetails"
                cols="30"
                rows="5"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              className="px-8 my-5 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-green-800 focus:outline-none focus:bg-gray-600 text-center"
              value="Add Product"
            />
          </div>
        </form>
        v
      </div>
    </section>
  );
};

export default AddProductshtmlForm;
