import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import HistoryIcon from "@material-ui/icons/History";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import NatureIcon from "@material-ui/icons/Nature";
import DomainIcon from "@material-ui/icons/Domain";

import blankImg from "./images/blank.png";
import lightningSymbol from "./images/lightning_lightmode.png";
import calIcon from "./images/calendar_darkmode.png";
import gascanIcon from "./images/gascan.png";
import leafIcon from "./images/leaf.png";

import { fetchInfo } from "./fetchData";

export function MainListItems(props) {
  const [siteIdInput, setSiteIdInput] = useState("");
  const handleSubmit = () => {
    console.log("Submitting: ", siteIdInput);
  };
  return (
    <div>
      <ListItem
        button
        component={RouterLink}
        to="/Home"
        onClick={() => {
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: blankImg,
          });
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
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: blankImg,
          });
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
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: blankImg,
          });
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
          props.setAppbarTitle({
            title: "Current Power Production",
            subtitle: "",
            icon: lightningSymbol,
          });
        }}
      >
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="Power" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Usage"
        onClick={() => {
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: blankImg,
          });
        }}
      >
        <ListItemIcon>
          <Brightness6Icon />
        </ListItemIcon>
        <ListItemText primary="Usage" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Past24"
        onClick={() => {
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: blankImg,
          });
        }}
      >
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Past24" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/PastWeekBars"
        onClick={() => {
          props.setAppbarTitle({
            title: "Solar Energy Produced",
            subtitle: "We offset 124 gallons of gasoline over the last 7 days",
            icon: calIcon,
          });
        }}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="PastWeekBars" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/PastWeekGas"
        onClick={() => {
          props.setAppbarTitle({
            title: "",
            subtitle: "",
            icon: gascanIcon,
          });
        }}
      >
        <ListItemIcon>
          <LocalGasStationIcon />
        </ListItemIcon>
        <ListItemText primary="PastWeekGas" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/PastMonthBars"
        onClick={() => {
          props.setAppbarTitle({
            title: "Solar Energy Produced",
            subtitle: "We offset 124 gallons of gasoline over the last 7 days",
            icon: calIcon,
          });
        }}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="PastMonthBars" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/TreesPlanted"
        onClick={() => {
          props.setAppbarTitle({
            title: "Equivalent Trees Planted",
            subtitle: "",
            icon: leafIcon,
          });
        }}
      >
        <ListItemIcon>
          <NatureIcon />
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

      <ListItem
        button
        onClick={() => {
          fetchInfo(siteIdInput).then((result) => {
            console.log("fetchInfo: ", result);
            props.setInfo(result);
          });
        }}
      >
        <ListItemIcon>
          <DomainIcon />
        </ListItemIcon>
        <ListItemText primary="Set Site ID" />
      </ListItem>

      <ListItem>
        <TextField
          id="input-site-id"
          label="Enter Site ID"
          onChange={(event) => setSiteIdInput(event.target.value)}
          value={siteIdInput}
        />
      </ListItem>
    </div>
  );
}
