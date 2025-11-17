import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import Cart from './components/Cart';
import { initialProducts } from './data';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedProducts) setProducts(storedProducts);
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [products, cart]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addToCart = (product, qty) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + qty } : item));
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
    toast.success(`${product.name} added to cart!`);
  };

  const updateQuantity = (id, qty) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.info('Item removed from cart.');
  };

  const addProduct = (newProduct) => {
    const id = Date.now();
    setProducts([...products, { ...newProduct, id }]);
    toast.success('Product added successfully!');
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} flex flex-col min-h-screen`}>
      <Header theme={theme} setTheme={setTheme} cartCount={cart.length} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
          <Route path="/add-product" element={<AddProductPage addProduct={addProduct} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} total={total} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;