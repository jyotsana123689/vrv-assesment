import React, { useContext, useEffect, useState } from 'react';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const { data } = await API.get('/admin'); // Protected endpoint
        setMessage(data.message);
      } catch (error) {
        setMessage('Access denied.');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}
      <p>{message}</p>
    </div>
  );
};

export default Admin;
