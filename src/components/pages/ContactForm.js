import React, { useState, useEffect } from 'react';

// import { toast } from 'react-toastify';
import './ContactForm.css';
function ContactForm() {
  const [cform, setCform] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [])

  const submitForm = (e) => {
    e.preventDefault();
    if (cform.service === "") {
      alert("Please select a service");
    } else if (!(/^[a-zA-Z ]+$/.test(cform.cname))) {
      alert("Please enter a valid name");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cform.email))) {
      alert("Please enter a valid email");
    } else if (!(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(cform.phone))) {
      alert("Please enter a valid Number");
    } else if (!cform.Address) {
      alert("Please enter the Address");
    } else if (!cform.cMsg) {
      alert("Message is required");
    } else {
      //service call here
      alert("Your query submitted successfully.");
      console.log(cform);
    }
  }


  return (
    <div className="main">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="title mb-2">Contact Us</h2>

              <form id="contact" onSubmit={submitForm} className="contact-form mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname" className="sr-only">Select Service</label>
                    <select className="form-control" onChange={(e) => setCform({ ...cform, service: e.target.value })} required>
                      <option value="">Select Service</option>
                      <option value="Wiring">Wiring</option>
                      <option value="Profile Installation">Profile Installation</option>
                      <option value="Chandlers Installation">Chandlers Installation</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname" className="sr-only">Name</label>
                    <input type="text" pattern="[A-Za-z\s]+" title="letters only" onChange={(e) => setCform({ ...cform, cname: e.target.value })} className="form-control" id="cname" placeholder="Name *" required />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="cemail" className="sr-only">Email</label>
                    <input type="email" title="Provide Valid Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setCform({ ...cform, email: e.target.value })} className="form-control" id="cemail" placeholder="Email *" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cphone" className="sr-only">Phone</label>
                    <input type="tel" maxLength={10} pattern="[0-9]+" title="Mobile should be only numerics" onChange={(e) => setCform({ ...cform, phone: e.target.value })} className="form-control" id="cphone" placeholder="Phone" />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="cAddress" className="sr-only">Address</label>
                    <input type="text" pattern="^[a-zA-Z][a-zA-Z0-9-_\.\s]{5,30}$" title="Alphanumeric 6 to 30 characters only" onChange={(e) => setCform({ ...cform, Address: e.target.value })} className="form-control" id="cAddress" placeholder="Address" />
                  </div>
                </div>

                <label htmlFor="cMsg" className="sr-only">Message</label>
                <textarea className="form-control" onChange={(e) => setCform({ ...cform, message: e.target.value })} cols="30" rows="4" id="cMsg" required placeholder="Brief About Service"></textarea>

                <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                  <span>SUBMIT</span>
                </button>
              </form>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default ContactForm;