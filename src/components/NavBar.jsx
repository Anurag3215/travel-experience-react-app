import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/Addexperience", label: "Travel" },
    { to: "/addhotel", label: "Hotels" },
    { to: "/addadventure", label: "Adventure" },
    { to: "/", label: "View", anchor: "#about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg px-3 px-lg-4 py-3">
      <div className="container-fluid navbar-glass">
        <NavLink className="navbar-brand me-3 me-lg-4" to="/">
          <span className="brand-mark">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TravelSphere logo">
              <path d="M13 42L27 24L38 30L50 16" stroke="url(#stroke)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 44C24 41.2 26.2 39 29 39H46C48.8 39 51 41.2 51 44V44" stroke="url(#stroke)" strokeWidth="4" strokeLinecap="round" />
              <path d="M16 20C16 13.4 21.4 8 28 8H30C36.6 8 42 13.4 42 20V24H16V20Z" fill="url(#fill)" />
              <defs>
                <linearGradient id="stroke" x1="13" y1="8" x2="51" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="fill" x1="16" y1="8" x2="42" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <span>TravelSphere</span>
          </span>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav align-items-lg-center gap-lg-1">
            {links.map((link) => (
              link.anchor ? (
                <a key={link.label} className="nav-link nav-link-pill" href={link.anchor}>
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.to} className={({ isActive }) => `nav-link nav-link-pill ${isActive ? "active" : ""}`} to={link.to}>
                  {link.label}
                </NavLink>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;