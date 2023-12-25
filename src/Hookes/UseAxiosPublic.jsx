import axios from "axios";

const AxiosPublic = axios.create({
  // https://task-management-sigma-eosin.vercel.app/
  baseURL: "https://task-management-sigma-eosin.vercel.app",
  withCredentials: true,
});
const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
