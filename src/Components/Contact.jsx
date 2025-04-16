import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_w3ggdnl", "template_s8mhtuf", form.current, {
        publicKey: "FdtML6koZh6RJgqaC",
      })
      .then(() => {
        alert("✅ Message sent!");
        form.current.reset();
        setIsSending(false);
      })
      .catch((error) => {
        alert("❌ Message failed to send. Please try again.");
        console.log("FAILED...", error.text);
        setIsSending(false);
      });
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="header-section d-flex align-items-center justify-content-center text-center"
        style={{ width: "100%", height: "300px", position: "relative" }}
      >
        <img
          src="/assets/AP luxury/img/bg-banner.jpg"
          alt="Header"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 className="display-3 text-uppercase mb-3">
            Your Dream Car Awaits
          </h1>
          <div className="d-inline-flex">
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">Connect With Us!</h6>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Contact Us
          </h1>
          <div className="row">
            {/* Form */}
            <div className="col-lg-7 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control p-4"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control p-4"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control p-4"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control py-3 px-4"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5 mb-2">
              <div
                className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
                style={{ height: "435px" }}
              >
                <ContactInfo
                  icon="fa-map-marker-alt"
                  title="Head Office"
                  details="Ahwodwo RDT., Kumasi, Ghana"
                />
                <ContactInfo
                  icon="fa-map-marker-alt"
                  title="Branch Office"
                  details="Ahwodwo, Kumasi, Ghana"
                />
                <ContactInfo
                  icon="fa-envelope-open"
                  title="Customer Service"
                  details="customer@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, details }) => {
  return (
    <div className="d-flex mb-3">
      <i className={`fa fa-2x ${icon} text-primary flex-shrink-0 mr-3`}></i>
      <div className="mt-n1">
        <h5 className="text-light">{title}</h5>
        <p className="m-0">{details}</p>
      </div>
    </div>
  );
};

export default Contact;
