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
import Login from "./components/login/login.component.tsx";
import AnnonceRoot from "./components/annonce/annonce-root/annonceRoot.component.tsx";
import QuestionnairePage from "./pages/Questionnaire/QuestionnairePage.tsx";
import HomePage from "./pages/frontoffice/HomePage.tsx";
import FormCv from "./components/form-cv/form-cv.tsx";
import BackOffice from "./pages/backoffice/BackOffice.tsx";
import HomeBackOffice from "./components/back-office/home/Home-back-office.component.tsx";

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
      {
        path: "/questionnaire",
        element: <QuestionnairePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/annonce",
        element: <AnnonceRoot />,
      },
      {
        path: "client",
        element: <HomePage />,
      },
      {
        path: "cv/create",
        element: <FormCv />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <BackOffice>
        <Outlet />
      </BackOffice>
    ),
    children: [
      {
        index: true,
        element: <HomeBackOffice />,
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
