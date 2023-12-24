import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const UseAuth = () => {
  const { user, loading } = useContext(AuthContext);
  return [user, loading];
};

export default UseAuth;
