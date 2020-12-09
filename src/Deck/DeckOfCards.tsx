import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { GetPokemonArrayInterface } from "../Components/CardInterface";
import { useGetPokemonList } from "../Components/useGetPokemonList";


const DeckOfCards:React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(0);
  const [exitY, setExitY] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[]>()
  const result = useGetPokemonList()
  useEffect(() => {
    let newData
    if(result !== undefined) {
            newData = result.results.slice(0, result.results.length)
            setPokeArray(newData)
    }

    return () => {
            setPokeArray(pokeArray)
    }
}, [result])

  return (
    <div className="h-screen w-full flex items-center justify-center" >
      <motion.div
        style={{
          width: 256,
          height: 384,
          position: "relative"
        }}
      >
        <AnimatePresence initial={false}>
          <FramerCard
            pokeArray={pokeArray}
            key={index + 2}
            index={index + 2}
            initial={{
              scale: 0,
              y: 105,
              opacity: 0
            }}
            animate={{
              scale: 0.75,
              y: 100,
              opacity: 1
            }}
            transition={{
              scale: { duration: 0.2 },
            }}
          />
          <FramerCard
            pokeArray={pokeArray}
            key={index + 1}
            index={index + 1}
            initial={{
              scale: 0,
              y: 105,
              opacity: 0
            }}
            animate={{
              scale: 0.9,
              y: 50,
              opacity: 1
            }}
            transition={{
              scale: { duration: 0.2 },
            }}
          />
          <FramerCard
            pokeArray={pokeArray}
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
            exitY={exitY}
            setExitY={setExitY}
            setIndex={setIndex}
            drag
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


export default DeckOfCards