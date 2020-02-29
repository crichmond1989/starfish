import React, { FC, useState } from "react";
import TextArea from "react-textarea-autosize";

const Address: FC = () => (
  <address>
    <p>Starfish Advocates, Inc. </p>
    <p>A Missouri Non-Profit Corporation </p>
    <p>
      <a href="tel:18166176000">(816) 617-6000</a>
    </p>
    <p>70 Garner Springs Ct., Columbia, SC 29209 </p>
  </address>
);

const Contact: FC = () => {
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = (): string | undefined => {
    if (!name) {
      return "name is required";
    }
    if (!email) {
      return "email is required";
    }
    if (!subject) {
      return "subject is required";
    }
    if (!message) {
      return "message is required";
    }
  };
  const validation = validate();

  return (
    <div id="contact-page" className="container">
      <h1>Contact</h1>
      <hr />
      <article className="columns is-multiline">
        <div className="column is-hidden-tablet is-full">
          <Address />
        </div>
        <form
          className="column"
          onSubmit={e => {
            e.preventDefault();

            // TODO: Ajax call to backend
          }}
        >
          <div className="field">
            <label className="label">
              Company
              <div className="control">
                <input className="input" type="text" value={company} onChange={e => setCompany(e.target.value)} />
              </div>
            </label>
          </div>

          <div className="field">
            <label className="label">
              Name *
              <div className="control">
                <input className="input" type="text" required value={name} onChange={e => setName(e.target.value)} />
              </div>
            </label>
          </div>

          <div className="field">
            <label className="label">
              Email *
              <div className="control">
                <input className="input" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </label>
          </div>

          <div className="field">
            <label className="label">
              Subject *
              <div className="control">
                <input className="input" type="text" required value={subject} onChange={e => setSubject(e.target.value)} />
              </div>
            </label>
          </div>

          <div className="field">
            <label className="label">
              Message *
              <div className="control">
                <TextArea className="textarea" minRows={5} required value={message} onChange={e => setMessage(e.target.value)} />
              </div>
            </label>
          </div>
          <div>
            <button className="btn-primary" disabled={!!validation} title={validation}>
              Send
            </button>
          </div>
        </form>
        <div className="column is-hidden-mobile">
          <Address />
        </div>
      </article>
    </div>
  );
};

export default Contact;
