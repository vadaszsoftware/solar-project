import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import HistoryIcon from "@material-ui/icons/History";
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

      <ListItem button component={RouterLink} to="/Usage">
        <ListItemIcon>
          <Brightness6Icon />
        </ListItemIcon>
        <ListItemText primary="Usage" />
      </ListItem>

      <ListItem button component={RouterLink} to="/Past24">
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Past24" />
      </ListItem>

      <ListItem button component={RouterLink} to="/PastWeekBars">
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="PastWeekBars" />
      </ListItem>

      <ListItem button component={RouterLink} to="/PastWeekGas">
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="PastWeekGas" />
      </ListItem>

      <ListItem button component={RouterLink} to="/PastMonthBars">
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="PastMonthBars" />
      </ListItem>

      <ListItem button component={RouterLink} to="/TreesPlanted">
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="TreesPlanted" />
      </ListItem>

      {/* <ListItem button component={RouterLink} to="/Charts">
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem> */}

      <Divider
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <ListItem
        button
        onClick={() => {
          props.setTheme(!props.theme);
        }}
      >
        <ListItemIcon>{props.darkModeIcon}</ListItemIcon>
        <ListItemText primary={props.theme ? "Dark Theme" : "Light Theme"} />
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
