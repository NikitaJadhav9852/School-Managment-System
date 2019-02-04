import React from 'react';
import axios from 'axios';
import SignUpForm from './SignUp';
import studentlogin from './studentlogin'
import Navbar from '../components/Navbar';

class mainSignUp extends React.Component{
  state={
    logins : []
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          logins : res.data
        })
        console.log(res.data)
      })
  }
  render(){
    return(
      <div>
        <SignUpForm
        event
        requestType='post'
        btnType='Sign Up'
        />
      </div>
    );
  }
}

export default mainSignUp;
