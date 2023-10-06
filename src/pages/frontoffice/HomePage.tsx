import { useLocation } from "react-router-dom";
import AnnonceRoot from "../../components/annonce/annonce-root/annonceRoot.component";
import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const HomePage = () => {
  const [successInserted, setSuccessInserted] = useState<boolean>();
  const location = useLocation(); //get param from route

  useEffect(() => {
    if (location.state == null) {
      setSuccessInserted(false);
    } else {
      if (location.state.success) {
        setSuccessInserted(true);
      }
    }
  }, []);
  return (
    <div>
      <AnnonceRoot />
      {successInserted && (
        <Snackbar
          open={successInserted}
          onClose={() => setSuccessInserted(false)}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={() => setSuccessInserted(false)}
          >
            CV créé avec succès
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default HomePage;
