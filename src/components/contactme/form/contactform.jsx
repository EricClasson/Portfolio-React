import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Fromcontactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const forms = e.target;

    const formData = new FormData(forms);

    const formJson = Object.fromEntries(formData.entries()); // A function that collects the form data and then prints in a alert down below

    // function that sends an email to my serivce id in emailjs that then sends it to my email adress
    emailjs.sendForm(
      "service_bcthp46",
      "template_2nr5p3o",
      form.current,
      "huFLQyXRXhoJ-Uvot"
    );
    alert(
      `Your Eamil is sent from: "${formJson.user_email}" with the text: "${formJson.message}", i will get back to you as soon as possible.`
    );
    e.target.reset();
  };

  return (
    <section>
      <form className="contactform-container" ref={form} onSubmit={sendEmail}>
        <div className="contactform-left-container">
          <div className="contactform-content">
            <label htmlFor="">Name</label>
            <input type="name" name="user_name" required />
          </div>

          <div className="contactform-content">
            <label htmlFor="">Email</label>
            <input name="user_email" type="email" size="40" required />
          </div>
        </div>
        <div className="contactform-right-container">
          <div className="contactform-content">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="8"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <div className="contactform-Btn-content">
            <button className="btn btn-contactform" type="submit">
              Send email!
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Fromcontactme;
