import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact />
        <Route path="/login" exact />
        <Route path="/result" exact />
        <Route path="/lose" exact />
        <Route path="/dev-artist" exact />
        <Route path="/dev-genre" exact />
      </Switch>
    </BrowserRouter>
    // <WelcomeScreen errorsCount={errorsCount}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
