import React from "react";
import ContactForm from "../components/Forms/ContactForm";
import "./_Contact.scss";

const Contact = () => {
  return (
    <section className="contact-page">
      <h2>Contact</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
