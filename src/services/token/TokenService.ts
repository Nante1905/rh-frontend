import jwt_decode from "jwt-decode";

const decodeToken = (): any => {
  const authToken = sessionStorage.getItem("token");
  if (authToken != null) {
    const decoded = jwt_decode(authToken);
    return decoded;
  }
  return null;
};

export default decodeToken;
