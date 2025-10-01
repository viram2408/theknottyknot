import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./components/EditProduct";
import ManageProducts from "./pages/ManageProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";   // New Registration page
import ProtectedRoute from "./components/ProtectedRoute";  

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

            {/* Admin-only routes */}
            <Route
              path="/add-product"
              element={
                <ProtectedRoute role="admin">
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-products"
              element={
                <ProtectedRoute role="admin">
                  <ManageProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-product/:id"
              element={
                <ProtectedRoute role="admin">
                  <EditProduct />
                </ProtectedRoute>
              }
            />

            {/* Fallback for unmatched routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
