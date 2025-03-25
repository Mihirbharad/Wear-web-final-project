import React from "react";
import { FaBox, FaClipboardList, FaShoppingCart } from "react-icons/fa";

const SelDashboard = () => {
    return (
        <>
            <style>{`
                .dashboard-container {
                    display: flex;
                    min-height: 100vh;
                    background-color: #1a1a2e;
                    color: #e0e0e0;
                    font-family: Arial, sans-serif;
                }
                .sidebar {
                    width: 250px;
                    background: #16213e;
                    padding: 20px;
                    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
                }
                .sidebar-title {
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .sidebar-item {
                    padding: 10px;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .sidebar-item:hover {
                    background: #0f3460;
                }
                .main-content {
                    flex: 1;
                    padding: 20px;
                }
                .card-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .card {
                    background:rgb(1, 6, 11);
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 0 10px rgba(50, 50, 214, 0.89);
                    color: #e0e0e0;
                }
                .card-icon {
                    color:rgb(47, 62, 225);
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                .table-container {
                    margin-top: 20px;
                    background:rgb(1, 3, 5);
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(50, 50, 214, 0.89);
                }
                .table-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .styled-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .styled-table th, .styled-table td {
                    border: 1px solidrgb(16, 9, 9);
                    padding: 10px;
                    text-align: center;
                }
                .styled-table th {
                    background: #16213e;
                }
                .table-row:hover {
                    background: #1f4068;
                }
                .status-shipped {
                    color: #4CAF50;
                }
                .status-pending {
                    color: #FFC107;
                }
            `}</style>
            <div className="dashboard-container">
                {/* Sidebar
                <div className="sidebar">
                    <h1 className="sidebar-title">Dashboard</h1>
                    <ul>
                        <li className="sidebar-item">Overview</li>
                        <li className="sidebar-item">Orders</li>
                        <li className="sidebar-item">Products</li>
                    </ul>
                </div>
                 */}
                {/* Main Content */}
                <div className="main-content">
                    <div className="card-grid">
                        {[
                            { title: "Total Sales", value: "10,000", icon: <FaShoppingCart size={24}/> },
                            { title: "Orders", value: "120", icon: <FaClipboardList size={24} /> },
                            { title: "Products", value: "50", icon: <FaBox size={24} /> }
                        ].map((card, index) => (
                            <div key={index} className="card">
                                <div className="card-icon">{card.icon}</div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-value">{card.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Orders */}
                    <div className="table-container">
                        <h2 className="table-title">Recent Orders</h2>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[{ id: "001", product: "Smartphone", status: "Shipped" }, { id: "002", product: "Headphones", status: "Pending" }].map((order, index) => (
                                    <tr key={index} className="table-row">
                                        <td>{order.id}</td>
                                        <td>{order.product}</td>
                                        <td className={order.status === 'Shipped' ? 'status-shipped' : 'status-pending'}>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Product List */}
                    <div className="table-container">
                        <h2 className="table-title">Product List</h2>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[{ product: "Pant", price: "500", stock: "10" }, { product: "Shirt", price: "100", stock: "20" }].map((item, index) => (
                                    <tr key={index} className="table-row">
                                        <td>{item.product}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelDashboard;
