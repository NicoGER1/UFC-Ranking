import { useState } from "react";
import "../styles/ContactForm.css";

const ContactFrom = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <div>
      <h1 className="formTitle">
        Feel free to contact me for any request or suggestion
      </h1>
      <form
        className="form-container"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="name-container"
          required
          placeholder="Name"
          name="lastName"
          value={contactForm.lastName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="firstname-container"
          required
          placeholder="Firstname"
          name="firstName"
          value={contactForm.firstName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="mail-container"
          required
          placeholder="Mail"
          name="email"
          value={contactForm.email}
          onChange={(e) => handleChangeForm(e)}
        />

        <textarea
          required
          className="textarea-container"
          placeholder="Your message"
          name="message"
          id="messagearea"
          cols="3"
          rows="10"
          value={contactForm.message}
          onChange={(e) => handleChangeForm(e)}
        />

        <button className="button" type="submit">
          Send your request
        </button>
      </form>
    </div>
  );
};
export default ContactFrom;
