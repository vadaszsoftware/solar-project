import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// import { fetchData } from "./FetchData";

export function MainListItems(props) {
  return (
    <div>
      <ListItem button component={RouterLink} to="/Home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={RouterLink} to="/ProviderSummary">
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="ProviderSummary" />
      </ListItem>

      <ListItem button component={RouterLink} to="/Sunlight">
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
        <ListItemText primary="Sunlight" />
      </ListItem>

      <ListItem button component={RouterLink} to="/Power">
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="Power" />
      </ListItem>

      <ListItem button component={RouterLink} to="/Charts">
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>

      {/* <ListItem
        button
        onClick={() => {
          console.log(fetchData());
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Fetch Data" />
      </ListItem> */}
    </div>
  );
}

export function SecondaryListItems(props) {
  return (
    <div>
      <ListSubheader inset>Admin</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Setting1" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Setting2" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Setting3" />
      </ListItem>
    </div>
  );
}
