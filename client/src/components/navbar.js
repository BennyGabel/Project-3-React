import React, { Component }  from 'react';
  
const Navbar = (props) => {

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
}

// Export Function 
// module.exports = Navbar
export default Navbar