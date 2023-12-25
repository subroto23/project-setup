import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseTaskLists = () => {
  const AxiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const {
    data: taskDatas = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["taskListsDatas"],
    queryFn: () => {
      const res = AxiosSecure.get(`/api/tasks?email=${user?.email}`).then(
        (res) => res?.data
      );
      return res;
    },
  });
  refetch();
  return [taskDatas, isPending, refetch];
};

export default UseTaskLists;
