import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2.js";
const AddSlides = () => {
  const loader = useLoaderData();
  const [selectOption, setSelectOption] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const imageUrl = form.get("imageUrl");
    const sliderDatas = { catagory: selectOption, imageUrl };
    axios
      .post("http://localhost:5000/slider/create", sliderDatas, {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => {
        Swal.fire("Successfully added");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-4 py-12 mx-auto max-w-6xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
        <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
          <div className="w-full px-6 py-3">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <div className="inline-flex items-center w-full">
                  <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-2xl">
                    Slider Create Form
                  </h3>
                </div>
                <div className="mt-4 text-base text-gray-500">
                  <p>Please set Slider Image </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-6 space-y-2">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="name"
                  >
                    Slides Choose
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

                <div className=" mb-3 ">
                  <label htmlFor="Catagory" className="font-semibold">
                    Slides ImageUrl
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="https://wwww.example.com/"
                    required
                  />
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <input
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500 rounded-xl hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    value="Add Slides"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="order-first hidden w-full lg:block">
            <img
              className="object-cover h-full bg-cover rounded-l-lg"
              src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSlides;
