import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FadeIn from 'react-fade-in';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBN2eiqO5I16IG29E4cDGgmWjWEZJVu-hE",
  authDomain: "okuanihub.firebaseapp.com"
})

export default class SignIn extends Component {

 
  state = { isSignedIn: false }
  uiConfig ={
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess: () => false 
    }
  }
  
  componentDidMount =()=>{
    window.scrollTo(0, 0);
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})
    })
  }

 
    render() {
        return (
             <div>
             
              <FadeIn>
                 <div class="App-header-2">
                 <div class="col-md-6">
         {/**Sign In Form */}
        <form class="form1" method="post"action="/UserAcc">
        <h1><i class="fa fa-user" aria-hidden="true"></i></h1>
          <h4> Sign In&nbsp;<i class="fa fa-sign-in"></i></h4> 
        
          <br />
          <div class="container">
    <div class="form-group">
      {/* <label for="email">Email:</label> */}
      <input type="email" class="form-control" id="email" placeholder="Enter email " name="email" required />
    </div>
    <div class="form-group">
      {/* <label for="pwd">Password:</label> */}
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
    </div>
    </div>
 
     
    <div>
    <p>&#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014; <i>OR</i>   &#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014; <br/>
    <small>Log in with the following</small></p>
    </div>
    {this.state.isSignedIn ? (
      <span>
      <div>Signed In!</div>
      <button class="button-3" onClick={()=>firebase.auth().signOut()}>Sign Out </button>
    <h1>{firebase.auth().currentUser.displayName}</h1>
      </span>
    ) : (
      <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}
      />
    )}
         
   

    <br/>
<br/>

    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>

    <div>
    <button class="button-3"type="submit" >Login <i class="fa fa-sign-in"></i></button> <br />
    </div>
    <br />
       <small>Don't have an account? <Link to="/Signup"> Sign Up</Link></small>
      <br/>
      <br/>
  </form>
  </div>
  </div>
  </FadeIn>
            </div>
        )
    }
}
