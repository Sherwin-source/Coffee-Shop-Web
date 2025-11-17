import { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    image: '',
    description: '',
    specs: { roast: '', size: '', notes: '' },
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('specs.')) {
      const specKey = name.split('.')[1];
      setFormData({ ...formData, specs: { ...formData.specs, [specKey]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price || !formData.quantity || !formData.image || !formData.description || !formData.rating) {
      alert('All fields are required!');
      return;
    }
    if (parseFloat(formData.price) <= 0 || parseInt(formData.quantity) <= 0 || parseFloat(formData.rating) < 0 || parseFloat(formData.rating) > 5) {
      alert('Price and quantity must be positive; rating must be 0-5.');
      return;
    }
    addProduct(formData);
    setFormData({
      name: '',
      category: '',
      price: '',
      quantity: '',
      image: '',
      description: '',
      specs: { roast: '', size: '', notes: '' },
      rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-coffee-dark p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-playfair mb-4">Add New Product</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className="w-full mb-2 p-2 border rounded" />
      <select name="category" value={formData.category} onChange={handleChange} required className="w-full mb-2 p-2 border rounded">
        <option value="">Select Category</option>
        <option value="Espresso">Espresso</option>
        <option value="Latte">Latte</option>
        <option value="Pastry">Pastry</option>
      </select>
      <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full mb-2 p-2 border rounded" />
      <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required className="w-full mb-2 p-2 border rounded" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required className="w-full mb-2 p-2 border rounded" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="w-full mb-2 p-2 border rounded"></textarea>
      <input name="specs.roast" value={formData.specs.roast} onChange={handleChange} placeholder="Roast Level" className="w-full mb-2 p-2 border rounded" />
      <input name="specs.size" value={formData.specs.size} onChange={handleChange} placeholder="Serving Size" className="w-full mb-2 p-2 border rounded" />
      <input name="specs.notes" value={formData.specs.notes} onChange={handleChange} placeholder="Flavor Notes" className="w-full mb-2 p-2 border rounded" />
      <input name="rating" type="number" step="0.1" min="0" max="5" value={formData.rating} onChange={handleChange} placeholder="Rating (0-5)" required className="w-full mb-4 p-2 border rounded" />
      <button type="submit" className="bg-coffee-caramel text-white px-4 py-2 rounded w-full">Add Product</button>
    </form>
  );
}

export default AddProductForm;