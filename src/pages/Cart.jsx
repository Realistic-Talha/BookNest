import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrash2, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { useReservations } from '../context/ReservationContext';
import { useUser } from '../context/UserContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Modal from '../components/common/Modal';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useReservations();
  const { user } = useUser();
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.name,
    email: user.email,
    membershipId: user.membershipId,
    pickupDate: '',
    duration: '14'
  });
  const [errors, setErrors] = useState({});

  const minPickupDate = new Date();
  minPickupDate.setDate(minPickupDate.getDate() + 1);
  const minDateStr = minPickupDate.toISOString().split('T')[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.membershipId.trim()) {
      newErrors.membershipId = 'Membership ID is required';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setShowReservationModal(true);
  };

  const handleConfirmReservation = () => {
    if (!validateForm()) return;

    const reservationData = {
      ...formData,
      books: cart,
      dueDate: calculateDueDate(formData.pickupDate, parseInt(formData.duration))
    };

    navigate('/checkout', { state: { reservationData } });
    setShowReservationModal(false);
  };

  const calculateDueDate = (pickupDate, duration) => {
    const date = new Date(pickupDate);
    date.setDate(date.getDate() + duration);
    return date.toISOString();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FiShoppingCart className="empty-cart-icon" />
            <h2>Your reservation cart is empty</h2>
            <p>Discover magical books in our catalog and start your reading journey</p>
            <Button onClick={() => navigate('/')} icon={<FiArrowRight />}>
              Browse Books
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1 className="page-title">Reservation Cart</h1>
          <Button variant="danger" size="small" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map(book => (
              <Card key={book.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={book.coverImage} alt={book.title} />
                </div>
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{book.title}</h3>
                  <p className="cart-item-author">by {book.author}</p>
                  <span className="cart-item-genre">{book.genre}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(book.id)}
                  aria-label="Remove from cart"
                >
                  <FiTrash2 />
                </button>
              </Card>
            ))}
          </div>

          <Card className="cart-summary">
            <h2 className="summary-title">Reservation Summary</h2>
            <div className="summary-item">
              <span>Total Books:</span>
              <span className="summary-value">{cart.length}</span>
            </div>
            <div className="summary-item">
              <span>Maximum Limit:</span>
              <span className="summary-value">5 books</span>
            </div>
            <div className="summary-item">
              <span>Books Remaining:</span>
              <span className="summary-value">{5 - cart.length}</span>
            </div>
            
            <div className="policy-info">
              <h3>Late Return Policy</h3>
              <p>$2 per day per book after due date</p>
            </div>

            <Button
              variant="accent"
              size="large"
              fullWidth
              onClick={handleProceedToCheckout}
              icon={<FiArrowRight />}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </div>

        <Modal
          isOpen={showReservationModal}
          onClose={() => setShowReservationModal(false)}
          title="Reservation Details"
          size="medium"
        >
          <form className="reservation-form">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              required
            />
            <Input
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />
            <Input
              label="Library Membership ID"
              name="membershipId"
              value={formData.membershipId}
              onChange={handleInputChange}
              error={errors.membershipId}
              required
            />
            <Input
              type="date"
              label="Preferred Pickup Date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              error={errors.pickupDate}
              min={minDateStr}
              required
            />
            <div className="input-wrapper">
              <label className="input-label">
                Borrowing Duration <span className="required">*</span>
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="duration-select"
              >
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="21">21 days</option>
              </select>
            </div>

            <div className="form-actions">
              <Button
                variant="secondary"
                onClick={() => setShowReservationModal(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button
                variant="accent"
                onClick={handleConfirmReservation}
                type="button"
                icon={<FiArrowRight />}
              >
                Continue to Checkout
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
