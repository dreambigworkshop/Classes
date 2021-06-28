import React from "react";
import NavComponent from './NavComponent'
import BikeBrands from "./BikeBrands";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const brands = ["Bazaz", "Yamaha", "Royal Enfield", "Honda", "BMW"];

  return (
    <Router>
      <div>
       <NavComponent brands={brands}/>
        <Switch>
          <Route path="/brand">
            <BikeBrands brands={brands}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
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