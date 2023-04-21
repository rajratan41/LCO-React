import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>Gitfire App</NavbarBrand>
    </Navbar>
  );
};

export default Header;
