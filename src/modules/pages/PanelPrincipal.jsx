import React from "react";
import { Navbar } from "../../components/Navbar.jsx";
import "../../styles/panelprincipal.css";

export function PanelPrincipal() {
  return (
    <div>
      <Navbar />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">COMEDOR UNIVERSITARIO</h1>
            <p className="lead fw-normal text-white-50 mb-0"></p>
          </div>
        </div>
      </header>

    </div>
  );
}