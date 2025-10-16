import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm truncate">
          {item.name}
        </h4>
        <p className="text-green-600 font-bold text-sm mt-1">
          ${item.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-7 h-7 flex items-center justify-center bg-white rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </motion.button>

          <motion.span
            key={item.quantity}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="w-8 text-center font-semibold text-sm"
          >
            {item.quantity}
          </motion.span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 flex items-center justify-center bg-white rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <p className="font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-600 transition-colors p-1"
        >
          <Trash2 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};
