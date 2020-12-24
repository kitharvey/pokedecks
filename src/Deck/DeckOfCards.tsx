import React, {useState, useEffect, useContext} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { NameURLInterface } from "../Components/CardInterface";
import { useGetPokemonList } from "../Components/useGetPokemonList";
import undo from "../Assets/undo.svg"
import { wrap } from "popmotion";
import { AppContext } from "../Components/Page";
import CardLoader from "./CardLoader";

const DeckOfCards:React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<NameURLInterface[] | null>(null)
  const result = useGetPokemonList()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const cardIndex = wrap(0, length + 1, index);
  const {state} = useContext(AppContext)

  useEffect(() => {
    let newData = null
    let isMounted = true
    
    if(result !== undefined && isMounted) {
            newData = result.results.slice(0, result.results.length)
            setPokeArray(newData)
            setLength(newData.length)
    }
    return () => {
      setPokeArray(null)
      setLength(0)
      isMounted = false
    }
  }, [result])



  const handleUndo = () => {
    return (index > 0) ? setIndex(index - 1) : setIndex(0)
  }

  useEffect(() => {
    let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)
    let isMounted = true
    setIndex(0)
    clearTimeout(timeOutID)
    setIsVisible(true)
    timeOutID = setTimeout(() => {
            setIsVisible(false)
    }, 500)
    
    if(result && isMounted) {
            const filteredResult = result.results.filter( pokemon => pokemon.name.includes(state.search) )
            setPokeArray(filteredResult)
            setLength(filteredResult.length)
    }

    return () => {
      setPokeArray(null)
      setLength(0)
      isMounted = false
    }
  }, [state.search, result])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center" >
      <div className="h-full w-max flex flex-col items-center justify-center relative">

          
            <div className="h-96 w-80 select-none" >
            {(pokeArray && !isVisible) ? 
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative"
                }}
              >
                <AnimatePresence initial={false}>
                {pokeArray.length >= 3 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={length}
                    key={cardIndex + 2}
                    index={cardIndex + 2}
                    initial={{
                      scale: 0,
                      y: -60,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 0.75,
                      y: -60,
                      opacity: 1,
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                    }}
                    transition={{
                      scale: { duration: 0.1 },
                    }}
                  />}
                {pokeArray.length >= 2 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={length}
                    key={cardIndex + 1}
                    index={cardIndex + 1}
                    initial={{
                      scale: 0,
                      y: -40,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 0.8,
                      y: -40,
                      opacity: 1,
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                    }}
                    transition={{
                      scale: { duration: 0.1 },
                    }}
                  />}
                  {pokeArray.length >= 1 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={length}
                    index={cardIndex}
                    key={cardIndex}
                    animate={{
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                      scale: .95,
                      y: 0,
                      opacity: 1,
                      
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      opacity: {
                        duration: 0.2
                      }
                    }}
                    whileHover={{
                      scale: 1,
                      boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
                    }}
                    whileTap={{ 
                      cursor: "grabbing",
                      scale: 1,
                      boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
                    }}

                    exitX={exitX}
                    setExitX={setExitX}
                    setIndex={setIndex}
                    drag="x"
                  />}
                </AnimatePresence>
              </motion.div>
              : <CardLoader />
            }
              </div>

              <div className="mt-10 flex items-center justify-center cursor-pointer" onClick={() => handleUndo()}>
                <motion.div
                      style={{
                        borderRadius:"50%",
                        padding: "10px"
                      }}
                      animate={{
                        boxShadow: "0 0px 25px 1px rgba(0,0,0,.25)",
                        scale: .95,
                        y: 0,
                        opacity: 1,
                        
                      }}
                      whileTap={{ 
                        rotate: -360,
                        scale: 0.9
                      }}
                      whileHover={{
                        rotate: -180,
                        scale: 1.1
                      }}
                      transition={{
                        rotate: { duration: 0.25 },
                      }}
                >
                  <img src={undo} alt="undo icon" className="h-5 w-5" />
                </motion.div>
              </div>

      </div>
    </div>
  );
}


export default DeckOfCards