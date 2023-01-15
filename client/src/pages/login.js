
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import validator from 'validator'
import { useQuery } from '@apollo/client';
// import 
import { QUERY_USERS_ALL } from '../utils/queries';


// BEG - From Class
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';


import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
// END - From Class




// var aryAllUsers = []


// Create function
const Login = () => {





  // const handleSubmit = (e) => {      // Function Renamed
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // WORKING!!
    var userEmailEl = document.getElementById('userEmail').value
    var passwordEl = document.getElementById('password-login').value

    var loginMsgEl = document.getElementById('loginMessage')     // ATTENTION!!! This refers to the element, not to the value

    // let objUser1 = allusers.find(chk => chk.email === 'pho@gmail.com');   // PASSED
    let objUser = allusers.find(chk => chk.email == userEmailEl);        // PASSED

    if ((userEmailEl.value) || (passwordEl.value)) {
      // Evaluates if User's email or user's password are empty      
      if ((userEmailEl.value) && (passwordEl.value)) {
        // Evaluates if User's email AND user's password are empty
        loginMsgEl.innerHTML = 'Please enter user & password information'
      } else {
        if (userEmailEl.value) {
          // Evaluates if User's email is empty
          loginMsgEl.innerHTML = 'Please enter user email'
        } else {
          // Evaluates if user's password is empty    // passwordEl
          loginMsgEl.innerHTML = 'Please enter password'
        }
      }
    } else {


      if (typeof (objUser) === 'object') {
        if (objUser.length === 0) {
          loginMsgEl.innerHTML = 'Invalid Email!'
          // console.log("Email " + userEmailEl + " is not register as a user")
        } else {
          if (passwordEl === objUser.password) {
            loginMsgEl.innerHTML = "Correct Password, please processd"
            // console.log("Correct Password, please processd")
            // User should be sent to SHOP


  Location: `http://whateverhostthiswillbe:8675/${newRoom}`




          } else {
            loginMsgEl.innerHTML = 'Wrong credentials'
            // console.log("CorrectPassword associated to " + userEmailEl + " is " + objUser.password)
          }
        }
      } else {
        loginMsgEl.innerHTML = "User not found!"
        //         console.log("Password associated to " + userEmailEl + " is " + objUser.password)
      }
    }

  }

