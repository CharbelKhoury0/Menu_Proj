import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { CartDrawer } from './components/CartDrawer';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
