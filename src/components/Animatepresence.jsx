import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AnimatePresencework() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Collapse" : "Expand"}
      </button>

     <AnimatePresence>
      {isOpen&&(
        <motion.div
        initial={{opacity:0,height:0}}
        animate={{opacity:1,height:"100px"}}
                    transition={{ duration: 0.5 }}

        exit={{opacity:0,heigth:0}}
        style={{
            background:"#b10909"
        }}
        
        >
             This box expands and collapses with animation!
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
