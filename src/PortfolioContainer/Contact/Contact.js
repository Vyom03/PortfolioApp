import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    // TODO: Replace these with your EmailJS credentials
    // Get these from: https://dashboard.emailjs.com/admin
    const serviceID = 'service_wvbduef';
    const templateID = 'template_rlix8hi';
    const publicKey = '0bfSSbAoEJqK4_d_B';

    // If credentials are not set, show alert with instructions
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      alert('EmailJS is not configured yet. Please set up your EmailJS credentials in Contact.js. For now, form data will be logged to console.');
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-parent">
        <div className="contact-header">
          <span className="primary-text">
            Get In <span className="highlighted-text">Touch</span>
          </span>
          <span className="contact-subtitle">
            Feel free to reach out to me for any opportunities or collaborations.
          </span>
        </div>
        <div className="contact-body">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">vyomtriv@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 9227161240</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">Ottawa, ON K2G 4K8, Canada</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn highlighted-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p style={{ color: '#0CBFAE', marginTop: '1rem', textAlign: 'center' }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#e44f4f', marginTop: '1rem', textAlign: 'center' }}>
                ✗ Failed to send message. Please try again or contact me directly at vyomtriv@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

