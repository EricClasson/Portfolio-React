const Fromcontactme = () => {
  // En function som hämtar form data sparar det i en ny function och sedan printar ut det i en alert
  function formupdate(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    alert(
      `your name is :"${formJson.name}", your email is: "${formJson.email}". Your text is "${formJson.text}"`
    );
  }

  return (
    <section className="contactform-container">
      <form onSubmit={formupdate}>
        <div className="contactform-left-container">
          <div className="contactform-content">
            <label htmlFor="">Name</label>
            <input type="name" name="name" required />
          </div>

          <div className="contactform-content">
            <label htmlFor="">Email</label>
            <input name="email" type="email" size="40" required />
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
