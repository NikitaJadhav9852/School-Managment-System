import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';


class studentloginForm extends React.Component{
  
  handleFormSubmit = (event,requestType) =>{
    console.log("hello")
    event.preventDefault();
    const user_email = event.target.elements.user_email.value;
    const user_password = event.target.elements.user_password.value;

    console.log(user_email,user_password)

    switch(requestType){
      case 'post':
              return axios.post ('http://127.0.0.1:8000/api/signin/',{
                user_email:user_email,
                user_password:user_password
              })
              .then(res => console.log(res))
             .catch(error => console.log(error));
           }
}


render(){
  return (
<div>
<Navbar/>
<br/><br/><br/>
<div className="container">
<form onSubmit={(event) => this.handleFormSubmit(
          event,
          'post'
        )}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="user_email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="user_password" placeholder="Password"/>
  </div>
  <div className="form-group">
  <Link to='/SignUp' className="">Create New User</Link>
  </div>

  <Link to='/studentIndex'  type="submit"  className="btn btn-primary">Sign In</Link>
  &nbsp;&nbsp;
  </form>
</div>
</div>
  );
}}
export default studentloginForm;
