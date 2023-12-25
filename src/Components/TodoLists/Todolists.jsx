import { Link } from "react-router-dom";
import UseAuth from "../../Hookes/UseAuth";
import UseTaskLists from "../../Hookes/UseTaskLists";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import UseAxiosSecure from "../../Hookes/UseAxiosSecure";
import Swal from "sweetalert2/src/sweetalert2.js";

const Todolists = () => {
  const [taskDatas, isPending, refetch] = UseTaskLists();
  console.log("TaksDatas", taskDatas);
  const taskDatasOngoing = taskDatas.filter(
    (data) => data?.status === "Ongoing"
  );
  const taskDatasComplete = taskDatas.filter(
    (data) => data?.status === "Complite"
  );
  const AxiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  if (isPending) {
    return (
      <>
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </>
    );
  }

  const handleDelete = (data) => {
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
        AxiosSecure.delete(
          `/api/tasks/delete/${data?._id}?email=${user?.email}`
        ).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };
  return (
    <div className="px-1">
      <div className="border-b-4 border-green-400 w-1/2 mx-auto">
        <h1 className="text-center font-semibold text-2xl my-4 ">Tasks</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
        {/* To-Do */}
        <div className="bg-blue-200 rounded-xl pb-3">
          <div className="mb-2">
            <strong className="px-2">To-do</strong>
          </div>
          {taskDatas.map((data) => {
            return (
              <div
                key={data?._id}
                className="py-1 md:px-1 mx-2 bg-white rounded-md mb-3"
              >
                <div className="flex justify-between items-center pb-2 border-b mb-1">
                  <img
                    src={user?.photoURL}
                    alt="Photo"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="space-x-2 text-xl text-green-700">
                    <Link to={`task/edit/${data?._id}`}>
                      <button>
                        <MdEdit />
                      </button>
                    </Link>
                    <button
                      className="hover:text-red-600"
                      onClick={() => handleDelete(data)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-center text-sm mb-2 font-semibold text-green-500">
                    {data?.title}
                  </h4>
                  <p className="text-justify text-xs">{data?.description}</p>
                </div>
                <div className="bg-green-200 w-full px-2 mt-2">
                  <small className="text-red-500 font-bold">
                    End: {data?.deadlines.slice(0, 10)}
                  </small>
                </div>
              </div>
            );
          })}
        </div>

        {/*OnGoing*/}
        <div className="bg-red-100 rounded-xl pb-3">
          <div className="mb-2">
            <strong className="px-2 flex items-center">
              <span className="mr-2">
                <GrInProgress />
              </span>
              Ongoing
            </strong>
          </div>
          {taskDatasOngoing.map((data) => {
            return (
              <div
                key={data?._id}
                className="py-1 md:px-1 mx-2 bg-white rounded-md mb-3"
              >
                <div className="flex justify-between items-center pb-2 border-b mb-1">
                  <img
                    src={user?.photoURL}
                    alt="Photo"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="space-x-2 text-xl text-green-700">
                    <Link to={`task/edit/${data?._id}`}>
                      <button>
                        <MdEdit />
                      </button>
                    </Link>
                    <button
                      className="hover:text-red-600"
                      onClick={() => handleDelete(data)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-center text-sm mb-2 font-semibold text-green-500">
                    {data?.title}
                  </h4>
                  <p className="text-justify text-xs">{data?.description}</p>
                </div>
                <div className="bg-red-100 w-full px-2 mt-2">
                  <small className="text-red-500 font-bold">
                    End: {data?.deadlines.slice(0, 10)}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
        {/*Complete*/}
        <div className="bg-yellow-200 rounded-xl pb-3">
          <div className="mb-2">
            <strong className="px-2">Complete</strong>
          </div>
          {taskDatasComplete.map((data) => {
            return (
              <div
                key={data?._id}
                className="py-1 md:px-1 mx-2 bg-white rounded-md mb-3"
              >
                <div className="flex justify-between items-center pb-2 border-b mb-1">
                  <img
                    src={user?.photoURL}
                    alt="Photo"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="space-x-2 text-xl text-green-700">
                    <Link to={`task/edit/${data?._id}`}>
                      <button>
                        <MdEdit />
                      </button>
                    </Link>

                    <button
                      className="hover:text-red-600"
                      onClick={() => handleDelete(data)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-center text-sm mb-2 font-semibold text-green-500">
                    {data?.title}
                  </h4>
                  <p className="text-justify text-xs">{data?.description}</p>
                </div>
                <div className="bg-blue-100 w-full px-2 mt-2">
                  <small className="text-red-500 font-bold">
                    End: {data?.deadlines.slice(0, 10)}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todolists;
