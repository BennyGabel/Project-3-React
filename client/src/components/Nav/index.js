import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="nav-link"> <Link to="/orderHistory"> Order History </Link> </li>
          <li className="nav-link"> <a href="/" onClick={() => Auth.logout()}> Logout </a> </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="nav-link"> <Link to="/signup"> Signup </Link> </li>
          <li className="nav-link"> <Link to="/login">  Login  </Link> </li>
        </ul>
      );
    }
  }

  return (
    <header className="nav-header">
      <h1 id="greene-logo"> <Link to="/"> Greene Shop </Link> </h1>
      <nav> {showNavigation()} </nav>
    </header>
  );
}

export default Nav;
