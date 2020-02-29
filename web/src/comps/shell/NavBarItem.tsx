import React, { FC } from "react";
import { NavLink } from "react-router-dom";

type P = {
  href: string;
};

const NavBarItem: FC<P> = ({ children, href }) => {
  return (
    <NavLink className="navbar-item" exact to={href} activeClassName="is-active">
      <span>{children}</span>
    </NavLink>
  );
};

export default NavBarItem;
