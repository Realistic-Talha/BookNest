export const booksData = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    isbn: "978-0062315007",
    publisher: "HarperOne",
    publicationYear: 2014,
    pageCount: 208,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    description: "A magical story about following your dreams and listening to your heart. Santiago, a young shepherd, travels from Spain to Egypt in search of treasure.",
    availableStatus: "Available",
    copiesAvailable: 3,
    averageRating: 4.7,
    reviews: [
      { user: "Emma Watson", rating: 5, comment: "Life-changing book! Beautifully written and deeply philosophical." },
      { user: "James Potter", rating: 4, comment: "Inspiring and mystical. A must-read for everyone." }
    ]
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    isbn: "978-0451524935",
    publisher: "Signet Classic",
    publicationYear: 1961,
    pageCount: 328,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description: "A dystopian social science fiction novel that explores totalitarianism, surveillance, and the dangers of a controlled society.",
    availableStatus: "Reserved",
    copiesAvailable: 0,
    averageRating: 4.8,
    reviews: [
      { user: "Hermione Granger", rating: 5, comment: "Chilling and relevant even today. Orwell was a visionary." },
      { user: "Ron Weasley", rating: 4, comment: "Dark and thought-provoking. Made me think about freedom." }
    ]
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    isbn: "978-0061120084",
    publisher: "Harper Perennial",
    publicationYear: 2006,
    pageCount: 336,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    description: "A gripping tale of racial injustice and childhood innocence set in the American South during the 1930s.",
    availableStatus: "Available",
    copiesAvailable: 5,
    averageRating: 4.9,
    reviews: [
      { user: "Luna Lovegood", rating: 5, comment: "A masterpiece of American literature. Deeply moving." }
    ]
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    isbn: "978-0743273565",
    publisher: "Scribner",
    publicationYear: 2004,
    pageCount: 180,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    description: "A tragic story of wealth, love, and the American Dream in the Jazz Age of the 1920s.",
    availableStatus: "Borrowed",
    copiesAvailable: 0,
    expectedReturnDate: "2025-12-05",
    averageRating: 4.5,
    reviews: [
      { user: "Draco Malfoy", rating: 4, comment: "Lavish and melancholic. Captures the era perfectly." }
    ]
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    isbn: "978-0062316097",
    publisher: "Harper",
    publicationYear: 2015,
    pageCount: 464,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    description: "A brief history of humankind exploring how Homo sapiens came to dominate the world.",
    availableStatus: "Available",
    copiesAvailable: 4,
    averageRating: 4.6,
    reviews: [
      { user: "Albus Dumbledore", rating: 5, comment: "Fascinating and eye-opening. A must-read for understanding humanity." }
    ]
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    isbn: "978-0399590504",
    publisher: "Random House",
    publicationYear: 2018,
    pageCount: 352,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
    description: "A memoir about a young woman who grows up in a survivalist family and eventually escapes to pursue education.",
    availableStatus: "Available",
    copiesAvailable: 2,
    averageRating: 4.7,
    reviews: [
      { user: "Minerva McGonagall", rating: 5, comment: "Powerful and inspiring. A testament to the transformative power of education." }
    ]
  },
  {
    id: 7,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Non-Fiction",
    isbn: "978-0062457714",
    publisher: "HarperOne",
    publicationYear: 2016,
    pageCount: 224,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    description: "A counterintuitive approach to living a good life by focusing on what truly matters.",
    availableStatus: "Available",
    copiesAvailable: 6,
    averageRating: 4.3,
    reviews: [
      { user: "Sirius Black", rating: 4, comment: "Refreshingly honest and practical advice." }
    ]
  },
  {
    id: 8,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    isbn: "978-0553380163",
    publisher: "Bantam",
    publicationYear: 1998,
    pageCount: 256,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    description: "An exploration of cosmology, black holes, and the nature of time and space.",
    availableStatus: "Available",
    copiesAvailable: 3,
    averageRating: 4.8,
    reviews: [
      { user: "Remus Lupin", rating: 5, comment: "Mind-bending and brilliant. Hawking makes complex ideas accessible." }
    ]
  },
  {
    id: 9,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Technology",
    isbn: "978-0132350884",
    publisher: "Prentice Hall",
    publicationYear: 2008,
    pageCount: 464,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    description: "A handbook of agile software craftsmanship teaching principles and best practices for writing clean, maintainable code.",
    availableStatus: "Available",
    copiesAvailable: 5,
    averageRating: 4.7,
    reviews: [
      { user: "Severus Snape", rating: 5, comment: "Essential reading for any serious programmer. Precision and elegance matter." }
    ]
  },
  {
    id: 10,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    genre: "Technology",
    isbn: "978-0135957059",
    publisher: "Addison-Wesley",
    publicationYear: 2019,
    pageCount: 352,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
    description: "From journeyman to master - timeless tips for building better software and becoming a better developer.",
    availableStatus: "Reserved",
    copiesAvailable: 0,
    averageRating: 4.9,
    reviews: [
      { user: "Neville Longbottom", rating: 5, comment: "Practical wisdom that every developer should know." }
    ]
  },
  {
    id: 11,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    genre: "History",
    isbn: "978-0393317558",
    publisher: "W. W. Norton",
    publicationYear: 1999,
    pageCount: 528,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg",
    description: "An exploration of how geography and environment shaped the modern world and human societies.",
    availableStatus: "Available",
    copiesAvailable: 2,
    averageRating: 4.6,
    reviews: [
      { user: "Ginny Weasley", rating: 5, comment: "Fascinating analysis of human history and civilization." }
    ]
  },
  {
    id: 12,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: "History",
    isbn: "978-1400052189",
    publisher: "Crown",
    publicationYear: 2010,
    pageCount: 384,
    coverImage: "https://covers.openlibrary.org/b/isbn/9781400052189-L.jpg",
    description: "The story of an African American woman whose cancer cells revolutionized medical research.",
    availableStatus: "Available",
    copiesAvailable: 3,
    averageRating: 4.8,
    reviews: [
      { user: "Cho Chang", rating: 5, comment: "Eye-opening and deeply moving. Important story that needed to be told." }
    ]
  },
  {
    id: 13,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fiction",
    isbn: "978-0441172719",
    publisher: "Ace",
    publicationYear: 1990,
    pageCount: 688,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    description: "An epic science fiction novel set on a desert planet where political intrigue and mysticism intertwine.",
    availableStatus: "Available",
    copiesAvailable: 4,
    averageRating: 4.7,
    reviews: [
      { user: "Cedric Diggory", rating: 5, comment: "Complex and immersive. A masterpiece of science fiction." }
    ]
  },
  {
    id: 14,
    title: "The Origin of Species",
    author: "Charles Darwin",
    genre: "Science",
    isbn: "978-0451529060",
    publisher: "Signet",
    publicationYear: 2003,
    pageCount: 576,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780451529060-L.jpg",
    description: "Darwin's groundbreaking work on evolution and natural selection that changed our understanding of life.",
    availableStatus: "Available",
    copiesAvailable: 2,
    averageRating: 4.9,
    reviews: [
      { user: "Rubeus Hagrid", rating: 5, comment: "Revolutionary ideas about life and nature. Essential scientific reading." }
    ]
  },
  {
    id: 15,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Non-Fiction",
    isbn: "978-0735211292",
    publisher: "Avery",
    publicationYear: 2018,
    pageCount: 320,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    description: "Practical strategies for building good habits and breaking bad ones through tiny changes.",
    availableStatus: "Available",
    copiesAvailable: 7,
    averageRating: 4.8,
    reviews: [
      { user: "Oliver Wood", rating: 5, comment: "Actionable advice on building better habits. Changed my life!" }
    ]
  }
];

export const genres = ["All", "Fiction", "Non-Fiction", "Science", "Technology", "History"];

export const featuredBookIds = [1, 5, 9, 13, 15];