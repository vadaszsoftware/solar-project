import React, { useState } from "react";
import Dashboard from "./dashboard";
import {
  responsiveFontSizes,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

let darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: yellow,
  },
});
let lightTheme = createTheme({
  palette: {
    type: "light",
    primary: yellow,
  },
});
darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

function App() {
  const [theme, setTheme] = useState(true);
  let darkModeIcon = !theme ? <Brightness7Icon /> : <Brightness3Icon />; // Icons imported from `@material-ui/icons`
  let appliedTheme = createTheme(theme ? lightTheme : darkTheme);
  return (
    <ThemeProvider theme={appliedTheme}>
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
