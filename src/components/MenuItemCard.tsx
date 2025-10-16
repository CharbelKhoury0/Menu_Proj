import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold text-xl">
            ${item.price.toFixed(2)}
          </span>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
