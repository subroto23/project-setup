import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
  const [catagorys, setCatagory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/catagory")
      .then((res) => {
        setCatagory(res.data.payload), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <span>Loading..</span>
      ) : (
        <div className="max-w-6xl mx-auto lg:my-12">
          <h1 className="text-green-500 font-bold lg:text-4xl text-lg text-center mt-6 lg:mb-12">
            Brand New collection
          </h1>
          <div className="my-6  grid grid-cols-1 md:grid-cols-3  gap-6">
            {catagorys.map((data) => (
              <button key={data._id} className="hover:brightness-90">
                <Link to={`/products/search/${data.catagory}`}>
                  <div className="relative max-w-xl mx-auto">
                    <img
                      className="h-64 w-fullobject-cover rounded-md"
                      src={data?.imageUrl}
                      alt="Random image"
                    />
                    <div className="absolute inset-0 bg-gray-600  opacity-60 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-white bg-black px-4 py-4 rounded text-3xl font-bold">
                        {data?.catagory}
                      </h2>
                    </div>
                  </div>
                </Link>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BrandCard;
