import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2c3b7bd0-8e14-11ee-9fc3-0f51c88dc991"; // Update this to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form response was not ok');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return (
      <div className="text-md">We'll be in touch soon.</div>
    );
  }

  return (
    <form className="formCol"
      onSubmit={handleSubmit}
      action="https://public.herotofu.com/v1/2c3b7bd0-8e14-11ee-9fc3-0f51c88dc991"
      encType="multipart/form-data"
      method="POST"
      accept-charset="UTF-8"
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div>
      <button className="submitbutton" type="submit" value="Download CTA">Submit</button>
      
      </div>
    </form>
  );
};

export default ContactForm;
