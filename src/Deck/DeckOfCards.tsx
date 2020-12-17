import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { GetPokemonArrayInterface } from "../Components/CardInterface";
import { useGetPokemonList } from "../Components/useGetPokemonList";
import undo from "../Assets/undo.svg"
var timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)


const DeckOfCards:React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[] | null>(null)
  const result = useGetPokemonList()
  const [searchInput, setSearchInput] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase())
  }
  const handleUndo = () => {
    return (index > 0) ? setIndex(index - 1) : setIndex(0)
  }

  useEffect(() => {
    let isMounted = true
    setIndex(0)
    clearTimeout(timeOutID)
    setIsVisible(true)
    timeOutID = setTimeout(() => {
            setIsVisible(false)
    }, 500)
    
    if(result && isMounted) {
            const filteredResult = result.results.filter( pokemon => pokemon.name.includes(searchInput) )
            setPokeArray(filteredResult)
            setLength(filteredResult.length)
    }

    return () => {
      setPokeArray(null)
      setLength(0)
      isMounted = false
    }
  }, [searchInput, result])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center" >
      <div className="h-full w-3/5 flex flex-col items-center justify-center relative">
          <div className="absolute top-1/4 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            <form method="GET">
              <div className="relative text-gray-400 focus-within:text-gray-900">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  {/* <button type="submit" className="p-1 focus:outline-none focus:shadow-outline"> */}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  {/* </button> */}
                </span>
                <input type="search" name="q" className="py-2 text-sm rounded-md pl-10 focus:outline-none bg-white text-gray-900" placeholder="Search Pokemon..." autoComplete="off" onChange={handleSearch} />
              </div>
            </form>
          </div>
          
          <div className="w-auto h-auto absolute top-1/4 right-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white select-none"
              
          >
            <motion.div
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
              <img src={undo} alt="undo icon" className="h-5 w-5 lighten cursor-pointer" onClick={() => handleUndo()} />
            </motion.div>
            <span className="text-sm">(Undo Swipe)</span>
          </div>
    {(pokeArray && !isVisible) && 
    <div className="absolute top-3/4 right-1/2 transform translate-x-1/2 -translate-y-full" >
      <motion.div
        style={{
          width: 256,
          height: 384,
          position: "relative"
        }}
      >
        <AnimatePresence initial={false}>
        {pokeArray.length >= 3 &&
          <FramerCard
            pokeArray={pokeArray}
            length={length}
            key={index + 2}
            index={index + 2}
            initial={{
              scale: 0,
              y: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1
            }}
            transition={{
              scale: { duration: 0.1 },
            }}
          />}
        {pokeArray.length >= 2 &&
          <FramerCard
            pokeArray={pokeArray}
            length={length}
            key={index + 1}
            index={index + 1}
            initial={{
              scale: 0,
              y: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{
              scale: { duration: 0.1 },
            }}
          />}
          {pokeArray.length >= 1 &&
          <FramerCard
            pokeArray={pokeArray}
            length={length}
            index={index}
            key={index}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              opacity: {
                duration: 0.1
              }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)",
            }}
            whileTap={{ 
              cursor: "grabbing",
              scale: 1.05,
              boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
             }}

            exitX={exitX}
            setExitX={setExitX}
            setIndex={setIndex}
            drag="x"
          />}
        </AnimatePresence>
      </motion.div>
      </div>
    }
    </div>
    </div>
  );
}


export default DeckOfCards