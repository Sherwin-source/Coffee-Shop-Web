function Cart({ cart, updateQuantity, removeFromCart, total }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-playfair mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. ☕</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white dark:bg-coffee-dark p-4 rounded-lg shadow-md mb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-playfair">{item.name}</h3>
                <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="bg-coffee-mocha text-white px-2">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-coffee-mocha text-white px-2">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;