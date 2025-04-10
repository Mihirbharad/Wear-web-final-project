import React from "react";
import { faShoppingCart, faHeart, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "radial-gradient(circle at top, #1a1a2e, #0f0f1e)",
      fontFamily: "'Poppins', sans-serif",
    },
    contentWrapper: {
      textAlign: "center",
      width: "100%",
      maxWidth: "1200px",
    },
    welcomeText: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#ffffff",
      marginBottom: "30px",
      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "space-around", // Ensures equal spacing between items
      gap: "30px", // More space between cards
      padding: "30px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      width: "30%", // Cards take equal space in a single line
      textAlign: "center",
      transition: "all 0.3s ease",
      color: "#ffffff",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    cardHover: {
      transform: "scale(1.08)",
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
      border: "1px solid rgba(0, 255, 0, 0.6)",
    },
    icon: {
      fontSize: "50px",
      marginBottom: "15px",
      color: "#32CD32",
      transition: "color 0.3s ease",
    },
    button: {
      display: "inline-block",
      marginTop: "15px",
      padding: "12px 20px",
      border: "none",
      background: "linear-gradient(135deg, #32CD32, #228B22)",
      color: "#fff",
      borderRadius: "10px",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      background: "linear-gradient(135deg, #00ff00, #006400)",
      transform: "scale(1.1)",
      boxShadow: "0 0 15px rgba(0, 255, 0, 0.6)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.welcomeText}>
          <FontAwesomeIcon icon={faUser} /> Welcome, User!
        </h1>
        <div style={styles.cardContainer}>
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
          >
            <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
            <h5>Recent Orders</h5>
            <p>You have 2 pending deliveries.</p>
            <Link to="myorder" style={styles.button} onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)} onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}>
              View Orders
            </Link>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
          >
            <FontAwesomeIcon icon={faHeart} style={styles.icon} />
            <h5>Wishlist</h5>
            <p>3 items saved for later.</p>
            <Link to="wishlist" style={styles.button} onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)} onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}>
              View Wishlist
            </Link>
          </div>
          <div
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
            <h5>Saved Addresses</h5>
            <p>You have 2 saved addresses.</p>
            <Link to="#" style={styles.button} onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)} onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}>
              Manage Addresses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
