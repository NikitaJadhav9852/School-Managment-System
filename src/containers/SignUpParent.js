import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
class SignUpParent extends React.Component{

render(){
  return(
    <div>
    <Navbar/>
    <br/><br/><br/>
    <div className='container'>
    <form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
          this.props.loginID
        )}>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter First Name:</label>
    <input type="text" className="form-control"  name='fname' aria-describedby="emailHelp" placeholder="Enter First Name:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Last Name:</label>
    <input type="text" className="form-control"  name='lname'aria-describedby="emailHelp" placeholder="Enter Last Name:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Mother Name:</label>
    <input type="text" className="form-control"  name='smname'aria-describedby="emailHelp" placeholder="Enter Mother Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Father Name:</label>
    <input type="text" className="form-control"  name='sfname'aria-describedby="emailHelp" placeholder="Enter Father Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Gender: </label>
    <select name ='gender' className="form-control">
    <option>Default select</option>
    <option>Male</option>
    <option>Female</option>
    </select>
    </div>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Department: </label>
        <select name ='dept' className="form-control">
        <option>Default select</option>
        <option name='compsci'>Computer Science</option>
        <option name='phy'>Physics</option>
        </select>
        </div>

        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Courses: </label>
        <select name ='course' className="form-control" disable>
        <option>Default select</option>
        <option>{this.x}</option>
        </select>
        </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Courses: </label>
                <select name ='course' className="form-control">
                <option>Default select</option>
                <option>MCA</option>
                <option>MSC</option>
                </select>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Semister: </label>
                <select name ='sem' className="form-control">
                <option>Default select</option>
                <option>Sem1</option>
                <option>Sem2</option>
                </select>
                </div>


                <div className="form-group">
    <label htmlFor="exampleInputEmail1">Subject: </label>
      <select class="custom-select" multiple>

      </select>
</div>

-

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter Last Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  name='pwd' placeholder="Password"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Birth Date:</label>
    <input type="text" className="form-control"  name='bdate' aria-describedby="emailHelp" placeholder="Birth Date:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Country:</label>
    <input type="text" className="form-control"  name='country' aria-describedby="emailHelp" placeholder="Country:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">City:</label>
    <input type="text" className="form-control"   name='city' aria-describedby="emailHelp" placeholder="City:"/>
    </div>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Address:</label>
    <textarea className="form-control" name='address' rows="3" placeholder='Address'></textarea>
      </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Phone No:</label>
    <input type="text" className="form-control"  name='contactno' aria-describedby="emailHelp" placeholder="Phone No:"/>
    </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      &nbsp;&nbsp;
      </form>
    </div>
    <br/>
    <br/><br/>
    </div>
  );
  }
}

export default SignUpParent;
