const Fromcontactme = () => {
  return (
    <section className="contactform-container">
      <div className="contactform-left-container">
        <div className="contactform-content">
          <label htmlFor="">Name</label>
          <input type="name" />
        </div>

        <div className="contactform-content">
          <label htmlFor="">Email</label>
          <input type="email" size="40" />
        </div>
      </div>
      <div className="contactform-right-container">
        <div className="contactform-content">
          <label htmlFor="">Message</label>
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            placeholder="Write your message here"
          ></textarea>
        </div>

        <div className="contactform-Btn-content">
          <button className="btn btn-contactform">Send email!</button>
        </div>
      </div>
    </section>
  );
};

export default Fromcontactme;
