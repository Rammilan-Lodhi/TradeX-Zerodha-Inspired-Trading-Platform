import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../config';
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/allOrders`);
        setOrders(res.data);
      } catch (err) {
        console.error('Orders error:', err);
        setError('Orders load nahi ho sake. Backend connection check karein.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) {
    return <p>{error}</p>;
  }
  if (orders.length === 0) {
    return (
      <div className='no-orders'>
        <p>You haven't placed any orders yet.</p>
        <Link to='/' className='btn'>
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className='orders'>
      <h3>Orders ({orders.length})</h3>

      <table className='table'>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>₹{Number(order.price).toFixed(2)}</td>
              <td>{order.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
