import React, { useEffect, useState } from "react";
import Message from "./components/Message";
import { Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar align-items-center">
        <Navbar.Brand>
          <img
            className="navbar__logo"
            src={process.env.PUBLIC_URL + "/57BlocksLogo.png"}
            alt="57Blocks"
          />
        </Navbar.Brand>
        <h2 className="navbar__title">WhatsApp Messages</h2>
        <div className="navbar__filler"></div>
      </Navbar>
      <Message />
    </div>
  );
}

export default App;
