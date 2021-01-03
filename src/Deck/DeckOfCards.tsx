import React, {useState, useEffect, useContext} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { NameURLInterface } from "../Components/CardInterface";
import { fetchList } from "../Components/useGetPokemonList";
import undo from "../Assets/undo.svg"
import { wrap } from "popmotion";
import { AppContext, appCtxDefaultValue } from "../Components/Page";
import { useQuery } from "react-query";



const DeckOfCards:React.FC = () => {
  const {state, setState} = useContext(AppContext)
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<NameURLInterface[] | null>(null)
  const cardIndex = wrap(0, length + 1, index);
  const { data } = useQuery('fetchList', fetchList, {refetchOnWindowFocus: false})


  useEffect(() => {
    let newData = null
    
    if(data) {
            newData = data.slice(0, data.length)
            setPokeArray(newData)
            setLength(newData.length)
    }
    return () => {
      setPokeArray(null)
      setLength(0)
    }
  }, [data])

  useEffect(() => {
    if(pokeArray) {
      if(cardIndex < pokeArray.length) {
        if(pokeArray[cardIndex].name !== state.pokemonData.name){
          setState({...state, pokemonData: appCtxDefaultValue.state.pokemonData})
        }
        else setState({...state, pokemonOnTop: pokeArray[cardIndex]})
      }
      if(cardIndex >= pokeArray.length) {
        setState({...state, pokemonOnTop: appCtxDefaultValue.state.pokemonOnTop})
      }

    }


    
  },[cardIndex, pokeArray, setState])


  const handleUndo = () => {
    return (index > 0) ? setIndex(index - 1) : setIndex(0)
  }

  useEffect(() => {
    setIndex(0)
    
    if(data) {
            const filteredResult = data.filter( pokemon => pokemon.name.includes(state.search) )
            setPokeArray(filteredResult)
            setLength(filteredResult.length)
    }

    return () => {
      setPokeArray(null)
      setLength(0)
    }
  }, [state.search, data])


  return (
      <div className="h-full w-max flex flex-col items-center justify-center relative">

            <div className="h-96 w-80 select-none" >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative"
                }}
              >
                <AnimatePresence initial={false}>
                {length >= 3 &&
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
                {length >= 2 &&
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
                  {length >= 1 &&
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
            {/* } */}
              </div>

              <div className="flex" >
                {/* <motion.div
                      className="mt-5 h-10 w-10 flex items-center justify-center cursor-pointer select-none"
                      onClick={() => setExitX(-1000)}
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
                        scale: 0.9
                      }}
                      whileHover={{
                        scale: 1.1
                      }}
                      transition={{
                        rotate: { duration: 0.25 },
                      }}
                >
                  <p className="h-5 w-5" >{"<"}</p>
                </motion.div> */}
                <motion.div
                      className="mt-10 h-10 w-10 flex items-center justify-center cursor-pointer select-none"
                      onClick={() => handleUndo()}
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
                {/* <motion.div
                      className="mt-5 h-10 w-10 flex items-center justify-center cursor-pointer select-none"
                      onClick={() => setExitX(1000)}
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
                        scale: 0.9
                      }}
                      whileHover={{
                        scale: 1.1
                      }}
                      transition={{
                        rotate: { duration: 0.25 },
                      }}
                >
                  <p className="h-5 w-5" >{">"}</p>
                </motion.div> */}
              </div>

      </div>
  );
}


export default DeckOfCards