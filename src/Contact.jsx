import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email:"",
        msg: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });

};
const formSubmit = () => {};
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto ">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" name="firstname" value={data.firstname} onChange={inputEvent} placeholder="Enter your first name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" name="lastname" value={data.lastname} onChange={inputEvent} placeholder="Enter your last name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={inputEvent} placeholder="Enter password" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phonenumber" value={data.phonenumber} onChange={inputEvent} placeholder="Enter your Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
</div>

<div class="col-12">
    <button class="btn btn-primary" className="nine" type="submit">Submit</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        </>
    );
};

export default Contact;
