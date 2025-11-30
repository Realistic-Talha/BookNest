import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">BookNest</h3>
          <p className="footer-desc">
            A magical library management system inspired by the greatest literary houses of wizardry.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Book Catalog</Link></li>
            <li><Link to="/dashboard">My Dashboard</Link></li>
            <li><Link to="/cart">Reservation Cart</Link></li>
            <li><Link to="/contact">Contact Librarian</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Library Hours</h4>
          <ul className="footer-info">
            <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>Sunday: 12:00 PM - 5:00 PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Email">
              <FiMail />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FiHeart className="heart-icon" /> by BookNest Team © {currentYear}
        </p>
        <p className="footer-note">All book data is for demonstration purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;
