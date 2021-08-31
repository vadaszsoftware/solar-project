import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { fetchData } from "./FetchData";

export function MainListItems(props) {
  return (
    <div>
      <ListItem
        button
        component={RouterLink}
        to="/Home"
        onClick={() => {
          props.setNavRoute("/Home");
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/ProviderSummary"
        onClick={() => {
          props.setNavRoute("/ProviderSummary");
        }}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="ProviderSummary" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Sunlight"
        onClick={() => {
          props.setNavRoute("/Sunlight");
        }}
      >
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
        <ListItemText primary="Sunlight" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Power"
        onClick={() => {
          props.setNavRoute("/Power");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Power" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Charts"
        onClick={() => {
          props.setNavRoute("/Charts");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          console.log(fetchData());
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Fetch Data" />
      </ListItem>
    </div>
  );
}

export function SecondaryListItems(props) {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
}
