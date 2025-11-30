import { createContext, useContext, useState, useEffect, useReducer } from 'react';

const ReservationContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservations must be used within ReservationProvider');
  }
  return context;
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.length >= 5) {
        return state;
      }
      if (state.cart.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    
    case 'CONFIRM_RESERVATION':
      const newReservation = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      return {
        ...state,
        cart: [],
        reservations: [...state.reservations, newReservation]
      };
    
    case 'CANCEL_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter(res => res.id !== action.payload)
      };
    
    case 'LOAD_RESERVATIONS':
      return {
        ...state,
        reservations: action.payload
      };
    
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, {
    cart: [],
    reservations: []
  });

  // Load reservations from localStorage on mount
  useEffect(() => {
    const savedReservations = localStorage.getItem('booknest-reservations');
    if (savedReservations) {
      try {
        const parsed = JSON.parse(savedReservations);
        dispatch({ type: 'LOAD_RESERVATIONS', payload: parsed });
      } catch (error) {
        console.error('Error loading reservations:', error);
      }
    }
  }, []);

  // Save reservations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('booknest-reservations', JSON.stringify(state.reservations));
  }, [state.reservations]);

  const addToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  const removeFromCart = (bookId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: bookId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const confirmReservation = (reservationData) => {
    dispatch({ type: 'CONFIRM_RESERVATION', payload: reservationData });
  };

  const cancelReservation = (reservationId) => {
    dispatch({ type: 'CANCEL_RESERVATION', payload: reservationId });
  };

  const isInCart = (bookId) => {
    return state.cart.some(item => item.id === bookId);
  };

  return (
    <ReservationContext.Provider
      value={{
        cart: state.cart,
        reservations: state.reservations,
        addToCart,
        removeFromCart,
        clearCart,
        confirmReservation,
        cancelReservation,
        isInCart
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
