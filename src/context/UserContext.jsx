import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('booknest-user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Hermione Granger',
      email: 'hermione.granger@hogwarts.edu',
      membershipId: 'LIB-2025-001',
      borrowedBooks: [],
      wishlist: [],
      borrowingHistory: [],
      totalBooksBorrowed: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('booknest-user', JSON.stringify(user));
  }, [user]);

  const addToBorrowedBooks = (book, pickupDate, dueDate, duration) => {
    const borrowedBook = {
      ...book,
      borrowId: Date.now().toString(),
      pickupDate,
      dueDate,
      duration,
      borrowedAt: new Date().toISOString(),
      canExtend: true
    };

    setUser(prev => ({
      ...prev,
      borrowedBooks: [...prev.borrowedBooks, borrowedBook],
      borrowingHistory: [...prev.borrowingHistory, borrowedBook],
      totalBooksBorrowed: prev.totalBooksBorrowed + 1
    }));
  };

  const extendBorrowingPeriod = (borrowId) => {
    setUser(prev => ({
      ...prev,
      borrowedBooks: prev.borrowedBooks.map(book =>
        book.borrowId === borrowId
          ? {
              ...book,
              dueDate: new Date(new Date(book.dueDate).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              canExtend: false
            }
          : book
      )
    }));
  };

  const returnBook = (borrowId) => {
    setUser(prev => ({
      ...prev,
      borrowedBooks: prev.borrowedBooks.filter(book => book.borrowId !== borrowId)
    }));
  };

  const addToWishlist = (book) => {
    setUser(prev => {
      if (prev.wishlist.find(item => item.id === book.id)) {
        return prev;
      }
      return {
        ...prev,
        wishlist: [...prev.wishlist, { ...book, addedAt: new Date().toISOString() }]
      };
    });
  };

  const removeFromWishlist = (bookId) => {
    setUser(prev => ({
      ...prev,
      wishlist: prev.wishlist.filter(book => book.id !== bookId)
    }));
  };

  const isInWishlist = (bookId) => {
    return user.wishlist.some(book => book.id === bookId);
  };

  const getRemainingDays = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addToBorrowedBooks,
        extendBorrowingPeriod,
        returnBook,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getRemainingDays
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
