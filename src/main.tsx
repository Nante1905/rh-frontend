import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import JobInfo from "./components/form-annonce/job-info/job-info.component.tsx";
import JobRequirement from "./components/form-annonce/job-requirement/job-requirement.component.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        index: true,
        element: <JobInfo />,
      },
      {
        path: "/critere",
        element: <JobRequirement />,
      },
    ],
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

