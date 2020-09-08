import React, { useState } from "react";

const Contact = ({ data, translate }) => {
  const [url, setUrl] = useState(
    "mailto:test@example.com?subject=subject&body=body"
  );
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  {translate && translate._name}{" "}
                  <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  {translate && translate._email}{" "}
                  <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  {translate && translate._subject}
                </label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  {translate && translate._message}{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button className="submit">
                  {translate && translate._submit}
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> {translate && translate._err}</div>
          <div id="message-success">
            <i className="fa fa-check"></i>
            {translate && translate._sent}
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>{translate && translate._addndphone}</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
