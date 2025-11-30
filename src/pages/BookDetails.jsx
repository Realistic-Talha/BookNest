import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiShoppingCart, FiHeart, FiBook, FiCalendar } from 'react-icons/fi';
import { useBooks } from '../context/BookContext';
import { useReservations } from '../context/ReservationContext';
import { useUser } from '../context/UserContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById } = useBooks();
  const { addToCart, isInCart } = useReservations();
  const { addToWishlist, isInWishlist } = useUser();

  const book = getBookById(id);

  if (!book) {
    return (
      <div className="book-details-page">
        <div className="container">
          <div className="error-state">
            <h2>Book not found</h2>
            <Button onClick={() => navigate('/')}>Return to Catalog</Button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (book.availableStatus === 'Available' && !isInCart(book.id)) {
      addToCart(book);
      navigate('/cart');
    }
  };

  const handleAddToWishlist = () => {
    addToWishlist(book);
  };

  return (
    <div className="book-details-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back to Catalog
        </button>

        <div className="book-details-grid">
          <div className="book-image-section slide-in-left">
            <div className="book-image-wrapper">
              <img src={book.coverImage} alt={book.title} />
              <div className={`status-badge status-${book.availableStatus.toLowerCase()}`}>
                {book.availableStatus}
              </div>
            </div>
          </div>

          <div className="book-info-section slide-in-right">
            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">by {book.author}</p>

            <div className="book-rating-section">
              <div className="rating-display">
                {[...Array(5)].map((_, index) => (
                  <FiStar
                    key={index}
                    className={`star ${index < Math.floor(book.averageRating) ? 'filled' : ''}`}
                  />
                ))}
                <span className="rating-value">{book.averageRating.toFixed(1)}</span>
              </div>
              <span className="review-count">({book.reviews.length} reviews)</span>
            </div>

            <div className="book-details-meta">
              <div className="meta-item">
                <FiBook className="meta-icon" />
                <div>
                  <span className="meta-label">Genre</span>
                  <span className="meta-value">{book.genre}</span>
                </div>
              </div>
              <div className="meta-item">
                <FiCalendar className="meta-icon" />
                <div>
                  <span className="meta-label">Published</span>
                  <span className="meta-value">{book.publicationYear}</span>
                </div>
              </div>
            </div>

            <Card className="availability-card">
              <h3>Availability</h3>
              {book.copiesAvailable > 0 ? (
                <p className="availability-available">
                  {book.copiesAvailable} {book.copiesAvailable === 1 ? 'copy' : 'copies'} available
                </p>
              ) : book.expectedReturnDate ? (
                <p className="availability-unavailable">
                  Expected return: {new Date(book.expectedReturnDate).toLocaleDateString()}
                </p>
              ) : (
                <p className="availability-unavailable">Currently unavailable</p>
              )}
            </Card>

            <div className="action-buttons">
              <Button
                variant="accent"
                size="large"
                onClick={handleAddToCart}
                disabled={book.availableStatus !== 'Available' || isInCart(book.id)}
                icon={<FiShoppingCart />}
                fullWidth
              >
                {isInCart(book.id) ? 'Already in Cart' : 'Reserve This Book'}
              </Button>
              <Button
                variant={isInWishlist(book.id) ? 'accent' : 'secondary'}
                size="large"
                onClick={handleAddToWishlist}
                icon={<FiHeart />}
              >
                {isInWishlist(book.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
          </div>
        </div>

        <div className="book-additional-info">
          <Card>
            <h2 className="section-title">Description</h2>
            <p className="book-description">{book.description}</p>
          </Card>

          <Card>
            <h2 className="section-title">Book Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">ISBN:</span>
                <span className="info-value">{book.isbn}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Publisher:</span>
                <span className="info-value">{book.publisher}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Pages:</span>
                <span className="info-value">{book.pageCount}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Publication Year:</span>
                <span className="info-value">{book.publicationYear}</span>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="section-title">Reviews</h2>
            <div className="reviews-list">
              {book.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <span className="review-user">{review.user}</span>
                    <div className="review-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <FiStar key={i} className="star filled" />
                      ))}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
