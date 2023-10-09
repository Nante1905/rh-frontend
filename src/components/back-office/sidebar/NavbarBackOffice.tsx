import React from "react";
import "./NavbarBackOffice.scss";
import {
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavBarElement {
  text: string;
  link: string;
}

const NavbarBackOffice = () => {
  const navigate = useNavigate();
  const navElements: NavBarElement[] = [
    {
      text: "Annonces",
      link: "/admin",
    },
    {
      text: "Déconnexion",
      link: "",
    },
  ];

  return (
    <>
      <Box className="navbar-container">
        <AppBar position="static">
          <Toolbar className="navbar-container-toolbar">
            <div className="navbar-container-header">
              <h1>Application RH</h1>
            </div>
            <Divider />
            <List className="navbar-container-list">
              {navElements.map((nav, index) => (
                <a href={nav.link} key={`nav_${index}`}>
                  <ListItem disablePadding className="li">
                    <ListItemButton>
                      {/* <ListItemIcon>
                        {index % 2 === 0 ? "Icon" : "Icon"}
                      </ListItemIcon> */}
                      <ListItemText primary={nav.text} />
                    </ListItemButton>
                  </ListItem>
                </a>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavbarBackOffice;
