import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Button,
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

import blankImg from "./images/blank.png";
import lightningSymbol from "./images/lightning_lightmode.png";
import calIcon from "./images/calendar_darkmode.png";
import gascanIcon from "./images/gascan.png";
import leafIcon from "./images/leaf.png";

import { fetchData, fetchInfo } from "./fetchData";

export function MainListItems(props) {
  const [siteIdInput, setSiteIdInput] = useState("DhHCwgUy");
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
            calDays: null,
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
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Solar Portfolio" />
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
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
        <ListItemText primary="Current Sunlight" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/Power"
        onClick={() => {
          props.setAppbarTitle({
            title: "Current Solar Production",
            subtitle: "",
            icon: lightningSymbol,
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="Current Solar Production" />
      </ListItem>

      {props.data.consumption ? (
        <ListItem
          button
          component={RouterLink}
          to="/Usage"
          onClick={() => {
            props.setAppbarTitle({
              title: "",
              subtitle: "",
              icon: blankImg,
              calDays: null,
            });
          }}
        >
          <ListItemIcon>
            <Brightness6Icon />
          </ListItemIcon>
          <ListItemText primary="Current Solar Offset" />
        </ListItem>
      ) : null}

      <ListItem
        button
        component={RouterLink}
        to="/Past24"
        onClick={() => {
          props.setAppbarTitle({
            title: "24-Hour Solar Generation",
            subtitle: "",
            icon: lightningSymbol,
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="24-Hour Solar Generation" />
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
            calDays: 7,
          });
        }}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="7-Day Solar Generation" />
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
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <LocalGasStationIcon />
        </ListItemIcon>
        <ListItemText primary="7-Day Carbon Offset" />
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
            calDays: 30,
          });
        }}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="30-Day Solar Generation" />
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
            calDays: null,
          });
        }}
      >
        <ListItemIcon>
          <NatureIcon />
        </ListItemIcon>
        <ListItemText primary="Equivalent Trees Planted" />
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

      <ListItem>
        <TextField
          id="input-site-id"
          label="Enter Site ID"
          onChange={(event) => setSiteIdInput(event.target.value)}
          value={siteIdInput}
        />
      </ListItem>

      <ListItem>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            fetchInfo(siteIdInput).then((result) => {
              // console.log("fetchInfo: ", result);
              props.setInfo(result);
            });
            fetchData(siteIdInput).then((result) => {
              // console.log("fetchData: ", result);
              props.setData(result);
            });
            localStorage.setItem("siteId", siteIdInput);
          }}
        >
          Set Site ID
        </Button>
      </ListItem>
    </div>
  );
}
