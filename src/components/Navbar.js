import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';
const Navbar =(props) => {
  return (
<div>
<div className="container">
<br/>
<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link scroll-link" to="/Home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link scroll-link" to="/aboutus">About Us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link scroll-link" to="/contactus">Contact Us</Link>
                </li>
  <li class="nav-item dropdown">
    <button id ='btn' class="nav-link dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Login</button>
    <div class="dropdown-menu">
      <Link class="dropdown-item" to="/studentlogin">Student</Link>
      <Link class="dropdown-item" to="/parentlogin">Parent</Link>
      <Link class="dropdown-item" to="/adminlogin">Teacher</Link>
    </div>
  </li>
  </ul>
</div>
</div>
</nav>
</div>
</div>
  );
}
export default Navbar;
