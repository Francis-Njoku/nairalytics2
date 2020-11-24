import React from 'react';

const MessageBox = () => (
  <div className="col-md-5 contact__section">
    <h2 className="h2 contact__section__heading">Send Us A Message</h2>
    <form className="contact__form">
      <div className="form-group form__group">
        <label className="form__label" htmlFor="name">
          Name *
        </label>
        <input
          type="password"
          className="form-control form__input"
          id="name"
          required
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group form__group">
        <label className="form__label" htmlFor="emailAddress">
          Email Address *
        </label>
        <input
          type="email"
          className="form-control form__input"
          id="emailAddress"
          required
          placeholder="Enter your email address"
        />
      </div>
      <div className="form-group form__group">
        <label className="form__label" htmlFor="message">
          Your Message *
        </label>
        <textarea
          className="form-control form__input"
          id="message"
          rows="3"
          required
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn--primary">
        Submit
      </button>
    </form>
  </div>
);

 export default MessageBox;