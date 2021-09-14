import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
  IconButton,
  Container,
  Grid,
  Link,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import Home from "./Slides/Home";
import ProviderSummary from "./Slides/ProviderSummary";
import Sunlight from "./Slides/Sunlight";
import Power from "./Slides/Power";
import { MainListItems } from "./listItems";

import csLogoLight from "./images/cs_logo_lightmode.png";
import csLogoDark from "./images/cs_logo_darkmode.png";
import moonSymbol from "./images/moon_darkmode.png";
import sunriseSymbol from "./images/sunrise.png";
import lightningSymbol from "./images/lightning_lightmode.png";
import gasCanSymbol from "./images/gascan.png";
import sunWholeSymbol from "./images/sun_whole.png";
import calendarSymbol from "./images/calendar_darkmode.png";
import Usage from "./Slides/Usage";
import Past24 from "./Slides/Past24";

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  drawerCloseButtonHidden: {
    display: "none",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  dateFooter: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const slideNav = [
  "/Home",
  "/ProviderSummary",
  "/Sunlight",
  "/Power",
  "/Usage",
  "/Past24",
  "/PastWeekBars",
  "/PastWeekGas",
  "/PastMonthBars",
  "/TreesPlanted",
];
let slideNavCounter = 0;

const SLIDE_CHANGE_TIMER = 5;

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [nextSlide, setNextSlide] = useState("/Home");
  const [changeSlide, setChangeSlide] = useState(false);
  const [appbarTitle, setAppbarTitle] = useState("");
  const [appbarIcon, setAppbarIcon] = useState(moonSymbol);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Presentation Timer Code
  const [seconds, setSeconds] = useState(0);
  const [slideshowActive, setSlideshowActive] = useState(false);
  function toggleSlideshow() {
    setSlideshowActive(!slideshowActive);
  }
  function handleChangeSlide() {
    slideNavCounter === slideNav.length - 1
      ? (slideNavCounter = 0)
      : slideNavCounter++;
    // console.log("change slide to: ", slideNav[slideNavCounter]);
    setNextSlide(slideNav[slideNavCounter]);
    setChangeSlide(true);
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

  // function uuidv4() {
  //   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
  //     /[xy]/g,
  //     function (c) {
  //       var r = (Math.random() * 16) | 0,
  //         v = c == "x" ? r : (r & 0x3) | 0x8;
  //       return v.toString(16);
  //     }
  //   );
  // }

  return (
    <div className={classes.root}>
      <Router>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          color="transparent"
          elevation={0}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
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
            </IconButton>
            <img
              alt="Cherry Street Energy logo"
              src={props.theme ? csLogoLight : csLogoDark}
            ></img>
            <Typography
              // component="h1"
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
              align="center"
            >
              {appbarTitle}
            </Typography>
            <img src={appbarIcon} />
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton
              onClick={handleDrawerClose}
              className={clsx(!open && classes.drawerCloseButtonHidden)}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <MainListItems
              setTheme={props.setTheme}
              theme={props.theme}
              darkModeIcon={props.darkModeIcon}
            />
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container} maxWidth="xl">
            <Switch>
              <Route path="/Home">
                <Home setAppbarTitle={setAppbarTitle} />
              </Route>

              <Route path="/ProviderSummary">
                <ProviderSummary
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/Sunlight">
                <Sunlight
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/Power">
                <Power
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/Usage">
                <Usage
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/Past24">
                <Past24
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/PastWeekBars">
                <Power
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/PastWeekGas">
                <Power
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/PastMonthBars">
                <Power
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>

              <Route path="/TreesPlanted">
                <Power
                  setAppbarTitle={setAppbarTitle}
                  setAppbarIcon={setAppbarIcon}
                />
              </Route>
            </Switch>
            {changeSlide ? <Redirect to={nextSlide} /> : ""}

            <div className={classes.dateFooter}>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
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
                <Grid item xs={6} md={6} lg={6} align="right">
                  <Typography
                    variant="h3"
                    style={{ fontFamily: "Theinhardt, Roboto" }}
                  >
                    <img alt="Moon/Sun symbol" src={sunriseSymbol} /> 72&deg;
                  </Typography>
                </Grid>
              </Grid>
            </div>

            <Box
              onClick={() => {
                toggleSlideshow();
              }}
            >
              <br />
              {slideshowActive ? (
                <PauseIcon fontSize="large" />
              ) : (
                <PlayArrowIcon fontSize="large" />
              )}
            </Box>
            <Box>{seconds}</Box>

            <Box pt={4}>
              <br />
              <Copyright />
            </Box>
          </Container>
        </main>
      </Router>
    </div>
  );
}
