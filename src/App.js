import React from "react";
import Dashboard from "./dashboard";
import { ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = {
  palette: {
    primary: blue,
  },
};

function App() {
  return <Dashboard />;
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
