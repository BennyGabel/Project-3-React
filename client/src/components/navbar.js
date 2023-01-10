import React, { Component }  from 'react';


  
// Create function
// props are parameters   1 to infinite....... all parameters are accessed props.(variable)   i.e. promps.set_screen
const Navbar = (props) => {
    // const change_screen = (event) => {
    //     // console.dir(event.target)
    //     let lcName = event.target.textContent;
    //     props.set_screen(lcName.toLowerCase);
    // }
    return (
        <div>
            <ul className="menuoptions">
            <li><a href='/'  >Home</a></li>
            <li><a href='/greene'  >Shop</a></li>
            <li><a href='/reviews'  >Reviews</a></li>
            <li><a href='/login'  >Login</a></li>
{/*             
              <li><a href='/' onClick={change_screen}>Home</a></li>
            <li><a href='/shop' onClick={change_screen}>Shop</a></li>
            <li><a href='/reviews' onClick={change_screen}>Reviews</a></li>
            <li><a href='/login' onClick={change_screen}>Login</a></li> */}
            </ul>

        </div>
    )
}

// Export Function 
// module.exports = Navbar
export default Navbar