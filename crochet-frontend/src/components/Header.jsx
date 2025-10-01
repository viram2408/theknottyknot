import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');
  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <header className="bg-pink-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Crochet Store</h1>
    
        {/* Navigation */}
        <nav className="space-x-6 font-medium text-gray-700 bg-pink-100">
          {token && (role === 'user' || role === 'admin') && (
          <>
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <Link to="/shop" className="hover:text-pink-600">Shop</Link>
          </>
          )}
          {!token && (
            <>
              <Link to="/login" className="hover:text-pink-600">Login</Link>
              <Link to="/register" className="hover:text-pink-600">Register</Link>
            </>
          )}

          {token && role === 'user' && (
            <>
              <Link to="/cart" className="hover:text-pink-600">Cart</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

          {token && role === 'admin' && (
            <>
              <Link to="/add-product" className="hover:text-pink-600">Add Product</Link>
              <Link to="/manage-products" className="hover:text-pink-600">Manage</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
