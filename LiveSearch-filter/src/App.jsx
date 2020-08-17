import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Services from "./Services";
import User from "./User";
import Search from "./Search";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/user/:fname/:lname" component={User}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/search" component={Search}></Route>

        <Route component={Error}></Route>
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  );
};

export default App;
