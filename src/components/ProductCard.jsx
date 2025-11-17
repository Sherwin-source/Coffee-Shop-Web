import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(1);
  const subtotal = product.price * qty;

  return (
    <div className="bg-white dark:bg-coffee-dark rounded-lg shadow-md p-4 card-hover">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-playfair mt-2">{product.name}</h3>
      <p className="text-coffee-mocha">{product.category}</p>
      <p className="text-coffee-caramel font-bold">${product.price}</p>
      {product.quantity < 5 && <p className="text-red-500">Low Stock!</p>}
      <div className="flex items-center mt-2">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="bg-coffee-mocha text-white px-2">-</button>
        <span className="mx-2">{qty}</span>
        <button onClick={() => setQty(qty + 1)} className="bg-coffee-mocha text-white px-2">+</button>
      </div>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button onClick={() => addToCart(product, qty)} className="bg-coffee-caramel text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
      <Link to={`/product/${product.id}`} className="block text-center mt-2 text-coffee-brown">View Details</Link>
    </div>
  );
}

export default ProductCard;
