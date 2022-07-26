import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Trade from "./pages/Trade";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Research from "./pages/Research";
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/" exact component={!user ? Auth : Home} />
          <Route path="/home" exact component={!user ? Auth : Home} />
          <Route path="/stocks" exact component={!user ? Auth : Stocks} />
          <Route path="/trade" exact component={!user ? Auth : Trade} />
          <Route path="/profile" exact component={!user ? Auth : Profile} />
          <Route path="/about" exact component={!user ? Auth : About} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/research" exact component={!user ? Auth : Research} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
