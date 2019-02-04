import React from 'react';
import { Link } from 'react-router-dom';
import'./NavLeft.css';

const NavLeft =(props) => {
  return (
<div>
<div class ='container'>
<Link class="btn-change1" to='/UpdateProfile'>Update Profile</Link>
<Link class="btn-change2" to = '/News'>News</Link>
<Link class="btn-change3" to ='/Attendence'>Attendence</Link>
<Link class="btn-change4" to = '/Exam'>Exam </Link>
<Link class="btn-change5" to = '/Fees'>Fees</Link>
</div>
</div>
);
}
export default NavLeft;
