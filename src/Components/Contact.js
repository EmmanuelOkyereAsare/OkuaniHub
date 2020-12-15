import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props){
    super(props)
    
    this.state={
      fname:"",
      emial:"",
      number:"",
      message:"",
    }
  }

  handlefnameChange =(event)=>{
    this.setState({
      fname:event.target.value
    })
  }
  
  handleemailChange = (event)=>{
    this.setState({
      emial:event.target.value
    })
  }
   

  //handlw submit function 
  handleSubmit = event =>{
   alert("Thank you " + `${this.state.fname}` + "." + " We will get back to you 😉")
   event.preventDefault()
  }
  
  
    render() {
        return (
            <div>
              <FadeIn>
          <div class="App-header-2">
             
          {/*Contact form  */}
      <div class="col-md-4">
      <form class="form1" onSubmit={this.handleSubmit}>
    <div class="container">
      <br />
      <h1><i class="fa fa-phone"></i></h1>
    <h3 className="formhead">Contact us</h3>
    <small>
        Please take a few seconds to fill out this form and we will get back to you &#128522; 
      </small>
    <br />
    <br />
    <div class="form-group">
<div class="row">
<div class="col">
  <input type="text"  value={this.state.fname} onChange={this.handlefnameChange}id="fname" class="form-control" placeholder="Full Name"
 required />
</div>
</div>
</div>


<div class="form-group">
<div class="row">
<div class="col">
  <input type="number" id="number" class="form-control" placeholder="Phone"
 required />
</div>
</div>
</div>

<div class="form-group">
<div class="row">
<div class="col">
  <input type="email" value={this.state.email}onChange={this.handleemailChange} id="email" class="form-control" placeholder="Email"
 required />
</div>
</div>
</div>


<div class="form-group">
<div class="row">
<div class="col">
  <textarea type="text"  id="message" class="form-control" placeholder="Message"maxLength="150"
/>
</div>
</div>
</div>

<button type="submit" class="button-3" >Submit <i class="fa fa-paper-plane"></i></button> 
</div>

<br/>
</form>
</div>
</div>
</FadeIn>
</div>
            
        )
    }
}
