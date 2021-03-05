import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { NameURLInterface } from "../../InterfacesProps/Interfaces";
import { wrap } from "popmotion";

interface DeckofCardsProps{
  data: NameURLInterface[] | undefined
  stateIndex: number
  setStateIndex: (stateIndex: number) => void
  stateSearch: string
  setStateSearch: (stateSearch: string) => void
}



const DeckOfCards:React.FC<DeckofCardsProps> = ({data, stateIndex, setStateIndex, stateSearch, setStateSearch}) => {
  const [exitX, setExitX] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<NameURLInterface[] | undefined>(data)
  const cardIndex = wrap(0, length + 1, stateIndex);



  useEffect(() => {
    let newData = null
    
    if(data) {
            newData = data.slice(0, data.length)
            setPokeArray(newData)
            setLength(newData.length)
    }
    return () => {
      setPokeArray(data)
      setLength(0)
    }
  }, [data])

  const handleUndo = () => {
    return (stateIndex > 0) ? setStateIndex(stateIndex - 1) : setStateIndex(0)
  }

  useEffect(() => {
    
    
    if(data) {
            const filteredResult = data.filter( pokemon => pokemon.name.includes(stateSearch) )
            setPokeArray(filteredResult)
            setLength(filteredResult.length)
    }

    return () => {
      setPokeArray(data)
      setLength(0)
    }
  }, [stateSearch, data])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateIndex(0)
    setStateSearch(e.target.value.toLowerCase())
  }


  return (
      <div className="h-max w-max flex flex-col items-center justify-center relative">

            <div className="shadow flex items-center bg-white pl-4 p-1 absolute -top-32 w-80">
                <label htmlFor="searchpokemon" className="text-black font-bold mr-3 " >Search: </label>
                <form method="GET" onSubmit={ (event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
                <div className="relative text-gray-400 focus-within:text-black">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </span>
                    <input id="searchpokemon" type="search" name="q" value={stateSearch} className="py-2 text-sm pl-10 focus:outline-none text-gray-900 w-full" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
                </div>
                </form>
            </div>

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
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 0.8,
                      y: -75,
                      opacity: 1,
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                    }}
                    transition={{
                      scale: { duration: 0.5 },
                    }}
                  />}
                {length >= 2 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={length}
                    key={cardIndex + 1}
                    index={cardIndex + 1}
                    animate={{
                      scale: 0.9,
                      y: -40,
                      opacity: 1,
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                    }}
                    transition={{
                      scale: { duration: 0.5 },
                    }}
                  />}
                  {length >= 1 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={length}
                    index={cardIndex}
                    key={cardIndex}
                    initial={{
                      scale: 1,
                      y: 40,
                      opacity: 1,
                    }}
                    animate={{
                      boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      
                    }}
                    whileTap={{ 
                      cursor: "grabbing",
                    }}

                    exitX={exitX}
                    setExitX={setExitX}
                    setIndex={setStateIndex}
                    drag="x"
                  />}
                </AnimatePresence>
              </motion.div>
            {/* } */}
              </div>

              <div className="flex absolute rounded-full shadow -bottom-16" >
                <motion.div
                      className="h-10 w-10 flex items-center justify-center cursor-pointer select-none bg-white"
                      onClick={() => handleUndo()}
                      style={{
                        borderRadius:"50%",
                        padding: "10px"
                      }}
                      animate={{
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
                  <img src='/undo.svg' alt="undo icon" className="h-5 w-5" />
                </motion.div>
              </div>

      </div>
  );
}


export default DeckOfCards