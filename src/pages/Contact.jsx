import { useState } from 'react';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Contact the Librarian</h1>
          <p className="page-subtitle">
            Have questions or need assistance? We're here to help with your literary journey.
          </p>
        </div>

        <div className="contact-grid">
          <Card className="contact-form-card">
            <h2 className="section-title">Send us a Message</h2>
            {submitted && (
              <div className="success-banner">
                <FiSend />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={<FiUser />}
                required
              />
              <Input
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={<FiMail />}
                required
              />
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                icon={<FiMessageSquare />}
                required
              />
              <div className="input-wrapper">
                <label className="input-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea-field"
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  required
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              <Button type="submit" variant="accent" size="large" fullWidth icon={<FiSend />}>
                Send Message
              </Button>
            </form>
          </Card>

          <div className="contact-info">
            <Card>
              <h2 className="section-title">Library Information</h2>
              <div className="info-list">
                <div className="info-block">
                  <h3>Address</h3>
                  <p>123 Magical Avenue<br />Booktown, BK 12345</p>
                </div>
                <div className="info-block">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div className="info-block">
                  <h3>Email</h3>
                  <p>librarian@booknest.com</p>
                </div>
                <div className="info-block">
                  <h3>Hours</h3>
                  <p>
                    Mon-Fri: 9:00 AM - 8:00 PM<br />
                    Sat: 10:00 AM - 6:00 PM<br />
                    Sun: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="section-title">Frequently Asked</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>How long can I borrow books?</h4>
                  <p>Books can be borrowed for 7, 14, or 21 days depending on your selection.</p>
                </div>
                <div className="faq-item">
                  <h4>Can I extend my borrowing period?</h4>
                  <p>Yes! You can extend once for 7 days if no one else has reserved the book.</p>
                </div>
                <div className="faq-item">
                  <h4>What are the late fees?</h4>
                  <p>Late fees are $2 per day per book, with a maximum of $50 per book.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
