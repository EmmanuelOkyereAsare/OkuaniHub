import React, { Component } from 'react'


export class Footer extends Component {
    render() {
        return (
            <div className="footer">

                 <p>
                <i class="fa fa-mobile"></i> <small>+233 557094626 / +233 560411541</small>&nbsp; <i class="fa fa-map-marker"></i> <small>Accra-Ghana</small> 
                </p>
                <p><small>Photos By &nbsp;<i class="fa fa-unsplash" aria-hidden="true"></i></small></p>
                <hr />
              <p>
              <small>Copyright &#169; 2020 Okuani<span class="hub">Hub</span> </small> <br />
              <small>All Rights Reserved</small>
              </p>
                 
                 
                             {/*Social media handles */}
                            <p> <i class="fa fa-facebook"></i>&nbsp; <i class="fa fa-twitter"></i>&nbsp; <i class="fa fa-instagram"></i>&nbsp; <i class="fa fa-envelope"></i></p>
                         
                        
                        
                      <br />
                    
              </div>

      
           
        )
    }
}
export default Footer;


