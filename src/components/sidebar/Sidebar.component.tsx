/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./Sidebar.component.scss";
import decodeToken from "../../services/token/TokenService";
import SideBarItem from "./sidebar-item/sidebar-item.component";
import {
  CalendarMonth,
  Description,
  DoNotDisturbOnTotalSilence,
  Group,
  Logout,
} from "@mui/icons-material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const navItems = [
  {
    authorization: "ADMIN",
    text: "Annonces",
    link: "/admin",
    icon: <InboxIcon />,
  },
  {
    authorization: "ADMIN",
    text: "Créer une annonce",
    link: "/job/create",
    icon: <MailIcon />,
  },
  {
    authorization: "PUBLIC EMPLOYE",
    text: "Annonces",
    link: "/client",
    icon: <InboxIcon />,
  },
  {
    authorization: "PUBLIC EMPLOYE",
    text: "Mes candidatures",
    link: "/client/candidatures",
    icon: <MailIcon />,
  },
  {
    authorization: "PUBLIC EMPLOYE",
    text: "Notifications",
    link: "/client/notifications",
    icon: <NotificationsActiveIcon />,
  },
  {
    authorization: "ADMIN",
    text: "Liste du personnel",
    link: "/admin/employes",
    icon: <Group />,
  },
  {
    authorization: "EMPLOYE",
    text: "Mes Congés",
    link: "/client/conges",
    icon: <DoNotDisturbOnTotalSilence />,
  },
  {
    authorization: "EMPLOYE",
    text: "Liste demandes de congé",
    link: "/client/demandes",
    icon: <Description />,
  },
  {
    authorization: "EMPLOYE",
    text: "Calendrier de congé",
    link: "/client/conges/calendar",
    icon: <CalendarMonth />,
  },
  {
    authorization: "ADMIN",
    text: "Calendrier de congé RH",
    link: "/admin/conges/calendar",
    icon: <CalendarMonth />,
  },

  {
    authorization: "*",
    text: "Se deconnecter",
    link: "/logout",
    icon: <Logout />,
  },
];

const Sidebar = (props: any) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  // const navigate = useNavigate();
  const userName = decodeToken().nom;
  const position = decodeToken().position;
  // const role: string = props.role;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const generateContent = () => {
    return (
      <List>
        {navItems.map((item, index) => (
          <SideBarItem key={index} route={item} />
        ))}
      </List>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar sx={{ width: { drawerWidth } }}> */}
      <div className="toggle-container">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="navbar_header">
          <div className="user_info">
            <h3>{userName}</h3>
            <p>{position}</p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>{generateContent()}</div>
      </Drawer>
      <Main open={open} className="main-content">
        {props.children}
      </Main>
    </Box>
  );
};

export default Sidebar;
