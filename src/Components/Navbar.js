import React, { Component } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state = {clicked:false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }



    render() {
   
        return (
       <div>
  
   <nav class="navbar navbar-expand-lg fixed-top">
      <Link to="/"><div class="navbar-brand" href="#"><b><span class="blend">Okuani</span><span class="hub">Hub</span></b></div></Link> 
      {/* <Link class="nav-link button"to="/SignIn" id="account_btn">Login <i class="fa fa-sign-in" aria-hidden="true"></i></Link> */}
      {/**Basket icon */}
      {/* <Link class="nav-link button"to="/SignIn"> <div class="notification">
      <div id="account_btn"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div> 
          <span class="badge">0</span></div></Link> */}
          {/** */}

       <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <div className="menu-icon"onClick={this.handleClick}>
               <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}>
               </i>
           </div>
       </div>
      
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div class="navbar-nav">
           <Link class="nav-item nav-link active" to="/">Home</Link>
           <Link class="nav-item nav-link" to="/Products">Products</Link>
           <Link class="nav-item nav-link" to="/Contact">Contact</Link>
           </div>
           </div>
        
     </nav>


           </div>
       
        )
    }
}
