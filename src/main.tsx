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
import AnnonceRoot from "./components/annonce/annonceRoot.component.tsx";
import QuestionnairePage from "./pages/Questionnaire/QuestionnairePage.tsx";
import FormCv from "./components/form-cv/form-cv.tsx";
import BackOffice from "./pages/backoffice/BackOffice.tsx";
import HomeBackOffice from "./components/back-office/home/Home-back-office.component.tsx";
import DetailsAnnonce from "./components/back-office/annonce/details-annonce/DetailsAnnonce.component.tsx";

import SignIn from "./components/auth/SignIn.component.tsx";
import FrontOffice from "./pages/frontoffice/FrontOffice.tsx";
import HomePage from "./pages/frontoffice/home/HomePage.tsx";
import QcmComponent from "./components/qcm/QcmComponent.tsx";
import FoCandidature from "./components/front-office/candidature/foCandidature.component.tsx";
import NavbarBackOffice from "./components/back-office/sidebar/NavbarBackOffice.tsx";
import Calendar from "./components/calendar/Calendar.component.tsx";
import ContratFormRoot from "./components/contrat/container/contrat-form-root/contrat-form-root.component.tsx";
import { contratStore } from "./components/contrat/store/contrat.store.ts";
import Notification from "./components/front-office/notification/Notification.component.tsx";
import ContratRead from "./components/front-office/fo-contrat/components/contrat-read/ContratRead.component.tsx";
import EmployeListRoot from "./components/back-office/employe/container/employe-list-root.component.tsx";
import ListCongeRoot from "./components/demande-conge/container/list-root/list-conge-root.container.tsx";
import { congeStore } from "./components/demande-conge/store/conge.store.ts";
import Protected from "./components/guards/auth/protected.routes.tsx";
import AdminLevel from "./components/guards/admin/admin.routes.tsx";
import CongeTabRoot from "./components/conge/components/conge-tab-root/conge-tab-root.component.tsx";

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
        element: <SignIn />,
      },
      {
        path: "/job/create",
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
        element: <SignIn />,
      },
      {
        path: "/annonce",
        element: <AnnonceRoot />,
      },
      {
        path: "candidatures",
        element: <FoCandidature />,
      },
      {
        path: "cv/create",
        element: <FormCv />,
      },
      {
        path: "navbar",
        element: <NavbarBackOffice />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "test/conges",
        element: <CongeTabRoot />,
      },
    ],
  },
  {
    path: "client",
    element: (
      <FrontOffice>
        <Outlet />
      </FrontOffice>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "candidatures",
        element: <FoCandidature />,
      },
      {
        path: "job/:id/qcm",
        element: <QcmComponent />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "contrats/:id",
        element: <ContratRead />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <Provider store={contratStore}>
        <Protected>
          <AdminLevel>
            <BackOffice>
              <Outlet />
            </BackOffice>
          </AdminLevel>
        </Protected>
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <HomeBackOffice />,
      },
      {
        path: "annonces/:id/candidatures",
        element: <DetailsAnnonce />,
      },
      {
        path: "employes",
        element: <EmployeListRoot />,
      },
      {
        path: "demande-conges",
        element: (
          <Provider store={congeStore}>
            <ListCongeRoot />
          </Provider>
        ),
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
