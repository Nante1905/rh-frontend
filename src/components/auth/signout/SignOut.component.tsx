import { Navigate } from "react-router-dom";

const SignOutComponent = () => {
  sessionStorage.removeItem("token");
  return <Navigate to={"/"} replace={true} />;
};

export default SignOutComponent;
