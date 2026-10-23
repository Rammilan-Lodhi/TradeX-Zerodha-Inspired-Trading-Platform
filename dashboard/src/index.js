import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';

import { FRONTEND_URL } from './config';

const params = new URLSearchParams(window.location.hash.slice(1));
const tokenFromURL = params.get('token');

if (tokenFromURL) {
  localStorage.setItem('authToken', tokenFromURL);

  // Remove the token from the visible URL.
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search,
  );
}

const token = localStorage.getItem('authToken');
const root = ReactDOM.createRoot(document.getElementById('root'));

if (!token) {
  window.location.replace(`${FRONTEND_URL}/login`);
} else {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
