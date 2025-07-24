import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width:"100vw",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.form
initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}
transition={{duration:1,}}
        style={{
          background: "#333",
          padding: "2rem",
          borderRadius: "10px",
          width: "320px",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Login submitted!");
        }}
      >
        <motion.h2 
        initial={{opacity:0}}
        animate={{opacity:1,scale:[2.3,1],rotate:360}}
        transition={{duration:3,type:"spring"}}
        
        style={{ textAlign: "center", marginBottom: "1rem" }}>
          Login
        </motion.h2>

        <motion.input
          type="email"
          placeholder="Email"
          required
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
        whileFocus={{scale:1.1,boxShadow:" 0 0 8px #0af"}}
        />

        <motion.input
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
          whileFocus={{ scale: 1.05, boxShadow: "0 0 8px #0af" }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.button
          type="submit"
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: "#0af",
            color: "#fff",
            fontWeight: "bold",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#08c" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Log In
        </motion.button>
      </motion.form>
    </div>
  );
}
