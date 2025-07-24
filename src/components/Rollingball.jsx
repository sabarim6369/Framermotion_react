import { motion } from "framer-motion";

export default function JumpingRollingBall() {
  return (
    <div
      style={{
        height: "100vh",
        width:"100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "4px",
          background: "#333",
        }}
      >
        <motion.div
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{ 
            x: "100vw", 
            y: [-10,-20,-30,-40,-10,-20,-30], // Jumping effect
            rotate: 360 
          }}
          transition={{ 
            duration: 3, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
          style={{
            position: "absolute",
            top: "-12px",
            left: 0,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#0af",
          }}
        />
      </div>
    </div>
  );
}
