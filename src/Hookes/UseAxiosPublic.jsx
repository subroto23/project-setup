import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
