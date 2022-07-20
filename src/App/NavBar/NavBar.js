import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from "react";
import './navbar.css';


const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/" id="navbrand">CrediKarma</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-item nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item nav-link" to="/jobs">Jobs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>

        </div>

    );
};

export default NavBar;
