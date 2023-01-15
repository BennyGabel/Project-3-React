import React  from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    if (Auth.loggedIn()) {
        return (
            <div>
                <ul className="menuoptions">
                <li><a href='/'  >Home</a></li>
                <li><a href='/greene'  >Shop</a></li>
                <li><a href='/reviews'  >Reviews</a></li>
                <li><a href='/login'  >Login</a></li>
                </ul>

            </div>
        )
    } else {
        return (
            <ul className="flex-row">
            <li className="mx-1">
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>

            )  


    } 
}

// Export Function 
// module.exports = Navbar
export default Navbar