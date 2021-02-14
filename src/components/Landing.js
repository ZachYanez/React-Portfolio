import React, { Suspense } from "react";
import logo from "../assets/logo512.png";
import { Link } from "react-router-dom";


export default function Landing() {



  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Zach Yanez</p>
        <Link className="welcome" to="/Home">
          Welcome
        </Link>
      </header>
    </div>
  );
}
