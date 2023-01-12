import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import validator from 'validator'
import { useQuery } from '@apollo/client';
// import 
import { QUERY_USERS_ALL } from '../utils/queries';



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


/*

            <input className='form-input' inputTest='reset' type='text' id='email-signup' placeholder='New Email' onBlur={(e) => validateEmail(e, "Signup")} />

          <span id='emailSignUpMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    

            <input className='form-input' inputTest='reset' type='password' id='password-signup' placeholder='Create Password' />
            <input className='form-input' inputTest='reset' type='password' id='password-confirm' placeholder='Confirm Password' />

*/



  
     
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
  //   var placeHldrEmail = userEmail.getAttribute('placeholder');
  //   var userLbl = document.getElementById('userLabel');

  //   var passLogin = document.getElementById('password-login');
  //   var passLoginLbl = document.getElementById('pass-label-log');
  //   var placeHldrPass = passLogin.getAttribute('placeholder');  

  //   var passConfirm = document.getElementById('password-confirm');
  //   var passConfLbl = document.getElementById('pass-label-conf');
  //   var placeHldrConf = passConfirm.getAttribute('placeholder'); 

  //   var submitBtn = document.getElementById('submit-button');



  //   switch (e) {
  //     case 'login' :  

  //       placeHldrEmail.setAttribute('Enter Email ID : ');
  //       userLbl.textContent = 'User ID :';
  //       placeHldrPass.setAttribute('Enter Password');
  //       passLoginLbl.textContent = 'Password :';
  //       submitBtn.textContent = 'Login';
  //       passConfLbl.style.display = 'none';
  //       break
  //     case 'signup' :  
  //      } else { 
  //       placeHldrEmail.setAttribute('New Email ID :');
  //       userLbl.textContent = 'Create New ID :';
  //       placeHldrPass.setAttribute('Create Password');
  //       passLoginLbl.textContent = 'New Password :';
  //       submitBtn.textContent = 'Sign Up';
  //       passConfLbl.style.display = 'flex';
  //       placeHldrConf.setAttribute = 'Confirm Password';


  //       submitBtn.textContent = 'Sign Up';

  //     }

  //   }
  // }






  // Email Validator
  /* const [emailError, setEmailError] = useState('') */
  const validateEmail = (e, cFrom) => {

    switch (cFrom) {
      case "Login":

        var email = e.target.value
        console.log("cFrom", cFrom)
    
        var valemailEl = document.getElementById('emailMessage')
    
        if (validator.isEmail(email)) {
          // setEmailError('Valid Email :)')
          // alert('Valid Email :)')
          valemailEl.innerHTML = ''
        } else {
          // setEmailError('Enter valid Email!')
          // alert('Please enter valid Email!')
          valemailEl.innerHTML = 'Invalid Email!'
    
        }
      
        case "Signup":
          // <input className='form-input' inputTest='reset' type='text' id='email-signup' placeholder='New Email' onBlur={(e) => validateEmail(e, "Signup")} />"
          var email = e.target.value
          console.log("cFrom", cFrom)
      
          var valemailEl = document.getElementById('emailSignUpMessage')
      
          if (validator.isEmail(email)) {
            // setEmailError('Valid Email :)')
            // alert('Valid Email :)')
            valemailEl.innerHTML = ''
          } else {
            // setEmailError('Enter valid Email!')
            // alert('Please enter valid Email!')
            valemailEl.innerHTML = 'Invalid Email!'
      
          }
    
    }
  }
  // Email Validator
  // $('.saveBtn').on('click', function() {
  //   // get nearby values
  //   var value = $(this)
  //     .siblings('.description')
  //     .val();
  //   var time = $(this)
  //     .parent()
  //     .attr('id');

  //   // save in localStorage
  //   localStorage.setItem(time, value);

  //   // Show notification that item was saved to localStorage by adding class 'show'
  //   $('.notification').addClass('show');

  //   // Timeout to remove 'show' class after 5 seconds
  //   setTimeout(function() {
  //     $('.notification').removeClass('show');
  //   }, 5000);
  // });






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