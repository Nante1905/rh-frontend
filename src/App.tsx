import { Alert, Snackbar } from "@mui/material";
import "./App.scss";
import { isExpired } from "./helpers/jwt.helper";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App({ children }: any) {
  const isTokenExpired = isExpired();

  return (
    <>
      {children}
      <Snackbar open={isTokenExpired}>
        <Alert severity="error">Token Expiré</Alert>
      </Snackbar>
    </>
  );
}

export default App;
