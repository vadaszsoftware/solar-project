import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  Container,
  Grid,
  Link,
  Button,
  ListItem,
} from "@material-ui/core";

import { fetchData, fetchInfo, fetchOrgInfo } from "./fetchData";
import { MainListItems } from "./listItems";
import Home from "./Slides/Home";
import ProviderSummary from "./Slides/ProviderSummary";
import Sunlight from "./Slides/Sunlight";
import Power from "./Slides/Power";
import Usage from "./Slides/Usage";
import Past24 from "./Slides/Past24";
import PastWeekBars from "./Slides/PastWeekBars";
import PastWeekGas from "./Slides/PastWeekGas";
import PastMonthBars from "./Slides/PastMonthBars";
import TreesPlanted from "./Slides/TreesPlanted";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { Menu } from "@material-ui/icons";

import blankImg from "./images/blank.png";
import csLogoLight from "./images/cs_logo_lightmode.png";
import csLogoDark from "./images/cs_logo_darkmode.png";
import lightningSymbol from "./images/lightning_lightmode.png";
import calIcon from "./images/calendar_darkmode.png";
import gascanIcon from "./images/gascan.png";
import leafIcon from "./images/leaf.png";

// the weather icons
import weatherClearDay from "./images/made_weather_icons/clear_day.png";
import weatherClearNight from "./images/made_weather_icons/clear_night.png";
import weatherRainDay from "./images/made_weather_icons/rain_day.png";
import weatherRainNight from "./images/made_weather_icons/rain_night.png";
import weatherSnowDay from "./images/made_weather_icons/snow_day.png";
import weatherSnowNight from "./images/made_weather_icons/snow_night.png";
import weatherSleetDay from "./images/made_weather_icons/sleet_day.png";
import weatherSleetNight from "./images/made_weather_icons/sleet_night.png";
import weatherWindDay from "./images/made_weather_icons/wind_day.png";
import weatherWindNight from "./images/made_weather_icons/wind_night.png";
import weatherFogDay from "./images/made_weather_icons/fog_day.png";
import weatherFogNight from "./images/made_weather_icons/fog_night.png";
import weatherCloudyDay from "./images/made_weather_icons/cloudy_day.png";
import weatherCloudyNight from "./images/made_weather_icons/cloudy_night.png";
import weatherPartlyCloudyDay from "./images/made_weather_icons/partly_cloudy_day.png";
import weatherPartlyCloudyNight from "./images/made_weather_icons/partly_cloudy_night.png";
import { Prompt } from "react-router-dom";

// Energy conversion constants
// https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references
const energyConv = {
  // metric tons of CO2 offset per kilowatt-hour
  CO2_OFFSET_PER_KWH: 0.000709,
  // metric tons of CO2 offset per urban tree planted
  CO2_OFFSET_PER_TREE: 0.06,
  // metric tons of CO2 added per gallon of gasoline
  CO2_ADDED_PER_GASOLINE_GAL: 0.008887,
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.menu.studio/" target="blank_">
        Menu Studio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// let drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
  },
  toolbar: {
    // paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    marginTop: 20,
    marginLeft: 30,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  dateFooter: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  circleButton: {
    borderRadius: "50%",
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 5,
    minWidth: 50,
    maxWidth: 50,
    minHeight: 50,
    maxHeight: 50,
  },
  dialogueButton: {
    margin: 15,
  },
}));

