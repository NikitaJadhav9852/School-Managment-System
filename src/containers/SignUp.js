import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
class SignUpForm extends React.Component{
  handleFormSubmit = (event,requestType) =>{
    event.preventDefault();
    const roll_no = event.target.elements.roll_no.value;
    const first_name = event.target.elements.first_name.value;
    const last_name = event.target.elements.last_name.value;
    const father_name = event.target.elements.father_name.value;
    const mother_name = event.target.elements.mother_name.value;
    const gender = event.target.elements.gender.value;
    const student_email = event.target.elements.student_email.value;
    const password = event.target.elements.password.value;
    const country = event.target.elements.country.value;
    const city = event.target.elements.city.value;
    const bdate = event.target.elements.bdate.value;
    const contactno = event.target.elements.contactno.value;
    const address = event.target.elements.address.value;
    console.log(roll_no,first_name,last_name,father_name,mother_name,bdate,student_email,password,gender,country,city,address,contactno)


    switch(requestType){
      case 'post':
              return axios.post('http://127.0.0.1:8000/api/register/',{
                roll_no : roll_no,
                first_name : first_name,
                last_name : last_name,
                father_name : father_name,
                mother_name : mother_name,
                bdate:bdate,
                student_email:student_email,
                password:password,
                gender:gender,
                country:country,
                city:city,
                address:address,
                contactno:contactno
              })
              .then(res => console.log(res))
             .catch(error => console.log(error));
           }
}
render(){
  return(
    <div>
    <Navbar/>
    <br/><br/><br/>
    <div className='container'>
    <form onSubmit={(event) => this.handleFormSubmit(
          event,
          'post'
        )}>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Roll No:</label>
    <input type="text" className="form-control"  name='roll_no' aria-describedby="emailHelp" placeholder="Enter First Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter First Name:</label>
    <input type="text" className="form-control"  name='first_name' aria-describedby="emailHelp" placeholder="Enter First Name:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Last Name:</label>
    <input type="text" className="form-control"  name='last_name'aria-describedby="emailHelp" placeholder="Enter Last Name:"/>
    </div>

    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Mother Name:</label>
    <input type="text" className="form-control"  name='mother_name'aria-describedby="emailHelp" placeholder="Enter Mother Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Father Name:</label>
    <input type="text" className="form-control"  name='father_name'aria-describedby="emailHelp" placeholder="Enter Father Name:"/>
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
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name='student_email' aria-describedby="emailHelp" placeholder="Enter Last Name:"/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  name='password' placeholder="Password"/>
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
      <button type="submit"  className="btn btn-primary" >Sign Up</button>
      &nbsp;&nbsp;
      </form>
      <br/>
    </div>
    </div>
  );
  }
}

export default SignUpForm;
