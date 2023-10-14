import jwt_decode from "jwt-decode";

const decodeToken = () => {
    const authToken = sessionStorage.getItem("token");
    console.log("token " + authToken);
    if (authToken != null) {
        const decoded = jwt_decode(authToken);
        console.log(decoded);
        return decoded;
    }
    return null;
}

export default decodeToken;