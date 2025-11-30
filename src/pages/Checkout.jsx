import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { FiCheckCircle, FiCalendar, FiUser, FiMail } from 'react-icons/fi';
import { useReservations } from '../context/ReservationContext';
import { useBooks } from '../context/BookContext';
import { useUser } from '../context/UserContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { confirmReservation, clearCart } = useReservations();
  const { updateBookStatus } = useBooks();
  const { addToBorrowedBooks } = useUser();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationId, setReservationId] = useState('');

  const reservationData = location.state?.reservationData;

  useEffect(() => {
    if (!reservationData) {
      navigate('/cart');
    }
  }, [reservationData, navigate]);

  if (!reservationData) {
    return null;
  }

  const handleConfirmReservation = () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    const resId = `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setReservationId(resId);

    // Update book statuses
    reservationData.books.forEach(book => {
      updateBookStatus(book.id, 'Reserved', -1);
      addToBorrowedBooks(
        book,
        reservationData.pickupDate,
        reservationData.dueDate,
        parseInt(reservationData.duration)
      );
    });

    confirmReservation({ ...reservationData, reservationId: resId });
    clearCart();
    setIsConfirmed(true);

    // Scroll to top to show confirmation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isConfirmed) {
    return (
      <div className="checkout-page">
        <div className="container">
          <Card className="confirmation-card slide-up">
            <div className="confirmation-header">
              <div className="success-icon">
                <FiCheckCircle />
              </div>
              <h1 className="confirmation-title">Reservation Confirmed!</h1>
              <p className="confirmation-subtitle">
                Your magical books are reserved and waiting for you
              </p>
            </div>

            <div className="confirmation-details">
              <div className="detail-item">
                <span className="detail-label">Reservation ID:</span>
                <span className="detail-value">{reservationId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pickup Date:</span>
                <span className="detail-value">
                  {new Date(reservationData.pickupDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Due Date:</span>
                <span className="detail-value">
                  {new Date(reservationData.dueDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Books:</span>
                <span className="detail-value">{reservationData.books.length}</span>
              </div>
            </div>

            <div className="qr-section">
              <h3>Pickup QR Code</h3>
              <p className="qr-instruction">Present this QR code at the library to collect your books</p>
              <div className="qr-code-wrapper">
                <QRCodeCanvas
                  value={JSON.stringify({
                    reservationId,
                    membershipId: reservationData.membershipId,
                    pickupDate: reservationData.pickupDate,
                    books: reservationData.books.map(b => b.id)
                  })}
                  size={200}
                  level="H"
                  includeMargin
                />
              </div>
            </div>

            <div className="confirmation-message">
              <p>
                📧 A confirmation email has been sent to <strong>{reservationData.email}</strong>
              </p>
              <p className="reminder-text">
                Please collect your books by the pickup date. Uncollected reservations will be cancelled after 2 days.
              </p>
            </div>

            <div className="confirmation-actions">
              <Button onClick={() => navigate('/dashboard')} variant="accent" size="large">
                View My Dashboard
              </Button>
              <Button onClick={() => navigate('/')} variant="secondary" size="large">
                Browse More Books
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>

        <div className="checkout-grid">
          <div className="checkout-main">
            <Card>
              <h2 className="section-title">Reservation Summary</h2>
              <div className="books-summary">
                {reservationData.books.map(book => (
                  <div key={book.id} className="summary-book-item">
                    <img src={book.coverImage} alt={book.title} className="summary-book-image" />
                    <div className="summary-book-info">
                      <h4>{book.title}</h4>
                      <p>by {book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="section-title">Late Return Policy</h2>
              <div className="policy-details">
                <p><strong>Standard fine:</strong> $2 per day per book</p>
                <p><strong>Grace period:</strong> None</p>
                <p><strong>Maximum fine:</strong> $50 per book</p>
                <p className="policy-note">
                  Please return books on time to avoid fines and ensure availability for other readers.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="section-title">Terms and Conditions</h2>
              <div className="terms-content">
                <ul>
                  <li>Books must be collected by the specified pickup date</li>
                  <li>Uncollected reservations will be automatically cancelled after 2 days</li>
                  <li>Books must be returned by the due date to avoid late fees</li>
                  <li>Lost or damaged books must be reported immediately</li>
                  <li>Library membership must be active to borrow books</li>
                  <li>Maximum 5 books can be borrowed at a time</li>
                  <li>One-time extension of 7 days is available (if no one else has reserved the book)</li>
                </ul>
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="checkbox-input"
                />
                <span>I have read and accept the terms and conditions</span>
              </label>
            </Card>
          </div>

          <div className="checkout-sidebar">
            <Card className="reservation-info-card">
              <h2 className="section-title">Your Information</h2>
              <div className="info-item">
                <FiUser className="info-icon" />
                <div>
                  <div className="info-label">Name</div>
                  <div className="info-value">{reservationData.fullName}</div>
                </div>
              </div>
              <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">{reservationData.email}</div>
                </div>
              </div>
              <div className="info-item">
                <FiCalendar className="info-icon" />
                <div>
                  <div className="info-label">Pickup Date</div>
                  <div className="info-value">
                    {new Date(reservationData.pickupDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="info-item">
                <FiCalendar className="info-icon" />
                <div>
                  <div className="info-label">Due Date</div>
                  <div className="info-value">
                    {new Date(reservationData.dueDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="total-summary">
                <div className="total-item">
                  <span>Total Books:</span>
                  <span className="total-value">{reservationData.books.length}</span>
                </div>
                <div className="total-item">
                  <span>Duration:</span>
                  <span className="total-value">{reservationData.duration} days</span>
                </div>
              </div>

              <Button
                variant="accent"
                size="large"
                fullWidth
                onClick={handleConfirmReservation}
                disabled={!termsAccepted}
              >
                Confirm Reservation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
