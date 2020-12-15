import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default class Signup extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
    render() {
        return (
          <FadeIn>
            <div>
                  <div class="App-header-2">
             
             {/*signUp form  */}
         <div class="col-md-6">
         <form class="form1" method="post"action="/UserAcc">
       <div class="container">
         <br />
         <h1><i class="fa fa-user-plus"></i></h1>
       <h3 className="formhead">Create Account</h3>
       <small>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
           velit explicabo iste quibusdam, incidunt impedit.
         </small>
       <br />
       <br />
       <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="text"  id="fname" class="form-control" placeholder="First Name"
    required />
   </div>
   </div>
   </div>

   <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="lname"  id="lname" class="form-control" placeholder="Last Name"
    required />
   </div>
   </div>
   </div>

   <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="number"  id="number" class="form-control" placeholder="Phone"
    required />
   </div>
   </div>
   </div>

   <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="text"  id="location" class="form-control" placeholder="Location"
    required />
   </div>
   </div>
   </div>


   <div class="form-group">
   <div class="row">
   <div class="col">
   <select class="custom-select" id="inputGroupSelect01">
    <option selected>Select Role</option>
    <option value="1">Farmer</option>
    <option value="2">Sales</option>
    <option value="3">Consumer</option>
  </select>
   
   </div>
   </div>
   </div>

 <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="email"  id="email" class="form-control" placeholder="Email"
    required />
   </div>
   </div>
   </div>
   
   <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="Password"  id="password" class="form-control" placeholder="Password"
    required />
   </div>
   </div>
   </div>

   <div class="form-group">
   <div class="row">
   <div class="col">
     <input type="Password"  id="password" class="form-control" placeholder="Re-enter Password"
    required />
   </div>
   </div>
   </div>
      
 

   


 <button type="submit" class="button-3" >Register <i class="fa fa-pencil"></i></button> 
   </div>
   <br/>
   <small>I already have an account <Link to="/SignIn">Login</Link></small>
   <br/>
   <br/>
</form>
</div>
           </div>
            </div>
            </FadeIn>
        )
    }
}
