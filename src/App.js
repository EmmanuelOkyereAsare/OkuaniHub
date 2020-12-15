import React from 'react';
// import logo from './logo.svg';



import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
 import Footer from './Components/Footer';
import Signup from './Components/Signup';
import UserAcc from './Components/UserAcc';
import Products from './Components/Products';
import Contact from './Components/Contact';
import FadeIn from 'react-fade-in';
import SignIn from './Components/SignIn'


function App() {
  return (
    <div>
    
      <Router>
      <Navbar />
      <FadeIn>
     <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Signup"component={Signup} />
        <Route path="/UserAcc"component={UserAcc} />
        <Route path="/Products"component={Products} />
        <Route path="/Contact"component={Contact} />
        <Route path="/SignIn"component={SignIn} />
      </Switch>
     </FadeIn>
     <Footer />
     </Router>
   
     </div>

 
  );
}

export default App;
