import React, { useRef } from "react";
import { Footer, Navbar } from "../components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"; 

const ContactPage = () => {
  const form = useRef();

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y7ftmea", "template_bfgr2ve", form.current, {
        publicKey: "wnC2F5L7rbX7JjGGS",
      })
      .then(
        () => {
          
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
        },
        (error) => {
          
          toast.error(`Failed to send message: ${error.text}`, {
            position: "top-center",
          });
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="from_name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="from_email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  name="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
