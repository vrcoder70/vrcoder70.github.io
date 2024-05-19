import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      subject: subject,
      body: body,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setSubject('');
        setBody('');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          className="form-control"
          id="body"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Send</button>
    </form>
  );
};

export default ContactForm;
