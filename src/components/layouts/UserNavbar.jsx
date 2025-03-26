import React from 'react';
import { Link } from 'react-router-dom';

export const UserNavbar = () => {
  return (
    <>
      <style>
        {`
          .app-header {
            background: linear-gradient(135deg, #1e1e2f, #29293d);
            padding: 12px 20px;
            border-bottom: 2px solid #5a00ff;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }
          
          .navbar-nav {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .navbar-nav .nav-item {
            margin-right: 20px;
          }
          
          .navbar-nav .nav-link {
            color: #d1d1e9;
            text-decoration: none;
            font-size: 17px;
            padding: 10px 15px;
            border-radius: 5px;
            transition: background 0.3s ease, color 0.3s ease;
          }
          
          .navbar-nav .nav-link:hover {
            background: rgba(90, 0, 255, 0.6);
            color: #fff;
          }
          
          .navbar-nav .nav-item .bi {
            font-size: 22px;
            color: #4f8ef7;
          }
          
          .ms-auto {
            margin-left: auto;
          }
          
          .user-menu {
            position: relative;
          }
          
          .user-menu .dropdown-toggle {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #d1d1e9;
          }
          
          .user-image {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
            border: 2px solid #5a00ff;
            margin-right: 10px;
          }
          
          .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: #222235;
            border: 1px solid #33334d;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            display: none;
            padding: 10px 0;
            min-width: 150px;
          }
          
          .user-menu:hover .dropdown-menu {
            display: block;
          }
          
          .dropdown-menu a {
            display: block;
            color: #d1d1e9;
            padding: 8px 15px;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          
          .dropdown-menu a:hover {
            background: rgba(90, 0, 255, 0.6);
            color: #fff;
          }
        `}
      </style>
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                <i className="bi bi-list" />
              </a>
            </li> */}
            <li className="nav-item d-none d-md-block">
              <Link to="order" className="nav-link">Buy Product</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="myorder" className="nav-link">My Orders</Link>   
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="contact" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="review" className="nav-link">Review</Link>   
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown user-menu">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img src="../../src/assets/img/user.jpg" className="user-image shadow" alt="User" />
                <span className="d-none d-md-inline">USER</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};