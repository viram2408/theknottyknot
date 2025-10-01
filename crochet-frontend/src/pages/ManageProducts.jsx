import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
      alert("Product deleted!");
      fetchProducts(); // refresh list
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg bg-white shadow">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 border">ID</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Stock</th>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4 border">{p.id}</td>
                  <td className="py-2 px-4 border">{p.name}</td>
                  <td className="py-2 px-4 border text-pink-600 font-semibold">
                    ₹{p.price}
                  </td>
                  <td className="py-2 px-4 border">{p.stock}</td>
                  <td className="py-2 px-4 border">
                    {p.image_url ? (
                      <img
                        src={`http://127.0.0.1:8000${p.image_url}`}
                        alt={p.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border text-center space-x-2">
                    <Link
                      to={`/edit-product/${p.id}`}
                      className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="inline-block bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
