import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavBarItem from "./NavBarItem";

const Header: FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    if (!burgerOpen) {
      return;
    }

    const collapseOnClick = () => {
      setBurgerOpen(false);
    };

    document.addEventListener("click", collapseOnClick);

    return () => {
      document.removeEventListener("click", collapseOnClick);
    };
  }, [burgerOpen]);

  return (
    <header>
      <nav className="navbar container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/images/starfishLogo.png" alt="logo" />
          </Link>
          <a
            className={classNames("navbar-burger burger", burgerOpen && "is-active")}
            href="/"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={e => {
              e.preventDefault();
              setBurgerOpen(!burgerOpen);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={classNames("navbar-menu", burgerOpen && "is-active")}>
          <div className="navbar-end">
            <NavBarItem href="/">Home</NavBarItem>
            <NavBarItem href="/about">About</NavBarItem>
            <NavBarItem href="/contact">Contact</NavBarItem>
            <div style={{ display: "flex", alignItems: "center", marginLeft: ".5rem" }}>
              <button className="btn-primary grow-on-hover">DONATE</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
