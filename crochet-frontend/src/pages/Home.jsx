import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then(res => setProducts(res.data));
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Handcrafted
            <br />
            Crochet Creations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stylish, Eco-friendly, and Unique Crochet Products
            <br />
            for Every Occasion
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">About Our Craft</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Creating beautiful, handmade crochet items with love and care. Every
              piece tells a story of craftsmanship and creativity—perfect for
              gifting or bringing cozy vibes to your home.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in sustainable fashion and eco-friendly materials, ensuring 
              each creation is not only beautiful but also environmentally conscious.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPsR6yPoK0bWgtnkHDd5KhWszJ8JsjwZ6xg&s"
                alt="Crochet craftsmanship"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section id="shop" className="py-10 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Featured Products
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="aspect-square overflow-hidden rounded-t-2xl bg-gray-100">
                  <img
                    src={`http://127.0.0.1:8000${product.image_url}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-pink-600 font-bold text-xl mb-4">
                    ₹{product.price.toLocaleString()}
                  </p>
                  {/* <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl transition-colors duration-300 font-semibold">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Newsletter Section */}
      {/* <section className="py-20 px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-pink-100 text-lg mb-8">
            Subscribe for updates on new collections and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
            />
            <button className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">theknottyknot</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Handmade crochet items with love and creativity in every stitch.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-twitter text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-facebook text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-pinterest text-sm" />
                </a>
              </div>
            </div>
            <div>
                    <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                    </ul>
                </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <p className="mb-2">Email: hello@theknottyknot.com</p>
              <p>Phone: +91 9726378756</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
              <p className="text-gray-400 mb-4">
                Join us on Instagram for crochet lovers and get inspired by daily creations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}