// Signup Submit
const handleSignUpSubmit = (e) => {
  e.preventDefault();

    
     var emailsignupEl     = document.getElementById('email-signup').value
     var passwordsignupEl  = document.getElementById('password-signup').value
     var passwordconfirmEl = document.getElementById('password-confirm').value

     var signupMsgEl = document.getElementById('signupMessage')     // ATTENTION!!! This refers to the element, not to the value
 
     // let objUser1 = allusers.find(chk => chk.email === 'pho@gmail.com');   // PASSED
     let objUser = allusers.find(chk => chk.email == userEmailEl);        // PASSED
 
     if ((userEmailEl.value) || (passwordEl.value)) {
       // Evaluates if User's email or user's password are empty      
       if ((userEmailEl.value) && (passwordEl.value)) {
         // Evaluates if User's email AND user's password are empty
         loginMsgEl.innerHTML = 'Please enter user & password information'
       } else {
         if (userEmailEl.value) {
           // Evaluates if User's email is empty
           loginMsgEl.innerHTML = 'Please enter user email'
         } else {
           // Evaluates if user's password is empty    // passwordEl
           loginMsgEl.innerHTML = 'Please enter password'
         }
       }
     } else {
 
 
       if (typeof (objUser) === 'object') {
         if (objUser.length === 0) {
           loginMsgEl.innerHTML = 'Invalid Email!'
           // console.log("Email " + userEmailEl + " is not register as a user")
         } else {
           if (passwordEl === objUser.password) {
             loginMsgEl.innerHTML = "Correct Password, please processd"

             // console.log("Correct Password, please processd")
           } else {
             loginMsgEl.innerHTML = 'Wrong credentials'
             // console.log("CorrectPassword associated to " + userEmailEl + " is " + objUser.password)
           }
         }
       } else {
         loginMsgEl.innerHTML = "User not found!"
         //         console.log("Password associated to " + userEmailEl + " is " + objUser.password)
       }
     }
 



}
// ----------

  
  const handleChange = (e) => {
    e.preventDefault();

    const cFrom = e.target.id
    switch (cFrom) {
      case 'id-login':
        if (e.target.value.length > 0) {
          alert('filled');
          break
        } else {
          alert('empty')
          break
        }

        alert('left login')
        var logId = document.getElementById(cFrom);

        alert(logId.value);

        break;

      case 'password-login': alert('left password')

        break;
    }

  }


  const switchform = (e) => {

    const displayElem = e.target.id;
    console.log(displayElem);
    var logElem = document.getElementById('input-forms-login');
    var signElem = document.getElementById('input-forms-signup');


    if (displayElem === 'login-title') {

      logElem.style.display = "block";
      signElem.style.display = "none"
    } else {
      logElem.style.display = "none";
      signElem.style.display = "block";
    }



  }

  // Email Validator
  /* const [emailError, setEmailError] = useState('') */
  const validateEmail = (e, cFrom) => {

    switch (cFrom) {
      case "Login":

        var email = e.target.value
        console.log("cFrom", cFrom)
    
        var valemailEl = document.getElementById('emailMessage')
    
        if (validator.isEmail(email)) {
          valemailEl.innerHTML = ''
        } else {
          valemailEl.innerHTML = 'Invalid Email!'
    
        }
      
        case "Signup":
          // <input className='form-input' inputTest='reset' type='text' id='email-signup' placeholder='New Email' onBlur={(e) => validateEmail(e, "Signup")} />"
          var email = e.target.value
          console.log("cFrom", cFrom)
      
          var valemailEl = document.getElementById('emailSignUpMessage')
      
          if (validator.isEmail(email)) {
            valemailEl.innerHTML = ''
          } else {
            valemailEl.innerHTML = 'Invalid Email!'
      
          }
    
    }
  }



  // NOTE: The following 3 lines, HAVE TO BE THERE
  const { loading, data } = useQuery(QUERY_USERS_ALL)
  console.log(data)
  const allusers = data?.allusers || [];




  return (
    <div className='react-container'>
      <div id='form-switch'>
        <h2 id='login-title' onClick={(strID) => switchform(strID)}>Login</h2>
        <h2 id='signup-title' onClick={(strID) => switchform(strID)}>Signup</h2>
      </div>
      <div id='input-forms-login'>
        <h2 className='page-title'>Login</h2>
        <form className='whole-form' onSubmit={handleLoginSubmit}>
          <div className='main-form'>
            <label htmlFor='id-login'>Email:</label>
            {/* <input className='form-input' type='text' id='id-login' onBlur={handleChange} /> */}
            <input className='form-input' inputTest='reset' type='text' id='userEmail' placeholder='Enter Email' onBlur={(e) => validateEmail(e, "Login")} />
          </div>
          <span id='emailMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    {/*  , float:left */}

          <div className='main-form'>
            <label htmlFor='password-login'>Password:</label>
            {/* 
               <input className='form-input' inputTest='reset' type='password' id='password-login' placeholder='Enter Password' onBlur={handleChange} /> 
               REMOVE/DO NOT CALL   handleChange
            */}
            <input className='form-input' inputTest='reset' type='password' id='password-login' placeholder='Enter Password' />
          </div>
          <div className='sign-log-button'>
            <button className='form-button' id='signin-button' type='submit' >login</button>
          </div>
          <span id='loginMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>
        </form>
      </div>

      <div id='input-forms-signup'>
        <h2 className='page-title'>Signup</h2>
        <form className='whole-form' onSubmit={handleSignUpSubmit}>
          <div className='main-form'>
            <label htmlFor='email-signup'>Create New ID:</label>
            <input className='form-input' inputTest='reset' type='text' id='email-signup' placeholder='New Email' onBlur={(e) => validateEmail(e, "Signup")} />
          </div>
          <span id='emailSignUpMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    {/*  , float:left */}

          <div className='main-form'>
            <label htmlFor='password-signup'>Password:</label>
            <input className='form-input' inputTest='reset' type='password' id='password-signup' placeholder='Create Password' />
          </div>
          <div className='main-form pass-confirm'>
            <label htmlFor='password-signup'>Password:</label>
            <input className='form-input' inputTest='reset' type='password' id='password-confirm' placeholder='Confirm Password' />
          </div>
          {/* <br></br> */}
          <div className='sign-log-button'>
            <button className='form-button' id='signup-button' type='submit'>signup</button>
          </div>
          <span id='signupMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>
        </form>
      </div>






    </div>
  )
}

// Export Function 
export default Login
