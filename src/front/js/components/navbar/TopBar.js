import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import logo from "../../../img/logoNavBar.png";
import "../../../styles/navbar.css";

export const TopBar = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getUsuario();
  }, []);
  console.log(store.usuario);
  return (
    <nav
      className={`navbar sticky-top flex-md-nowrap p-0 shadow tb ${store.notnav && "d-none"}`}
      data-bs-theme="dark"
      style={{ backgroundColor: "#e4e9f7" }}
    >
      <div className="tb-image-text">
        <span className="tb-image">
          <img src={logo} />
        </span>

        <div className="text logo-text">
          <span className="tb-name">LinkedTeam - </span>{" "}
          <span className="lt-name">{store.header}</span>
        </div>
      </div>

      <ul className="navbar-nav flex-row me-4 gap-1">
        <li className="nav-item text-nowrap">
          <button
            className="px-3 tb-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle search"
          >
            <span className="lt-name me-2">
              {store.usuario.name} {store.usuario.lastname}
            </span>
            <i className="fa-solid fa-user"></i>
          </button>
        </li>
        <li className="nav-item text-nowrap">
          <button
            className="px-3 tb-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-coins"></i>
          </button>
        </li>
        <li className="nav-item text-nowrap">
          <button
            className="px-3 tb-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bell"></i>
          </button>
        </li>
      </ul>

      {/* <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div> */}
    </nav>
  );
};
