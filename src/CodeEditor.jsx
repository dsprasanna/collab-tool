import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Editor from "@monaco-editor/react";

const socket = io("http://localhost:5000");

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    socket.on("code-update", (newCode) => {
      setCode(newCode);
    });

    return () => {
      socket.off("code-update");
    };
  }, []);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit("code-update", newCode);
  };

  return (
    <div style={styles.container}>
      <div style={styles.dropdownContainer}>
        <label style={styles.label}>Select Language:</label>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
          style={styles.dropdown}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      <div style={styles.editorWrapper}>
        <Editor
          height="400px"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
};

// Stylish Border Effect
const styles = {
  container: {
    position: "relative",
    width: "80%",
    margin: "auto",
  },
  dropdownContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    marginRight: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
  },
  dropdown: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #555",
    cursor: "pointer",
  },
  editorWrapper: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "3px solid rgba(0, 255, 255, 0.7)", // Neon Glow Border
    boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.6)", // Glowing Effect
    transition: "0.3s ease-in-out",
  },
};

export default CodeEditor;
