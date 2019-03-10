import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import AppleList from "./components/AppleList";
import SamsungList from "./components/SamsungList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Google from "./components/Google";
import LG from "./components/LG";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/apple" component={AppleList} />
          <Route path="/samsung" component={SamsungList} />
          <Route path="/google" component={Google} />
          <Route path="/lg" component={LG} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
