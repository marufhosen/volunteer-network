import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import AddEvents from "./components/AddEvents/AddEvents";

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addEvents">
            <AddEvents></AddEvents>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
