import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";


const DeckOfCards:React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(250);



  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: "relative"
      }}
    >
      <AnimatePresence initial={false}>
        <FramerCard
          key={index + 1}
          index={index}
          initial={{
            scale: 0,
            y: 105,
            opacity: 0
          }}
          animate={{
            scale: 0.75,
            y: 30,
            opacity: 0.5
          }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 }
          }}
        />
        <FramerCard
          index={index}
          key={index}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: {
              duration: 0.2
            }
          }}
          exitX={exitX}
          setExitX={setExitX}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
}


export default DeckOfCards