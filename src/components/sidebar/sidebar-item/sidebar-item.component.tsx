import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import decodeToken from "../../../services/token/TokenService";

const SideBarItem = (props: any) => {
  const route = props.route;
  const key = props.key;

  const navigate = useNavigate();

  if (
    (decodeToken()?.roles as string).includes(route?.authorization as string) ||
    (route?.authorization as string) === "*"
  ) {
    return (
      <ListItem
        key={`nav_${key}`}
        disablePadding
        onClick={() => navigate(route.link)}
      >
        <ListItemButton>
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={route.text} />
        </ListItemButton>
      </ListItem>
    );
  } else {
    return <></>;
  }
};

export default SideBarItem;
