import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './back.css';
import Jumbotron from '../components/Jumbotron';

const CustomLayout =(props) => {
  return (
<div>
  <Navbar/>
  <br/>
  <Jumbotron/>
  <Footer/>
</div>
  );
}
export default CustomLayout;
