import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="sub">Subject</label>
        <input type="text" id="sub" name="subject" />
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          rows="6"
          placeholder="Please describe the service you want me to provide for you"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
