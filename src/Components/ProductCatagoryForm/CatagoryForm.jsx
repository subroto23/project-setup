import axios from "axios";

const CatagoryForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const catagory = form.get("catagory");
    const imageUrl = form.get("imageUrl");
    const catagoryDatas = { catagory, imageUrl };
    axios
      .post(
        " https://server-1gapz0wlu-subroto23.vercel.app/catagory/create",
        catagoryDatas,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(() => {
        e.form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-6xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-2xl">
                      Catagory Create Form
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Please Create New Product Catagory </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mt-6 space-y-2">
                  <div className=" mb-3 ">
                    <label htmlFor="Catagory" className="font-semibold">
                      Catagory Name
                    </label>
                    <input
                      type="text"
                      name="catagory"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter Product Catagory Name"
                      required
                    />
                  </div>
                  <div className=" mb-3 ">
                    <label htmlFor="Catagory" className="font-semibold">
                      Catagory ImageUrl
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
                      value="Add Catagory"
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
    </section>
  );
};

export default CatagoryForm;
