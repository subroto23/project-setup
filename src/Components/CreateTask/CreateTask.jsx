import { useState } from "react";
import Swal from "sweetalert2/src/sweetalert2.js";
import UseAuth from "../../Hookes/UseAuth";
import UseAxiosSecure from "../../Hookes/UseAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";

const CreateTask = () => {
  const [selectOption, setSelectOption] = useState("");
  const [deadlinesStart, setDeadlinesEnd] = useState(new Date());
  const { user } = UseAuth();
  const AxiosSecure = UseAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const description = form.get("description");
    const taskData = {
      priority: selectOption,
      title,
      description,
      deadlines: deadlinesStart,
      email: user?.email,
    };
    AxiosSecure.post(`/api/task/create?email=${user?.email}`, taskData)
      .then(() => {
        Swal.fire("SuccessFully Add New Task!");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-green-500  capitalize text-center dark:text-white">
        Create Your New Task
      </h2>
      <div className="my-8 mx-auto max-w-6xl border-2 md:p-8 shadow-xl border-green-500">
        <form onSubmit={handleSubmit}>
          <div className="px-2 py-4 space-y-6">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Priority
              </label>
              <select
                onChange={(e) => setSelectOption(e.target.value)}
                className="select  text-center select-bordered  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled selected>
                  Choose Priority
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Task Title
              </label>
              <input
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Enter Titles"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Description
              </label>
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Write task Details..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              ></textarea>
            </div>
            <div className="flex ">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Deadlines
              </label>
              <div className="ml-2 flex items-center space-x-2">
                <SlCalender className="text-green-600" />
                <DatePicker
                  selected={deadlinesStart}
                  onChange={(date) => setDeadlinesEnd(date)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              className="px-8 my-5 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-green-800 focus:outline-none focus:bg-gray-600 text-center"
              value="Add Task"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTask;
