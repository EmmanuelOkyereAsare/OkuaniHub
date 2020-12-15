import React, { Component } from 'react'
// import veg from '../images/tomatoveg-1.png';
import { Link, } from "react-router-dom"
import FadeIn from 'react-fade-in';

export default class landing extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
   
    render() {
     
        return (
          
            <div>
                {/**Intro */}
               <FadeIn>
      <header className="App-header">
        <div className="intro">
          <h1 class="display-5">Enjoy</h1>
       <h1 class="display-4">Okuani<span class="hub">Hub</span></h1>
        
            <div class="container">
        <p class="pageintro"> Okuanihub brings the farm to your doorstep, making being able to havest crops
        easier. We make farming easy, buying and selling also easy for farmers,
         consumers and owned sales business companies... <br />
         <br />
         <div>
        
          <Link
              activeClass="active"
              to="/Products"
                spy={true}
               smooth={true}
               offset={-40}
                duration={500}
        ><button class="button-2"><i class="fa fa-info-circle" aria-hidden="true"></i> Products</button></Link>&nbsp;&nbsp; <Link to ="/SignIn"><button class="button-1">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button></Link>
          </div>
          </p>
          </div>
          <div> 
          </div>   
          </div>
          <br />
          <br />
                    <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}><h2><i class="fa fa-angle-double-down"></i></h2></Link>
                  <br />
              </header>

                  <div id="section1">&nbsp; </div>
                    
                {/**Content */}
                <hr/>
                <br />
                <div class="container">
                    <h1 class="display-5">About Us</h1>
                  <p class="intro-2">Lorem ipsum, or lipsum as it is sometimes known, is 
                dummy text used in laying out print, graphic or web designs.
                  The passage is attributed to an unknown typesetter in the
                  15th century who is thought to have scrambled parts of Cicero's
                  De Finibus Bonorum et Malorum for use in a type specimen book.
                  The passage is attributed to an unknown typesetter in the
                  15th century who is thought to have scrambled parts of Cicero's</p>
                  </div>
                  <br />

                {/**Icons */}

                  <div class="container">
                       <div class="row">
                         <div class="col-md-6">
                           <h1> <i class="fa fa-signal"></i> </h1> 
                             <h3>Fast</h3>
                           <p>  The passage is attributed to an unknown typesetter in the
                  15th century who is thought to have scrambled parts of Cicero's
                  De Finibus Bonorum et Malorum for use in a type specimen book.
                  The passage is attributed to an unknown typesetter in the</p>
                         </div>
                            <br />
                       
                         <div  class="col-md-6">
                           <h1> <i class="fa fa-star"></i> </h1> 
                           <h3>Reliable</h3>
                           <p>  The passage is attributed to an unknown typesetter in the
                  15th century who is thought to have scrambled parts of Cicero's
                  De Finibus Bonorum et Malorum for use in a type specimen book.
                  The passage is attributed to an unknown typesetter in the</p>
                         </div>


                       </div>
                    </div>
                </FadeIn>
                </div>
                
                
                
              
                  )
              }
          
          }
