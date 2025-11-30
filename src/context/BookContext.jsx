import { createContext, useContext, useState, useEffect } from 'react';
import { booksData } from '../data/mockData';

const BookContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(false);

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const getBookById = (id) => {
    return books.find(book => book.id === parseInt(id));
  };

  const updateBookStatus = (bookId, status, copiesChange = 0) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId
          ? {
              ...book,
              availableStatus: status,
              copiesAvailable: Math.max(0, book.copiesAvailable + copiesChange)
            }
          : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        filteredBooks,
        searchQuery,
        setSearchQuery,
        selectedGenre,
        setSelectedGenre,
        loading,
        setLoading,
        getBookById,
        updateBookStatus
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
