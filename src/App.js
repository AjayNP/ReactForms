import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Forms from './components/Forms';
import Userform from "./components/Userform";
import Forms from "./components/Forms";
function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route exact path="/" component={Userform} />
          <Route exact path="/forms" component={Forms} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
