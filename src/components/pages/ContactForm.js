import React, { useState, useEffect } from 'react';

// import { toast } from 'react-toastify';
import './ContactForm.css';
function ContactForm() {
  const [cform, setCform] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //const [message, setMessage] = useState("");

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0
  //   });
  // }, [])
  useEffect(() => {
    // fetch("http://localhost:8888/getDetails")
    //   .then(res =>{
    //     console.log("Test getDetails: ",res);
    //     return res.json()})
    //   .then(
    //     (result) => {
    //       setIsLoaded(false);
    //       setItems(result);
    //       console.log(result);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(false);
    //       setError(error);
    //     }
    //   )
  }, [])


  const submitForm = async (e) => {
    e.preventDefault();
    if (cform.service === "") {
      alert("Please select a service");
    } else if (!(/^[a-zA-Z ]+$/.test(cform.cname))) {
      alert("Please enter a valid name");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cform.email))) {
      alert("Please enter a valid email");
    } else if (!(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(cform.phone))) {
      alert("Please enter a valid Number");
    } else if (!cform.address) {
      alert("Please enter the Address");
    }
    // } else if (!cform.cMsg) {
    //   alert("Message is required");
    // } 
    else {
      //service call here
      try {
        let res = await fetch("http://localhost:8888/addUserDetails", {
          method: "POST",
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({
            service: cform.service,
            servicedate: cform.serviceDate,
            name: cform.name,
            phone: cform.phone,
            email: cform.email,
            address: cform.address,
            briefServiceDes: cform.message,
          }),
        });
        let resJson = await res.json();
        console.log(res.status);
        if (res.status === 200) {
          console.log("response ",res);
          setIsLoaded(true);
          setItems(res);
          return <div>{items.data}</div>;
        } else {
          setItems("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
      //alert("Your query submitted successfully.");
      console.log("cFrom ",cform);
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    console.log("Data render");
    return (
      <div className="confMessage">
      Thank you for reaching out to us. We will assign our Project manager shortly. <br></br>
        Incase of any other queries, contact +91..........
    </div>
    );
  } else {
  return (
    <div className="main">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="title mb-2">Contact Us</h2>

              <form id="contact" onSubmit={submitForm} className="contact-form mb-3">


                <h4> &nbsp; Service Details &nbsp; </h4>

                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname">Select Service</label>
                    <select className="form-control" onChange={(e) => setCform({ ...cform, service: e.target.value })} required>
                      <option value="">Select Service</option>
                      <option value="Electrical Wiring">Electrical Wiring</option>
                      <option value="Profile Installation">Profile Installation</option>
                      <option value="Chandlers Installation">Chandlers Installation</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="dateOfService">Date of Service</label>
                    <input type="date" title="Provide Date of service" onChange={(e) => setCform({ ...cform, serviceDate: e.target.value })} className="form-control" id="dateOfService" placeholder="DD/MM/YYYY" required />
                  </div>

                </div>

                <label htmlFor="cMsg">Message</label>
                <textarea className="form-control" onChange={(e) => setCform({ ...cform, message: e.target.value })} cols="30" rows="4" id="cMsg" required placeholder="Brief info about Service you want to render"></textarea>

                <h4> &nbsp; Contact Details &nbsp; </h4>

                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname">Name</label>
                    <input type="text" pattern="[A-Za-z\s]+" title="letters only" onChange={(e) => setCform({ ...cform, name: e.target.value })} className="form-control" id="cname" placeholder="Name *" required />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="cemail">Email</label>
                    <input type="email" title="Provide Valid Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setCform({ ...cform, email: e.target.value })} className="form-control" id="cemail" placeholder="Email *" required />
                  </div>
                </div>

                <div className="row">

                  <div className="col-sm-6">
                    <label htmlFor="cphone">Phone</label>
                    <input type="tel" maxLength={10} pattern="[0-9]+" title="Mobile should be only numerics" onChange={(e) => setCform({ ...cform, phone: e.target.value })} className="form-control" id="cphone" placeholder="Phone" />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="cAddress">Address</label>
                    <input type="text" pattern="^[a-zA-Z][a-zA-Z0-9-_\.\s]{5,30}$" title="Alphanumeric 6 to 30 characters only" onChange={(e) => setCform({ ...cform, address: e.target.value })} className="form-control" id="cAddress" placeholder="Address" />
                  </div>
                </div>

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
}

export default ContactForm;