import decodeToken from "../../../services/token/TokenService";
import { Navigate } from "react-router-dom";

const AdminLevel = ({ children }: any) => {
  const token = sessionStorage.getItem("token");
  // console.log(decodeToken()?.roles);

  if (token != null && (decodeToken()?.roles as string).includes("ADMIN")) {
    return children;
  } else {
    return <Navigate to={"/"} replace={true} />;
  }
};

export default AdminLevel;
