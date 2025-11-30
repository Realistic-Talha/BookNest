import { useNavigate } from 'react-router-dom';
import { FiStar, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useReservations } from '../context/ReservationContext';
import { useUser } from '../context/UserContext';
import Button from './common/Button';
import './BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useReservations();
  const { addToWishlist, isInWishlist } = useUser();

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (book.availableStatus === 'Available') {
      addToCart(book);
    }
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(book);
  };

  const getStatusClass = () => {
    switch (book.availableStatus) {
      case 'Available':
        return 'status-available';
      case 'Reserved':
        return 'status-reserved';
      case 'Borrowed':
        return 'status-borrowed';
      default:
        return '';
    }
  };

  return (
    <div className="book-card" onClick={handleCardClick} data-title={book.title}>
      <div className="book-card-image">
        <img src={book.coverImage} alt={book.title} />
      </div>
      
      <h3 className="book-title-preview">{book.title}</h3>
      <p className="book-author-preview">by {book.author}</p>
      
      <div className={`book-status ${getStatusClass()}`}>
        {book.availableStatus}
      </div>
      
      <button
        className={`wishlist-btn ${isInWishlist(book.id) ? 'active' : ''}`}
        onClick={handleAddToWishlist}
        aria-label="Add to wishlist"
      >
        <FiHeart />
      </button>

      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        
        <div className="book-meta">
          <span className="book-genre">{book.genre}</span>
          <div className="book-rating">
            <FiStar className="star-icon" />
            <span>{book.averageRating.toFixed(1)}</span>
          </div>
        </div>

        <div className="book-copies">
          {book.copiesAvailable > 0 ? (
            <span className="copies-available">
              {book.copiesAvailable} {book.copiesAvailable === 1 ? 'copy' : 'copies'} available
            </span>
          ) : (
            <span className="copies-unavailable">No copies available</span>
          )}
        </div>

        <Button
          variant={isInCart(book.id) ? 'secondary' : 'accent'}
          size="small"
          fullWidth
          onClick={handleAddToCart}
          disabled={book.availableStatus !== 'Available' || isInCart(book.id)}
          icon={<FiShoppingCart />}
        >
          {isInCart(book.id) ? 'In Cart' : 'Reserve Now'}
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
