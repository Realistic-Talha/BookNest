import { useState } from 'react';
import { useBooks } from '../context/BookContext';
import { genres, featuredBookIds } from '../data/mockData';
import { FiBookOpen, FiArrowRight } from 'react-icons/fi';
import BookCard from '../components/BookCard';
import Loading from '../components/common/Loading';
import './Home.css';

const Home = () => {
  const { filteredBooks, books, loading, selectedGenre, setSelectedGenre } = useBooks();
  const [activeTab, setActiveTab] = useState('all');

  const featuredBooks = books.filter(book => featuredBookIds.includes(book.id));
  const displayBooks = activeTab === 'featured' ? featuredBooks : filteredBooks;

  return (
    <div className="home-page">
      <section className="hero-section">
        {/* Decorative Background */}
        <div className="hero-decor">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <span className="decor-line horizontal decor-line-1"></span>
          <span className="decor-line horizontal decor-line-2"></span>
          <span className="decor-line vertical decor-line-3"></span>
          <span className="decor-line vertical decor-line-4"></span>
        </div>

        <div className="hero-container">
          <div className="hero-copy">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <FiBookOpen />
              <span>Premium Library Experience</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              <span className="line">Where Stories</span>
              <span className="line">Come <span className="accent">Alive</span></span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Discover a curated collection of timeless classics and contemporary masterpieces. 
              Your next literary adventure awaits in our exclusive collection.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a href="#catalog" className="btn btn-primary btn-large">
                Explore Collection <FiArrowRight />
              </a>
              <a href="/dashboard" className="btn btn-secondary btn-large">
                My Library
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Titles</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Genres</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="catalog-section">
        <div className="container">
          <div className="section-header">
            <div className="tabs">
              <button
                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Books
              </button>
              <button
                className={`tab ${activeTab === 'featured' ? 'active' : ''}`}
                onClick={() => setActiveTab('featured')}
              >
                Featured & New
              </button>
            </div>

            <div className="genre-filters">
              {genres.map(genre => (
                <button
                  key={genre}
                  className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="books-count">
                Showing {displayBooks.length} {displayBooks.length === 1 ? 'book' : 'books'}
              </div>

              {displayBooks.length === 0 ? (
                <div className="no-books">
                  <h3>No books found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="books-grid">
                  {displayBooks.map((book, index) => (
                    <div
                      key={book.id}
                      className="book-grid-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <BookCard book={book} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
