import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

function Home({ products, addToCart }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || p.category === category)
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar search={search} setSearch={setSearch} category={category} setCategory={setCategory} categories={categories} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
