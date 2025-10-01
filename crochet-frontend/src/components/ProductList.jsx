import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/products");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    fetchProducts(); // refresh list after delete
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <Link
        to="/add-product"
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        ➕ Add Product
      </Link>
      <ul className="space-y-4">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span>
              <strong>{p.name}</strong> - ₹{p.price}
            </span>
            <div className="space-x-2">
              <Link
                to={`/edit-product/${p.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
