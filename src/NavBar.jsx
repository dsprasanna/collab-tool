import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Collab Tool</h1>
      <ul style={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#editor">Editor</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#111",
    boxShadow: "0px 4px 10px rgba(0, 255, 204, 0.3)",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#00ffcc",
    fontFamily: "'Poppins', sans-serif", // Elegant font
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 0 15px rgba(0, 255, 204, 0.8)", // Glow effect
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navItem: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
