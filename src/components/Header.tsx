import { ShoppingCart, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <UtensilsCrossed className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              DelishDine
            </span>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
