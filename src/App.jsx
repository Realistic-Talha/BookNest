 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { ThemeProvider } from './context/ThemeContext';
 import { BookProvider } from './context/BookContext';
 import { ReservationProvider } from './context/ReservationContext';
 import { UserProvider } from './context/UserContext';
 import Header from './components/layout/Header';
 import Footer from './components/layout/Footer';
 import Home from './pages/Home';
 import BookDetails from './pages/BookDetails';
 import Cart from './pages/Cart';
 import Checkout from './pages/Checkout';
 import Dashboard from './pages/Dashboard';
 import Contact from './pages/Contact';
 import './App.css';
 
 function App() {
   return (
     <ThemeProvider>
       <BookProvider>
         <ReservationProvider>
           <UserProvider>
             <Router>
               <div className="app">
                 <Header />
                 <main className="main-content">
                   <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/book/:id" element={<BookDetails />} />
                     <Route path="/cart" element={<Cart />} />
                     <Route path="/checkout" element={<Checkout />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/contact" element={<Contact />} />
                   </Routes>
                 </main>
                 <Footer />
               </div>
             </Router>
           </UserProvider>
         </ReservationProvider>
       </BookProvider>
     </ThemeProvider>
   );
 }
 
 export default App;
