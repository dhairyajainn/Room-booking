import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd', borderBottom: '1px solid #ddd' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0d6efd' }}>
          Hotel
        </a>
        <Link to={'/login'} className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
