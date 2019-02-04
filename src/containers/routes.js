import React from 'react';
import {Route } from 'react-router-dom';
import CustomLayout from './Layout';
import StudentLayout from './studentlogin';
import ParentLayout from './parentlogin';
import AdminLayout from './adminlogin';
import AboutUs from './aboutus';
import ContactUs from './contactus';
import SignUp from './SignUp';
import SignUpParent from './SignUpParent';
import studentIndex from './studentIndex';
import UpdateProfile from './UpdateProfile';
import Attendence from './Attendence';
import News from './News';
import Exam from './Exam';
import Fees from './Fees';

const BaseRouter = () => (
  <div>
      <Route exact path ="/" component={CustomLayout}/>
      <Route exact path ="/studentlogin" component={StudentLayout}/>
      <Route exact path='/SignUp' component={SignUp}/>
      <Route exact path ="/Home" component={CustomLayout}/>
      <Route exact path ="/parentlogin" component={ParentLayout}/>
      <Route exact path ="/adminlogin" component={AdminLayout}/>
      <Route exact path ="/aboutus" component={AboutUs}/>
      <Route exact path ="/contactus" component={ContactUs}/>
      <Route exact path ="/SignUpParent" component={SignUpParent}/>
      <Route exact path ="/studentIndex" component={studentIndex}/>
      <Route exact path ="/UpdateProfile" component={UpdateProfile}/>
      <Route exact path ="/Attendence" component={Attendence}/>
      <Route exact path ="/News" component={News}/>
      <Route exact path ="/Exam" component={Exam}/>
      <Route exact path ="/Fees" component={Fees}/>

  </div>
);
export default BaseRouter;
