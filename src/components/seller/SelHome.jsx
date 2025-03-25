import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "../ui/card";

export const Card = ({ image, title, price, rating, reviews }) => {
  return (
    <div style={styles.productCard}>
      <img src={image} alt={title} style={styles.productImage} />
      <h3>{title}</h3>
      <p style={styles.productPrice}>${price}</p>
      <div style={styles.productRating}>⭐ {rating} ({reviews} Reviews)</div>
      <button style={styles.productButton}>View Product</button>
    </div>
  );
};



export const SelHome = () => {
  return (
    <div style={styles.sellerCoverPage}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to Your Seller Store</h1>
        <p style={styles.heroText}>
          Start selling your stylish clothing and reach thousands of customers!
        </p>
        <Link to="/seller/addproduct">
        <button style={styles.heroButton}>Start Selling</button>
        </Link>
      </div>

      {/* Featured Products */}
      <h2 style={styles.sectionTitle}>Featured Products</h2>
      <div style={styles.productGrid}>
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            image={`/product-${item}.jpg`}
            title={`Trendy Outfit ${item}`}
            price={49.99}
            rating={4.5}
            reviews={120}
          />
        ))}
      </div>

      {/* Seller Benefits */}
      <div style={styles.sellerBenefits}>
        <h2>Why Sell With Us?</h2>
        <p>Low commissions, high visibility, and secure payments.</p>
        <Link to="/signup">
        <button style={styles.benefitButton}>Join as a Seller</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  sellerCoverPage: {
    backgroundColor: "#1c1c1e",
    color: "#f5f5f5",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    backgroundColor: "#2c2c2e",
    padding: "40px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.5)",
  },
  heroTitle: { fontSize: "32px", fontWeight: "bold", color: "#fff" },
  heroText: { color: "#bbb", marginTop: "10px" },
  heroButton: {
    marginTop: "20px",
    backgroundColor: "#ff9500",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "30px 0",
    color: "#ffcc00",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  productCard: {
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(255,255,255,0.1)",
    overflow: "hidden",
    backgroundColor: "#3a3a3c",
    textAlign: "center",
    padding: "10px",
  },
  productImage: { width: "100%", height: "200px", objectFit: "cover" },
  productPrice: { color: "#ff9500", fontWeight: "bold" },
  productRating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    color: "#ffcc00",
  },
  productButton: {
    marginTop: "10px",
    backgroundColor: "#ff3b30",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  sellerBenefits: {
    backgroundColor: "#2c2c2e",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    marginTop: "40px",
  },
  benefitButton: {
    marginTop: "10px",
    backgroundColor: "#007aff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};
