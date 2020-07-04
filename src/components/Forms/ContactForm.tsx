import React from "react";
import "./_ContactForm.scss";

// Contact me
// Your name
// Your email
// A message

const Form = (props: any) => {
  return (
    <form action="#" className="contact-form">
      <div>
        <span>
          <label htmlFor="name"> Your name:</label>
          <input id="name" type="text" placeholder="Your name here"></input>
        </span>
        <span>
          <label htmlFor="email"> Your email:</label>
          <input id="email" type="text" placeholder="Your email here"></input>
        </span>
      </div>

      <label htmlFor="message"> What would you like to talk about?</label>
      <textarea
        id="message"
        placeholder="A brief description of what you're contacting about"
      ></textarea>
      <button type="submit">Send a message</button>
    </form>
  );
};

export default Form;
