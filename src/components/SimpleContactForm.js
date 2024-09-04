// src/components/SimpleContactForm.js
import React from 'react';
import emailjs from 'emailjs-com';

function SimpleContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message.');
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="email" name="user_email" placeholder="Enter email" required />
      <textarea name="message" placeholder="Enter message" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleContactForm;
