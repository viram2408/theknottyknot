import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div className="p-6">
      <img src={product.image_url} alt={product.name} className="w-64 h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-2">₹{product.price}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
    </div>
  );
}
