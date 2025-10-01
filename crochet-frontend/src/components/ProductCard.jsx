import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-4">
     <img
        src={`http://127.0.0.1:8000${product.image_url}`}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="text-pink-600 mt-2 inline-block">View Details</Link>
    </div>
  );
}
