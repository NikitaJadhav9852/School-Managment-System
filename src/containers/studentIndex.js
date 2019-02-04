import React from 'react';
import NavLeft from '../components/NavLeft';
import StudNavBar from '../components/StudNavBar';
import './studentIndex.css';
import Footer from '../components/Footer';

class studentIndex extends React.Component{
  render(){
    return (
      <div id='b'>
      <StudNavBar/>
      <br/>
    <NavLeft/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <div class='container'>
    <center><font id='pp'>Student Management System</font></center>
    <br/>
    <p id = 'pid'>
  The entire student life cycle from the time of admission to recruitment is well formulated and maintained in Student management system. The student information module helps to generate student id-card, various examine reports, student behavior reports etc.</p>
  <p id='pid' >Our solution provides complete automation to students and administration regarding their correlated tasks to accomplish academic goals on both the sides. Our System is a complete integrated system, which doesn’t only record information but manages every academic activity of each students.
  Real time data and easy access allow you to keep control on student’s information and record data of their each task so that organization can generate reports and assess student’s development in the organization.
  </p>
    </div>
    <Footer/>
    </div>
  );
  }
}
export default studentIndex;
