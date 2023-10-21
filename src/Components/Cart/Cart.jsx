import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/src/sweetalert2.js";

const Cart = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/store")
      .then((res) => {
        setProducts(res.data.payload), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemoveProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/store/search/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaning = product.filter((data) => data._id !== id);
            setProducts(remaning);
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="my-6 max-w-6xl mx-auto">
      {loading
        ? null
        : product &&
          product.map((data) => {
            return (
              <div
                key={data._id}
                className="flex py-4  border mb-6 overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <div className="w-1/3 bg-cover bg-landscape">
                  <img className="w-full h-44" src={data.imageUrl} alt="" />
                </div>
                <div className="w-2/3 p-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {data.name}
                  </h1>
                  <p className="mt-2 text-sm text-gray-600">{data.type}</p>
                  <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-xl font-bold text-gray-700">
                      $ {data.price}
                    </h1>
                    <div className="flex md:flex-row flex-col gap-3">
                      <button
                        onClick={() => handleRemoveProduct(data._id)}
                        className="py-2 text-xs font-bold text-white uppercase bg-red-500 hover:bg-green-800 rounded px-5 mr-6"
                      >
                        Remove
                      </button>
                      <button className="py-2 text-xs font-bold text-white uppercase bg-green-500 hover:bg-green-800 rounded px-5">
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Cart;
