import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMoon, FiSun, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useBooks } from '../../context/BookContext';
import { useReservations } from '../../context/ReservationContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery } = useBooks();
  const { cart } = useReservations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>BookNest</h1>
          <span className="logo-subtitle">Library of Wonders</span>
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for magical books or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </form>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Catalog
          </Link>
          <Link to="/dashboard" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <button 
            className="icon-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <Link to="/cart" className="icon-btn cart-btn">
            <FiShoppingCart />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>

          <Link to="/dashboard" className="icon-btn">
            <FiUser />
          </Link>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
