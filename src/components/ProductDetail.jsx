import { useState } from 'react';

function ProductDetail({ product, addToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-white dark:bg-coffee-dark rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded mb-4" />
      <h1 className="text-3xl font-playfair mb-2">{product.name}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
      <h3 className="text-xl font-semibold mb-2">Specifications</h3>
      <ul className="list-disc list-inside mb-4">
        {Object.entries(product.specs).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
      <p className="mb-2">Rating: {'⭐'.repeat(Math.floor(product.rating))} ({product.rating})</p>
      <p className="text-coffee-caramel font-bold text-lg mb-2">Price: ${product.price}</p>
      <p className="mb-4">Stock: {product.quantity} {product.quantity < 5 && <span className="text-red-500">(Low Stock!)</span>}</p>
      <div className="flex items-center mb-4">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="bg-coffee-mocha text-white px-3 py-1 rounded">-</button>
        <span className="mx-4 text-lg">{qty}</span>
        <button onClick={() => setQty(qty + 1)} className="bg-coffee-mocha text-white px-3 py-1 rounded">+</button>
      </div>
      <button onClick={() => addToCart(product, qty)} className="bg-coffee-caramel text-white px-6 py-2 rounded w-full">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
