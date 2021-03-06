import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Button,
  Typography,
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
import { Apartment, Update } from "@material-ui/icons";

import { fetchData, fetchInfo, fetchOrgInfo } from "./fetchData";
import { allSiteIds, allSitesDb } from "./All_Sites_DB";

export function MainListItems(props) {
  const [siteIdInput, setSiteIdInput] = useState("");
  const {
    slideNav,
    slideNavCounter,
    setAppbarTitle,
    data,
    handleChangeAppbar,
  } = props;
  return (
    <div>
      <ListItem
        button
        component={RouterLink}
        to="/:siteId"
        onClick={() => {
          handleChangeAppbar("/", setAppbarTitle, data);
          props.setSlideshowActive(false);
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
          handleChangeAppbar("/ProviderSummary", setAppbarTitle, data);
          props.setSlideshowActive(false);
        }}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Solar Portfolio" />
      </ListItem>

      {!props.isNightOrRaining ? (
        <ListItem
          button
          component={RouterLink}
          to="/Sunlight"
          onClick={() => {
            handleChangeAppbar("/Sunlight", setAppbarTitle, data);
            props.setSlideshowActive(false);
          }}
        >
          <ListItemIcon>
            <WbSunnyIcon />
          </ListItemIcon>
          <ListItemText primary="Current Sunlight" />
        </ListItem>
      ) : null}

      {!props.isNightOrRaining ? (
        <ListItem
          button
          component={RouterLink}
          to="/Power"
          onClick={() => {
            handleChangeAppbar("/Power", setAppbarTitle, data);
            props.setSlideshowActive(false);
          }}
        >
          <ListItemIcon>
            <FlashOnIcon />
          </ListItemIcon>
          <ListItemText primary="Current Solar Production" />
        </ListItem>
      ) : null}

      {props.data.consumption ? (
        <ListItem
          button
          component={RouterLink}
          to="/Usage"
          onClick={() => {
            handleChangeAppbar("/Usage", setAppbarTitle, data);
            props.setSlideshowActive(false);
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
          handleChangeAppbar("/Past24", setAppbarTitle, data);
          props.setSlideshowActive(false);
        }}
      >
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="1-Day Solar Generation" />
      </ListItem>

      <ListItem
        button
        component={RouterLink}
        to="/PastWeekBars"
        onClick={() => {
          handleChangeAppbar("/PastWeekBars", setAppbarTitle, data);
          props.setSlideshowActive(false);
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
          handleChangeAppbar("/PastWeekGas", setAppbarTitle, data);
          props.setSlideshowActive(false);
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
          handleChangeAppbar("/PastMonthBars", setAppbarTitle, data);
          props.setSlideshowActive(false);
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
          handleChangeAppbar("/TreesPlanted", setAppbarTitle, data);
          props.setSlideshowActive(false);
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
        <ListItemIcon onClick={() => window.location.reload(false)}>
          <Update />
        </ListItemIcon>
        <ListItemText
          primary={"App Version: " + process.env.REACT_APP_VERSION}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <Apartment />
        </ListItemIcon>
        <ListItemText primary={"Site ID: " + props.info.siteId} />
      </ListItem>

      <ListItem>
        <TextField
          id="input-site-id"
          label="Enter Site ID"
          onChange={(event) => {
            setSiteIdInput(event.target.value);
            props.setSlideshowActive(false);
          }}
          value={siteIdInput}
        />
      </ListItem>

      {props.invalidSiteId && (
        <ListItem>
          <Typography display="block" color="error">
            Invalid Site Id
          </Typography>
        </ListItem>
      )}

      <ListItem>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            // let allSiteIds = [];
            // allSitesDb.forEach((i) => {
            //   i.sites.forEach((n) => {
            //     allSiteIds.push(n.siteId);
            //   });
            // });
            // console.log("allSiteIds: ", allSiteIds);
            if (allSiteIds.includes(siteIdInput)) {
              props.setInvalidSiteId(false);
              fetchInfo(siteIdInput).then((result) => {
                // console.log("fetchInfo: ", result);
                props.setInfo(result);
              });
              fetchData(siteIdInput).then((result) => {
                // console.log("fetchData: ", result);
                props.setData(result);
              });
              fetchOrgInfo(siteIdInput).then((result) => {
                // console.log("fetchOrgData: ", result);
                props.setOrgData(result);
              });
              localStorage.setItem("siteId", siteIdInput);
            } else {
              console.log(
                "Site ID not found in local database. Invalid Site ID: ",
                siteIdInput
              );
              props.setInvalidSiteId(true);
            }
          }}
        >
          Set Site ID
        </Button>
      </ListItem>
    </div>
  );
}
