import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs =(props) => {
  return (
<div>
  <Navbar/>
  <br/><br/><br/>
  <div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
              <form>


  <div class="row">
         <div class="col-md-6">
             <div class="form-group">
                 <label for="name">
                     Name</label>
                 <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
             </div>
             <div class="form-group">
                 <label for="email">
                     Email Address</label>
                 <div class="input-group">
                     <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                     </span>
                     <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
             </div>
             <div class="form-group">
                 <label for="subject">
                     Subject</label>
                 <select id="subject" name="subject" class="form-control" required="required">
                     <option value="na" selected="">Choose One:</option>
                     <option value="service">Complaint for Student</option>
                     <option value="product">Complaint for Parent</option>
                     <option value="suggestions">Suggestions</option>
                 </select>
             </div>
         </div>
         <div class="col-md-6">
             <div class="form-group">
                 <label for="name">
                     Message</label>
                 <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                     placeholder="Message"></textarea>
             </div>
         </div>
         <div class="col-md-12">
             <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                 Send Message</button>
         </div>
     </div>
  </form>
  </div></div></div></div>
  <Footer/>
  </div>
  );
}
export default ContactUs;
