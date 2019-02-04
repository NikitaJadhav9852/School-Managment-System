import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavLeft from '../components/NavLeft';
import StudNavBar from '../components/StudNavBar';
class UpdateProfile extends React.Component{
      state={
        logins : []
}
componentDidMount()
{
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
    this.setState({
    logins : res.data
  })
  console.log(res.data)
  })
}
render()
{
  const { logins } = this.state;
return(
  <div>
    <StudNavBar/>
    <br/>
    <NavLeft/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  {
    logins.map(login =>
  <div className='container'>
  <form onSubmit={(event) => this.handleFormUpdate(
  event,
  this.props.requestType,
  this.props.loginID
  )}>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Enter First Name:</label>
  <input type="text" className="form-control"  name='fname' aria-describedby="emailHelp" placeholder="Enter First Name:" value={login.rno}/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Enter Last Name:</label>
  <input type="text" className="form-control"  name='lname'aria-describedby="emailHelp" placeholder="Enter Last Name:" value={login.fname}/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Enter Mother Name:</label>
  <input type="text" className="form-control"  name='smname 'aria-describedby="emailHelp" placeholder="Enter Mother Name:"value={login.smname}/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Enter Father Name:</label>
  <input type="text" className="form-control"  name='sfname'aria-describedby="emailHelp" placeholder="Enter Father Name:" value={login.sfname}/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Gender: </label>
  <select name ='gender' className="form-control" value={login.gender}>
  <option>Default select</option>
  <option>Male</option>
  <option>Female</option>
  </select>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter Last Name:"value={login.email}/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputPassword1">Password</label>
  <input type="password" className="form-control"  name='pwd' placeholder="Password" value={login.pwd}/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Birth Date:</label>
  <input type="text" className="form-control"  name='bdate' aria-describedby="emailHelp" placeholder="Birth Date:"value={login.bdate}/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Country:</label>
  <input type="text" className="form-control"  name='country' aria-describedby="emailHelp" placeholder="Country:" value={login.country}/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">City:</label>
  <input type="text" className="form-control"   name='city' aria-describedby="emailHelp" placeholder="City:" value={login.city}/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Address:</label>
  <textarea className="form-control" name='address' rows="3" placeholder='Address' value={login.address}></textarea>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Phone No:</label>
  <input type="text" className="form-control"  name='contactno' aria-describedby="emailHelp" placeholder="Phone No:" value={login.contactno}/>
  </div>
  <button type="submit" className="btn btn-primary">Update  </button>
  &nbsp;&nbsp;
  </form>
  </div>
  )}
  <br/>
  </div>
);
}


}export default UpdateProfile;
