import React, { Component } from 'react'
import {
 
  Link
} from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div>
         <footer class="footer">

<div class="footer__container container">

    <h1 class="footer__title">NewsBook</h1>
   <div className="divide">
     
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 footer__list">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link" to="/general">General</Link>
        </li>
        
        
         </ul>
         <ul className="navbar-nav  me-auto mb-2 mb-lg-0  footer__list">
        
       
        <li className="nav-item footer__title">
         Amit kumar
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="mailto:guptaajuju1995@example.com">guptaajuju1995@gmail.com</Link>
          
        </li>
      
        
         </ul>
         <ul className="navbar-nav  footer__list">
        
       
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer__link"  to="/sports">Sports</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link footer__link"  to="/technology">Technology</Link>
        </li>
        
         </ul>
   </div>
    <ul class="footer__social">
        <Link to="https://www.facebook.com/profile.php?id=100042228489234"  class="footer__social-link">
            <i class='bx bxl-facebook'></i>
        </Link>
        <Link to="https://www.instagram.com/to.amit_gupta/"  class="footer__social-link">
            <i class='bx bxl-instagram'></i>
        </Link>
        <Link  to="https://twitter.com/Amit72940285"  class="footer__social-link">
            <i class='bx bxl-twitter'></i>
        </Link>
    </ul>

    <span class="footer__copy">
    © newsbook. All rights reserved
    </span>
</div>

</footer>
      </div>
    )
  }
}
