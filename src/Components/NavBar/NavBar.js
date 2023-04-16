import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <h1 className="fs-3 Ubuntu navbar-brand">Rick and Morty</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <Link to="/">Personagens</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link class="nav-Link" to="/Episode">
                  Episodios
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/Location">localização</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
