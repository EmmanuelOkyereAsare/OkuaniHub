import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Products extends  Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
    <FadeIn>
                        {/* <div class="App-header-2">
                     <div class="display-3">
                      Products
                     </div>
                     </div>
 */}

                
             
<div class="products">
                 <div class="container">
                     <div class="row">
                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Fresh Veg</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>
                         

                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1570295835271-04c05b4ed943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Beauty/Health</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>
                         

                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1537543525161-3c93d0b61d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Ready Food</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>
                         </div>
                              

                         <div class="row">
                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1498346501299-03de9c71cae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Fresh Fruit</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>

                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1526743891018-fc876a01332c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Meat</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>
                              
                         <div class="col-md-4">
                         <div class="card">
                          <img class="card-img-top" src="https://images.unsplash.com/photo-1603490826022-727da3ebfa73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                           <div class="card-body">
                          <h5 class="card-title"><b>Okuani Fish</b></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                         </div>
                         </div>

                     </div>
                     </div>
                             
                        
                       {/*Second Prodcuts column */}




               

        </div>
        </FadeIn>
        
        </div>
        )
    }
}

