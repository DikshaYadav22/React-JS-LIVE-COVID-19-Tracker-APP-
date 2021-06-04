import "./App.css";
import CountryData from "./components/CountryData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/data" component={CountryData} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
