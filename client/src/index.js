import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import Nav from "./components/Nav";
import About from "./pages/aboutpage/about";
import Signup from "./pages/signup";
import Products from "./pages/products";

const App = () => {
  return (
    <Router>
      <div className="subtle-background">
        <div className="wrapper">
          <Nav />
          <Route exact path="/" component={Products} />
          <Route exact path="/checkout" component={About} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
