import { Link, useLoaderData } from "react-router-dom";

const BrandFirstPage = () => {
  const loader = useLoaderData();
  return (
    <div className="grid grid-cols-1 my-16 md:grid-cols-4 md:gap-2 max-w-6xl mx-auto">
      {loader.payload.map((data) => {
        const components = [];
        for (let i = 0; i < data.rating; i++) {
          components.push(i);
        }
        return (
          <div
            key={data._id}
            className="relative flex w-full pb-6  flex-col overflow-hidden rounded-lg border border-gray-100 shadow-lg hover:bg-gray-100"
          >
            <Link
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover"
                src={data.imageUrl}
                alt="product image"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                29% OFF
              </span>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href="#">
                <h5 className="mb-4 font-bold tracking-tight text-slate-900">
                  {data.name}
                </h5>
              </Link>
              <div className="flex justify-between">
                <Link href="#">
                  Brand:
                  <span className="text-xm ml-2 font-bold tracking-tight text-green-400">
                    {data.brand}
                  </span>
                </Link>
                <p>
                  Type:
                  <span className="text-sm ml-2 font-semibold text-slate-900">
                    {data.type}
                  </span>
                </p>
              </div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <span className=" text-slate-900 ">
                  Price: <span className="font-bold">$ {data.price}</span>
                </span>
                <div className="flex items-center">
                  {components.map(() => (
                    <>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </>
                  ))}

                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {data.rating}.0
                  </span>
                </div>
              </div>
            </div>
            <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6">
              <div>
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md bg-green-500 hover:bg-green-800 px-4 py-1 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Details
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md bg-green-500 hover:bg-green-800 px-4 py-1 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandFirstPage;
