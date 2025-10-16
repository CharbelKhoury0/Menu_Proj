export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  address: string;
  instructions: string;
  paymentMethod: 'cash' | 'card';
}
