import React from "react";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Route path={"/"} exact>
          <Index />
        </Route>
        <Route path={"/profile"}>
          <Profile />
        </Route>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
