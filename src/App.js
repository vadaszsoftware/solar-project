import React, { useState } from "react";
import Dashboard from "./dashboard";
import {
  responsiveFontSizes,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import sentinelLight from "./fonts/Sentinel-Light.ttf";
import theinhardtLight from "./fonts/Sentinel-Light.ttf";
import { amber, yellow } from "@material-ui/core/colors";

const sentinel = {
  fontFamily: "Sentinel",
  fontStyle: "light",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Sentinel'),
    local('Sentinel-Light'),
    url(${sentinelLight}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theinhardt = {
  fontFamily: "Theinhardt",
  fontStyle: "light",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Theinhardt'),
    local('Theinhardt-Light'),
    url(${theinhardtLight}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

let lightTheme = createTheme({
  palette: {
    type: "light",
    primary: amber,
  },
  typography: {
    fontFamily: "Sentinel, Theinhardt, Roboto",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [sentinel, theinhardt],
      },
    },
  },
});
let darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: amber,
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: "Sentinel, Theinhardt, Roboto",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [sentinel, theinhardt],
      },
    },
  },
});
lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

function App() {
  const [theme, setTheme] = useState(true);
  let darkModeIcon = !theme ? <Brightness7Icon /> : <Brightness3Icon />; // Icons imported from `@material-ui/icons`
  let appliedTheme = createTheme(theme ? lightTheme : darkTheme);
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Dashboard
        setTheme={setTheme}
        theme={theme}
        darkModeIcon={darkModeIcon}
      />
    </ThemeProvider>
  );
}

export default App;

/*

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

*/
