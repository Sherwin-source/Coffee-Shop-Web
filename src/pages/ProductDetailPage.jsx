import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [qty, setQty] = useState(1);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
      <h1 className="text-3xl font-playfair mt-4">{product.name}</h1>
      <p>{product.description}</p>
      <ul>
        {Object.entries(product.specs).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
      </ul>
      <p>Rating: {'⭐'.repeat(Math.floor(product.rating))}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.quantity}</p>
      <div className="flex items-center mt-2">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="bg-coffee-mocha text-white px-2">-</button>
        <span className="mx-2">{qty}</span>
        <button onClick={() => setQty(qty + 1)} className="bg-coffee-mocha text-white px-2">+</button>
      </div>
      <button onClick={() => addToCart(product, qty)} className="bg-coffee-caramel text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
    </div>
  );
}

export default ProductDetailPage;
