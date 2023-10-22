import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Signin.component.scss";
import { Auth } from "../../../types/AuthInterface";
import { authenticate } from "../../../services/authentication.service";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import decodeToken from "../../../services/token/TokenService";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const authData: Auth = {
      username: data.get("username")!.toString(),
      password: data.get("password")!.toString(),
    };

    authenticate(
      authData,
      (token: string) => {
        sessionStorage.setItem("token", token);
        const roles: string = decodeToken()?.roles;
        console.log(roles);
        console.log(
          token != null && (decodeToken()?.roles as string).includes("ADMIN")
        );

        if (roles?.includes("ADMIN")) {
          navigate("/admin");
        } else {
          navigate("client");
        }
      },
      (err: string) => setErrMessage(err)
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="login_main-container">
        <div className="login_left-container">
          <img src="/img/login-banner.jpg" alt="" />
        </div>
        <div className="login_right-container">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Se connecter
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Nom d'utilisateur"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Se connecter
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Pas encore de compte"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
      <Snackbar open={errMessage !== ""} onClose={() => setErrMessage("")}>
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => setErrMessage("")}
        >
          Identifiants invalides.
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
