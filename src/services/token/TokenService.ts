import jwt_decode from "jwt-decode";

const decodeToken = (): any => {
  const authToken = sessionStorage.getItem("token");
  if (authToken != null) {
    const decoded = jwt_decode(authToken);
    // console.log("Decodiing");

    // console.log(decoded);

    return decoded;
  }
  return null;
};

export default decodeToken;
