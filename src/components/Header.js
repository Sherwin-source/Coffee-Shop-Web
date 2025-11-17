   import { Link } from 'react-router-dom';
   import { ShoppingCart, Moon, Sun } from 'lucide-react';

   function Header({ theme, setTheme, cartCount }) {
     return (
       <header className="bg-coffee-mocha text-coffee-light p-4 shadow-md">
         <nav className="container mx-auto flex justify-between items-center">
           <h1 className="text-2xl font-playfair">Jay Sky High Coffee</h1>
           <div className="flex space-x-4">
             <Link to="/" className="hover:text-coffee-caramel">Home</Link>
             <Link to="/add-product" className="hover:text-coffee-caramel">Add Product</Link>
             <Link to="/cart" className="relative hover:text-coffee-caramel">
               <ShoppingCart size={20} />
               {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-coffee-caramel text-white rounded-full px-2 text-xs">{cartCount}</span>}
             </Link>
             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="hover:text-coffee-caramel">
               {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
             </button>
           </div>
         </nav>
       </header>
     );
   }

   export default Header;
   