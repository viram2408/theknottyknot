import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            navigate('/');  // Redirect to home if already logged in
        }
    }, [navigate]);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/register', {
                name: form.name,
                email: form.email,
                password: form.password,
                role: 'user',  // Role is forced as 'user'
            });

            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error.response?.data);
            alert('Registration failed.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Register</h2>

            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <label className="block text-gray-600">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
