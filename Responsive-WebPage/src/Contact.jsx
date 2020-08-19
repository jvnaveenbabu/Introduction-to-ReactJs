import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.FullName}
          Phone No : ${data.PhoneNumber}
          Email Id : ${data.Email}
        `);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="FullName"
                  value={data.FullName}
                  onChange={inputEvent}
                  placeholder="Enter your full Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="PhoneNumber"
                  value={data.PhoneNumber}
                  onChange={inputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="Message"
                  value={data.Message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">
                  Submit from
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
