import React from 'react';
import { Link } from 'react-router-dom';

export const SellerNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="selhome" style={styles.navLink}>SelHome</Link>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Orders</a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Products</a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Analytics</a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Reviews</a>
          </li>
        </ul>
        <ul style={styles.navListRight}>
          <li style={styles.navItem}>
            <a style={styles.navLink} href="#">
              <i className="bi bi-search" />
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.profileLink}>
              <img src="../../src/assets/img/seller.jpg" style={styles.profileImage} alt="User" />
              <span style={styles.profileText}>SELLER</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 30px',
    background: 'linear-gradient(135deg,rgb(10, 37, 87), #1C1C1C)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.9)',
    borderBottom: '3px solid #222',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navListRight: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navItem: {
    display: 'inline-block',
  },
  navLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 18px',
    borderRadius: '8px',
    transition: 'background 0.3s ease, transform 0.2s ease',
    background: '#000',
  },
  navLinkHover: {
    backgroundColor: '#333',
    transform: 'scale(1.1)',
  },
  profileLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '12px',
    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)',
    border: '2px solid #666',
  },
  profileText: {
    color: '#FFFFFF',
  }
};