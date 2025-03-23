import React from "react";
import CodeEditor from "./CodeEditor";
import NavBar from "./NavBar";
import "./App.css"; // or import "./App.css";

const App = () => {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>CollabTool</h2>
        <ul style={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#editor">Editor</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header style={styles.header}>
        <h1>Welcome to Our Real-Time Collaboration Tool</h1>
        <p>Code, collaborate, and innovate together in real-time!</p>
      </header>

      {/* Editor Section */}
      <section id="editor" style={styles.editorSection}>
        <CodeEditor />
      </section>

      {/* FAQ Section */}
      <section id="faq" style={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div style={styles.faqItem}>
          <h4>What is this tool used for?</h4>
          <p>It allows developers to collaborate and write code in real-time.</p>
        </div>
        <div style={styles.faqItem}>
          <h4>Which languages are supported?</h4>
          <p>Currently, we support JavaScript, Python, C++, and Java.</p>
        </div>
        <div style={styles.faqItem}>
          <h4>Is it free to use?</h4>
          <p>Yes! Our real-time code editor is completely free.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 CollabTool. All rights reserved.</p>
      </footer>
    </div>
  );
};

// CSS Styles
const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    textAlign: "center",
  }
 ,
 navbar: {
  display: "flex",
  justifyContent: "space-between", // Keeps logo left, links right
  alignItems: "center",
  padding: "15px 50px",
  background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff5858)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0, // Ensures it starts from the left edge
  zIndex: 1000,
},
logo: {
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "'Poppins', sans-serif",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  marginRight: "40px",
},
navLinks: {
  listStyle: "none",
    display: "flex",
    gap: "20px",
    marginRight: "70px"
},
navLinksItem: {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
},
navLink: {
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  color: "#fff",
  transition: "0.3s ease-in-out",
},
navLinkHover: {
  color: "#1e1e1e",
  transform: "scale(1.1)",
},
  header: {
    padding: "100px 20px 50px",
    fontSize: "20px",
  },
  editorSection: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 0",
  },
  faqSection: {
    padding: "50px",
    backgroundColor: "#292929",
  },
  faqItem: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#444",
  },
  footer: {
    padding: "15px",
    backgroundColor: "#111",
    marginTop: "30px",
  },
};

export default App;
