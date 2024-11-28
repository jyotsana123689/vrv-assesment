import React, { useState, useContext } from 'react';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      login(data.token, data.user); // Assuming your backend sends back user info
      alert('Login successful');
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
