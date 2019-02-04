import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminLayout =(props) => {
  return (
<div>
<Navbar/>
<br/><br/><br/>
<div className="container">
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <Link to='' type="submit" className="btn btn-primary">Sign In</Link>
  &nbsp;&nbsp;
  </form>
</div>
</div>
  );
}
export default AdminLayout;
