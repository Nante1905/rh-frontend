import { Navigate } from "react-router-dom";

const Protected = ({ children }: any) => {
  const token = sessionStorage.getItem("token");
  if (token == null) {
    return <Navigate to={"/"} replace={true} />;
  } else {
    return children;
  }
};

export default Protected;
