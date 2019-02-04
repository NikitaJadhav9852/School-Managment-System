import React from 'react';
import { Link } from 'react-router-dom';

const StudNavBar =(props) => {
  return (
<div>
<div className="container">
<br/>
<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
    <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link scroll-link" to="/studentIndex">Home</Link>
                </li>
  <li class="nav-item dropdown">
    <button id ='btn' class="nav-link dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Stud_Name</button>
    <div class="dropdown-menu">
      <Link class="dropdown-item" to="/studentlogin">Logout</Link>
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
export default StudNavBar;
