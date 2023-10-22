import decodeToken from "../services/token/TokenService";

export const isExpired = () => {
  const token = decodeToken();
  if (token) {
    const dateExp = new Date(token.exp * 1000);

    if (dateExp > new Date()) {
      return false;
    }
    return true;
  }
  return false;
};
