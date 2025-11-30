import { useState } from 'react';
import { FiBook, FiHeart, FiClock, FiTrendingUp, FiTrash2, FiX } from 'react-icons/fi';
import { useUser } from '../context/UserContext';
import { useReservations } from '../context/ReservationContext';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Dashboard.css';

const Dashboard = () => {
  const { user, extendBorrowingPeriod, removeFromWishlist, getRemainingDays } = useUser();
  const { reservations, cancelReservation } = useReservations();

  const pendingReservations = reservations.filter(res => res.status === 'pending');

  const handleExtendBorrowing = (borrowId) => {
    if (window.confirm('Do you want to extend the borrowing period by 7 days?')) {
      extendBorrowingPeriod(borrowId);
    }
  };

  const handleCancelReservation = (reservationId) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      cancelReservation(reservationId);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div className="user-greeting">
            <h1 className="dashboard-title">Welcome back, {user.name}!</h1>
            <p className="dashboard-subtitle">Manage your magical reading journey</p>
          </div>
        </div>

        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-icon">
              <FiBook />
            </div>
            <div className="stat-info">
              <div className="stat-value">{user.borrowedBooks.length}</div>
              <div className="stat-label">Currently Borrowed</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon">
              <FiHeart />
            </div>
            <div className="stat-info">
              <div className="stat-value">{user.wishlist.length}</div>
              <div className="stat-label">Wishlist Items</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon">
              <FiClock />
            </div>
            <div className="stat-info">
              <div className="stat-value">{pendingReservations.length}</div>
              <div className="stat-label">Pending Reservations</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon">
              <FiTrendingUp />
            </div>
            <div className="stat-info">
              <div className="stat-value">{user.totalBooksBorrowed}</div>
              <div className="stat-label">Total Books Read</div>
            </div>
          </Card>
        </div>

        {/* Currently Borrowed Books */}
        <section className="dashboard-section">
          <h2 className="section-title">Currently Borrowed Books</h2>
          {user.borrowedBooks.length === 0 ? (
            <Card>
              <p className="empty-state">No books currently borrowed</p>
            </Card>
          ) : (
            <div className="books-list">
              {user.borrowedBooks.map(book => {
                const remainingDays = getRemainingDays(book.dueDate);
                const isOverdue = remainingDays < 0;

                return (
                  <Card key={book.borrowId} className="borrowed-book-card">
                    <img src={book.coverImage} alt={book.title} className="book-thumbnail" />
                    <div className="book-details">
                      <h3>{book.title}</h3>
                      <p className="book-author">by {book.author}</p>
                      <div className="book-dates">
                        <div className="date-item">
                          <span className="date-label">Borrowed:</span>
                          <span className="date-value">
                            {new Date(book.borrowedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="date-item">
                          <span className="date-label">Due:</span>
                          <span className={`date-value ${isOverdue ? 'overdue' : ''}`}>
                            {new Date(book.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className={`days-remaining ${isOverdue ? 'overdue' : remainingDays <= 3 ? 'warning' : ''}`}>
                        {isOverdue ? (
                          <>Overdue by {Math.abs(remainingDays)} days</>
                        ) : (
                          <>{remainingDays} days remaining</>
                        )}
                      </div>
                    </div>
                    <div className="book-actions">
                      {book.canExtend && !isOverdue && (
                        <Button
                          size="small"
                          onClick={() => handleExtendBorrowing(book.borrowId)}
                        >
                          Extend Period
                        </Button>
                      )}
                      {!book.canExtend && (
                        <span className="extend-note">Extension used</span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </section>

        {/* Pending Reservations */}
        <section className="dashboard-section">
          <h2 className="section-title">Pending Reservations</h2>
          {pendingReservations.length === 0 ? (
            <Card>
              <p className="empty-state">No pending reservations</p>
            </Card>
          ) : (
            <div className="reservations-list">
              {pendingReservations.map(reservation => (
                <Card key={reservation.id} className="reservation-card">
                  <div className="reservation-header">
                    <div>
                      <h3>Reservation #{reservation.id.slice(-8)}</h3>
                      <p className="reservation-date">
                        Created: {new Date(reservation.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => handleCancelReservation(reservation.id)}
                      icon={<FiX />}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className="reservation-details">
                    <div className="detail-row">
                      <span>Books:</span>
                      <span>{reservation.books.length}</span>
                    </div>
                    <div className="detail-row">
                      <span>Pickup Date:</span>
                      <span>{new Date(reservation.pickupDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-row">
                      <span>Due Date:</span>
                      <span>{new Date(reservation.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="reserved-books">
                    {reservation.books.map(book => (
                      <div key={book.id} className="reserved-book-item">
                        <img src={book.coverImage} alt={book.title} />
                        <span>{book.title}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Wishlist */}
        <section className="dashboard-section">
          <h2 className="section-title">My Wishlist</h2>
          {user.wishlist.length === 0 ? (
            <Card>
              <p className="empty-state">Your wishlist is empty</p>
            </Card>
          ) : (
            <div className="wishlist-grid">
              {user.wishlist.map(book => (
                <Card key={book.id} className="wishlist-card" hover>
                  <button
                    className="remove-wishlist-btn"
                    onClick={() => removeFromWishlist(book.id)}
                    aria-label="Remove from wishlist"
                  >
                    <FiTrash2 />
                  </button>
                  <img src={book.coverImage} alt={book.title} />
                  <div className="wishlist-info">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Borrowing History */}
        <section className="dashboard-section">
          <h2 className="section-title">Borrowing History</h2>
          {user.borrowingHistory.length === 0 ? (
            <Card>
              <p className="empty-state">No borrowing history yet</p>
            </Card>
          ) : (
            <Card>
              <div className="history-list">
                {user.borrowingHistory.slice(-10).reverse().map((book, index) => (
                  <div key={`${book.id}-${index}`} className="history-item">
                    <img src={book.coverImage} alt={book.title} className="history-thumbnail" />
                    <div className="history-info">
                      <h4>{book.title}</h4>
                      <p>by {book.author}</p>
                      <span className="history-date">
                        Borrowed on {new Date(book.borrowedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
