import React from 'react';
import '../css/Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        </div>
        <div className="user-profile">
          <img src="/icons/userhead.svg" alt="User Avatar" className="user-avatar" />
          <span className="username">User</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