function handleChangeAppbar(slide, setAppbarTitle, data) {
  // console.log("slide: ", slide);
  let offset;
  let offsetMonth;
  if (data.energy && data.message !== "Not Found") {
    let dataArray = data.energy.production.daily.values;
    let pastWeek = dataArray
      .slice(dataArray.length - 8, dataArray.length - 1)
      .map((day) => {
        return day.value / 1000;
      });
    let totalkwh = pastWeek.reduce((prevDay, currentDay) => {
      return prevDay + currentDay;
    });
    // console.log("total kwh: ", totalkwh);
    offset = Math.round(
      (energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
        energyConv.CO2_ADDED_PER_GASOLINE_GAL
    );
    let pastMonth = dataArray.map((day) => {
      return day.value / 1000;
    });
    let totalkwhMonth = pastMonth.reduce((prevDay, currentDay) => {
      return prevDay + currentDay;
    });
    // console.log("total kwh: ", totalkwh);
    offsetMonth = Math.round(
      (energyConv.CO2_OFFSET_PER_KWH * totalkwhMonth) /
        energyConv.CO2_ADDED_PER_GASOLINE_GAL
    );
    // console.log("offset: ", offset);
  }

  switch (slide) {
    case "/ProviderSummary":
      setAppbarTitle({
        title: "",
        subtitle: "",
        icon: blankImg,
        calDays: null,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/Power":
      setAppbarTitle({
        title: "Current Solar Production",
        subtitle: "",
        icon: lightningSymbol,
        calDays: null,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/Past24":
      setAppbarTitle({
        title: "1-Day Solar Generation",
        subtitle: "",
        icon: lightningSymbol,
        calDays: null,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/PastWeekBars":
      setAppbarTitle({
        title: "7-Day Solar Generation",
        subtitle: `We offset ${offset} gallons of gasoline over the last 7 days`,
        icon: calIcon,
        calDays: 7,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/PastWeekGas":
      setAppbarTitle({
        title: "",
        subtitle: "",
        icon: gascanIcon,
        calDays: null,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/PastMonthBars":
      setAppbarTitle({
        title: "Solar Energy Produced",
        subtitle: `We offset ${offsetMonth} gallons of gasoline over the last 30 days`,
        icon: calIcon,
        calDays: 30,
      });
      // setAppbarSpacer("10vh");
      break;
    case "/TreesPlanted":
      setAppbarTitle({
        title: "Equivalent Trees Planted",
        subtitle: "",
        icon: leafIcon,
        calDays: null,
      });
      // setAppbarSpacer("15vh");
      break;
    default:
      setAppbarTitle({
        title: "",
        subtitle: "",
        icon: blankImg,
        calDays: null,
      });
    // setAppbarSpacer("10vh");
  }
}

const slidesObject = [
  { key: 0, nav: "/", title: "Home" },
  { key: 1, nav: "/ProviderSummary", title: "Solar Portfolio" },
  { key: 2, nav: "/Sunlight", title: "Current Sunlight" },
  { key: 3, nav: "/Power", title: "Current Solar Production" },
  // {key: 4, nav: "/Usage", title: "Usage"},
  { key: 5, nav: "/Past24", title: "24-Hour Solar Generation" },
  { key: 6, nav: "/PastWeekBars", title: "7-Day Solar Generation" },
  { key: 7, nav: "/PastWeekGas", title: "7-Day Carbon Offset" },
  { key: 8, nav: "/PastMonthBars", title: "30-Day Solar Generation" },
  { key: 9, nav: "/TreesPlanted", title: "Equivalent Trees Planted" },
];
const slideNav = [
  "/",
  "/ProviderSummary",
  "/Sunlight",
  "/Power",
  // "/Usage",
  "/Past24",
  "/PastWeekBars",
  "/PastWeekGas",
  "/PastMonthBars",
  "/TreesPlanted",
];
let slideNavCounter = 0;
const SLIDE_CHANGE_TIMER = 10;

export default function Dashboard(props) {
  const classes = useStyles();
  const [info, setInfo] = useState({
    capacity: 0,
    location: {
      address1: "",
      city: "",
      country: "",
      latitude: 0,
      longitude: 0,
      state: "",
      timezone: "",
      zip: "",
    },
    name: "",
  });
  const [data, setData] = useState({
    energy: {
      production: {},
    },
    meteo: {
      cloudCover: {},
      icon: {},
      temperature: {},
    },
    power: {
      production: {},
    },
    time: {},
  });
  const [orgData, setOrgData] = useState({
    totalSites: 0,
    totalPower: 0,
    orgName: "",
  });
  const [nextSlide, setNextSlide] = useState("/Home");
  const [changeSlide, setChangeSlide] = useState(false);
  const [appbarTitle, setAppbarTitle] = useState({
    title: "",
    subtitle: "",
    icon: blankImg,
    calDays: null,
  });
  const [navHome, setNavHome] = useState(false);
  const [isNightOrRaining, setIsNightOrRaining] = useState(false);
  const [siteId, setSiteId] = useState("");
  // const [appbarSpacer, setAppbarSpacer] = useState("10vh");
  let { id } = useParams();

  // On page load
  useEffect(() => {
    console.log("url id: ", id);
    let checklist = slideNav.map((slide) => slide.substring(1));
    if (id && id.length > 5 && !checklist.includes(id)) {
      console.log("Site ID from URL: ", id);
      setSiteId(id);
      refreshData(id);
      localStorage.setItem("siteId", id);
    } else if (
      localStorage.getItem("siteId") &&
      localStorage.getItem("siteId").length > 5 &&
      localStorage.getItem("siteId") !== ":siteId"
    ) {
      let siteIdFromStorage = localStorage.getItem("siteId");
      console.log("Site ID from localstorage: ", siteIdFromStorage);
      setSiteId(siteIdFromStorage);
      refreshData(siteIdFromStorage);
    } else {
      console.log("No Site ID Found!");
      toggleSlideshow();
      alert(
        "No Site ID, input Site ID in Menu or URL (e.g. solardashboard.com/siteid)"
      );
    }
    window.addEventListener("mousemove", handleMouseMove);
    setNavHome(true);
  }, []);

  // Refresh data from wattch
  function refreshData(siteId) {
    setIsNightOrRaining(false);
    fetchInfo(siteId).then((result) => {
      // console.log("result: ", result.capacity);
      if (result.capacity) setInfo(result);
    });
    fetchData(siteId).then((result) => {
      // console.log("result: ", result.energy);
      if (result.energy) {
        setData(result);
        if (result.time.percentOfDay === null) {
          props.setTheme(false);
          // setIsNightOrRaining(true);
        } else {
          props.setTheme(true);
        }
        // result.meteo.icon.value === "rain" && setIsNightOrRaining(true);
      }
    });
    fetchOrgInfo(siteId).then((result) => {
      // console.log("result: ", result);
      setOrgData(result);
    });
  }

  // Show Menu Button
  const [showMenuButton, setShowMenuButton] = useState(false);
  const handleMouseMove = () => {
    // console.log("show");
    window.removeEventListener("mousemove", handleMouseMove);
    setShowMenuButton(true);
    setTimeout(() => {
      // console.log("hide");
      setShowMenuButton(false);
      window.addEventListener("mousemove", handleMouseMove);
    }, 5000);
  };

  // Open/Close Menu
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Presentation Timer
  const [seconds, setSeconds] = useState(0);
  const [slideshowActive, setSlideshowActive] = useState(true);
  function toggleSlideshow() {
    setSlideshowActive(!slideshowActive);
  }
  function handleChangeSlide() {
    if (slideNavCounter === slideNav.length - 1) {
      slideNavCounter = 0;
      refreshData(siteId);
    } else {
      slideNavCounter++;
      // if night or raining, skip Sunlight and Power slides
      if (
        isNightOrRaining &&
        (slideNavCounter === 2 || slideNavCounter === 3)
      ) {
        slideNavCounter = 4;
      }
    }
    // console.log("change slide to: ", slideNav[slideNavCounter]);
    setNextSlide(slideNav[slideNavCounter]);
    setChangeSlide(true);
    handleChangeAppbar(slideNav[slideNavCounter], setAppbarTitle, data);
  }
  useEffect(() => {
    setChangeSlide(false);
    let interval = null;
    if (slideshowActive) {
      if (seconds > SLIDE_CHANGE_TIMER) {
        handleChangeSlide();
        setSeconds(0);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!slideshowActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [slideshowActive, seconds]);

  // Full Screen
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  // console.log("is fullscreen: ", document.fullscreenElement != null);

  const WeatherIcon = () => {
    let icon = weatherClearDay;
    if (data.meteo) {
      switch (data.meteo.icon.value) {
        case "clear-day":
          icon = weatherClearDay;
          break;
        case "clear-night":
          icon = weatherClearNight;
          break;
        case "rain":
          if (data.time.percentOfDay != null) icon = weatherRainDay;
          else icon = weatherRainNight;
          break;
        case "snow":
          if (data.time.percentOfDay != null) icon = weatherSnowDay;
          else icon = weatherSnowNight;
          break;
        case "sleet":
          if (data.time.percentOfDay != null) icon = weatherSleetDay;
          else icon = weatherSleetNight;
          break;
        case "wind":
          if (data.time.percentOfDay != null) icon = weatherWindDay;
          else icon = weatherWindNight;
          break;
        case "fog":
          if (data.time.percentOfDay != null) icon = weatherFogDay;
          else icon = weatherFogNight;
          break;
        case "cloudy":
          if (data.time.percentOfDay != null) icon = weatherCloudyDay;
          else icon = weatherCloudyNight;
          break;
        case "partly-cloudy-day":
          icon = weatherPartlyCloudyDay;
          break;
        case "partly-cloudy-night":
          icon = weatherPartlyCloudyNight;
          break;
        default:
          icon = weatherClearDay;
      }
    }
    return <img alt="Weather Icon" src={icon} width="60vw" height="60vh" />;
  };

  return (
    <div className={classes.root}>
      <Router>
        {/* {document.fullscreenElement != null ? null : ( */}
        <Drawer open={drawerOpen} onClose={(ev, reason) => handleDrawerClose()}>
          {/* <div className={classes.toolbarIcon}>
            <IconButton
              onClick={handleDrawerClose}
              className={clsx(!open && classes.drawerCloseButtonHidden)}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider /> */}
          <List>
            <MainListItems
              setTheme={props.setTheme}
              theme={props.theme}
              darkModeIcon={props.darkModeIcon}
              handleChangeAppbar={handleChangeAppbar}
              setAppbarTitle={setAppbarTitle}
              slideNav={slideNav}
              slideNavCounter={slideNavCounter}
              setInfo={setInfo}
              setData={setData}
              setOrgData={setOrgData}
              data={data}
              info={info}
              setSlideshowActive={setSlideshowActive}
              isNightOrRaining={isNightOrRaining}
            />
          </List>
          <Divider />
          <List>
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleDrawerClose}
              >
                Close Menu
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => {
                  toggleFullScreen();
                  handleDrawerClose();
                }}
              >
                Fullscreen
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className={classes.circleButton}
                variant="contained"
                color="primary"
                onClick={() => {
                  toggleSlideshow();
                }}
              >
                {slideshowActive ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
                {/* {seconds} */}
              </Button>
            </ListItem>
          </List>
        </Drawer>
        {/* )} */}

        <AppBar
          position="absolute"
          className={clsx(classes.appBar)}
          color="transparent"
          elevation={0}
          style={{
            zIndex: -1,
          }}
        >
          <Toolbar className={classes.toolbar}>
            <img
              alt="Cherry Street Energy logo"
              src={props.theme ? csLogoLight : csLogoDark}
              position="absolute"
              height={70}
            ></img>
          </Toolbar>
        </AppBar>

        <AppBar
          // position="absolute"
          className={clsx(classes.appBar)}
          color="transparent"
          elevation={0}
          style={{
            zIndex: -1,
          }}
        >
          <Toolbar className={classes.toolbar} align="center">
            {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <ChevronRightIcon />
              </IconButton> */}
            <Typography
              // component="h1"
              variant="h2"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {appbarTitle.title}
              <Typography variant="h5" noWrap align="center">
                {appbarTitle.subtitle}
              </Typography>
            </Typography>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${appbarTitle.icon})`,
                backgroundRepeat: "no-repeat",
                width: 68,
                height: 68,
                paddingTop: 12,
                paddingRight: 6,
                fontSize: 32,
                fontWeight: "bold",
                fontFamily: "Theinhardt, Roboto",
              }}
            >
              {appbarTitle.calDays}
            </div> */}
            {/* <img alt="App Bar Icon" src={appbarTitle.icon} /> */}
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          {/* <div
            style={{
              height: appbarSpacer,
            }}
          /> */}
          <Container className={classes.container} maxWidth="xl">
            <Switch>
              <Route path="/ProviderSummary">
                <ProviderSummary info={info} orgData={orgData} />
              </Route>

              <Route path="/Sunlight">
                <Sunlight data={data} />
              </Route>

              <Route path="/Power">
                <Power info={info} data={data} />
              </Route>

              <Route path="/Usage">
                <Usage data={data} />
              </Route>

              <Route path="/Past24">
                <Past24 data={data} />
              </Route>

              <Route path="/PastWeekBars">
                <PastWeekBars energyConv={energyConv} data={data} />
              </Route>

              <Route path="/PastWeekGas">
                <PastWeekGas energyConv={energyConv} data={data} />
              </Route>

              <Route path="/PastMonthBars">
                <PastMonthBars energyConv={energyConv} data={data} />
              </Route>

              <Route path="/TreesPlanted">
                <TreesPlanted energyConv={energyConv} data={data} />
              </Route>

              <Route path="/">
                <Home info={info} orgData={orgData} />
              </Route>
            </Switch>
            {changeSlide ? <Redirect to={nextSlide} /> : ""}
            {navHome ? <Redirect to={"/home"} /> : ""}
          </Container>

          <div
            className={classes.dateFooter}
            style={{
              margin: 0,
              top: "auto",
              bottom: 0,
              position: "fixed",
              width: "100%",
            }}
          >
            <Grid container style={{ marginBottom: 10 }}>
              <Grid item xs={4} md={4} lg={4}>
                <Typography
                  variant="h5"
                  style={{ fontFamily: "Theinhardt, Roboto" }}
                >
                  {new Date().toLocaleDateString("en-US", {
                    // weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ fontFamily: "Theinhardt, Roboto" }}
                >
                  {new Date()
                    .toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .toLocaleLowerCase()}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "bottom",
                }}
              >
                <Box pt={4}>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      fontFamily: "Theinhardt, Roboto",
                    }}
                  >
                    {info.name && info.name.substring(7)} Solar
                  </Typography>
                  <Copyright />
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <WeatherIcon />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Typography
                  variant="h3"
                  style={{ fontFamily: "Theinhardt, Roboto" }}
                >
                  {data.meteo
                    ? Math.round((data.meteo.temperature.value * 9) / 5 + 32)
                    : ""}
                  &deg;
                </Typography>
              </Grid>
            </Grid>
          </div>

          {showMenuButton ? (
            <Box
              style={{
                margin: 0,
                bottom: "auto",
                right: 20,
                top: 20,
                left: "auto",
                position: "fixed",
                zIndex: 10,
              }}
            >
              <Button
                className={classes.circleButton}
                variant="contained"
                color="primary"
                onClick={handleDrawerOpen}
              >
                <Menu />
              </Button>
            </Box>
          ) : null}
        </main>
      </Router>
    </div>
  );
}
