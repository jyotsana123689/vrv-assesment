import React, { useState } from 'react';
import API from '../api/api';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert('Registration successful! Please log in.');
    } catch (error) {
      alert(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
