import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { GetPokemonArrayInterface } from "../Components/CardInterface";
import { useGetPokemonList } from "../Components/useGetPokemonList";

var timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)


const DeckOfCards:React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [exitX, setExitX] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[]>()
  const result = useGetPokemonList()
  const [searchInput, setSearchInput] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    let newData
    if(result !== undefined) {
            newData = result.results.slice(0, result.results.length)
            setPokeArray(newData)
            setLength(newData.length)
    }
    return () => {
            setPokeArray(pokeArray)
    }
  }, [result])

  const handleSearch = (e: any) => {
    const key = e.key+''
    if(e.keyCode >= 65 && e.keyCode <= 90)setSearchInput(searchInput => searchInput + key.toLowerCase())
    if (e.keyCode === 8) setSearchInput(searchInput => searchInput.slice(0, -1))
  }

  useEffect(() => {
    document.body.addEventListener( 'keydown', handleSearch )
  }, [])

  useEffect(() => {
    setIndex(0)
    clearTimeout(timeOutID)
    setIsVisible(true)
    timeOutID = setTimeout(() => {
            setIsVisible(false)
    }, 1000)
    
    if(result) {
            const filteredResult = result.results.filter( pokemon => pokemon.name.includes(searchInput) )
            setPokeArray(filteredResult)
            setLength(filteredResult.length)
    } 

    return () => {
            setPokeArray(pokeArray)
            setLength(length)
    }
  }, [searchInput])

  return (
    <div className="h-screen w-full flex items-center justify-center" >
        {isVisible && <p className="fixed top-1/5 right-1/2 z-50 transform translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white text-shadow-md uppercase" >{searchInput}</p> }
    {(pokeArray && !isVisible) && 
      <motion.div
        style={{
          width: 256,
          height: 384,
          position: "relative"
        }}
      >
        <AnimatePresence initial={false}>
        {pokeArray.length > 2 &&
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
              scale: .7,
              y: 0,
              opacity: 1
            }}
            transition={{
              scale: { duration: 0.2 },
            }}
          />}
        {pokeArray.length > 1 &&
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
              scale: .9,
              y: 0,
              opacity: 1,
            }}
            transition={{
              scale: { duration: 0.2 },
            }}
          />}
          {pokeArray.length > 0 &&
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
              stiffness: 300,
              damping: 20,
              opacity: {
                duration: 0.2
              }
            }}
            exitX={exitX}
            setExitX={setExitX}
            setIndex={setIndex}
            drag
          />}
        </AnimatePresence>
      </motion.div>
    }
    </div>
  );
}


export default DeckOfCards