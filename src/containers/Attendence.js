import React from 'react';
import { Link } from 'react-router-dom';
import './back.css';
import NavLeft from '../components/NavLeft';
import StudNavBar from '../components/StudNavBar';

const Attendence =(props) => {
  return (
    <div>
    <StudNavBar/>
    <br/>
  <NavLeft/>

  </div>
  );
}
export default Attendence;
