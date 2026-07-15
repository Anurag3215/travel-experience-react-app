import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-success bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Travel
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              home 
            </NavLink>
            <NavLink className="nav-link" to="/Addexperience">
              Add Experience
            </NavLink>
            <NavLink className="nav-link" to="/Viewexperience">
              View Experience
            </NavLink>


            <NavLink className="nav-link" to="/addhotel">
              Add Hotel review
            </NavLink>
            <NavLink className="nav-link" to="/viewhotel">
              View Hotel Review
            </NavLink>
            <NavLink className="nav-link" to="/addadventure">
              Add Adventure
            </NavLink>
            <NavLink className="nav-link" to="/viewadventure">
              View Adventure
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;