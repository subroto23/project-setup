import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const UseAuth = () => {
  const AuthUser = useContext(AuthContext);
  return AuthUser;
};

export default UseAuth;
