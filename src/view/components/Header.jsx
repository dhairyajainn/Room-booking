// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', borderBottom: '1px solid #ddd' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0d6efd' }}>
          Hotel
        </Link>
        <div>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
