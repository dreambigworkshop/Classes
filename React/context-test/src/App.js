import React from "react";
import NavComponent from "./NavComponent";
import BikeBrands from "./BikeBrands";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrandProvider from "./BrandProvider";

export default function App() {
  return (
    <Router>
      <BrandProvider>
        <NavComponent />
        <Switch>
          <Route path="/brand">
            <BikeBrands />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrandProvider>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
