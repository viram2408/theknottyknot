import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      navigate('/');  // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: form.email,
        password: form.password
      });

      const token = response.data.token;                
      const role = response.data.user.role;            

      localStorage.setItem('userToken', token);
      localStorage.setItem('userRole', role);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response?.data);
      alert('Invalid credentials!');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4 p-6">
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}
