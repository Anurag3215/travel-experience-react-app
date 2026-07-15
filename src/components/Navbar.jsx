import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow"
            style={{
                background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                padding: "12px 0"
            }}
        >
            <div className="container">

                <Link className="navbar-brand fw-bold fs-3" to="/">
                    🏔 Adventure Hub
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold mx-2" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold mx-2" to="/add">
                                Add Adventure
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold mx-2" to="/View-act">
                                View Adventures
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;