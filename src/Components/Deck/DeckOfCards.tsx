import React, {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FramerCard from "./FramerCard";
import { NameURLInterface } from "../../InterfacesProps/Interfaces";
import {FaUndoAlt, FaSearch} from 'react-icons/fa'
import { wrap } from "popmotion";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { setPokemonIndex, setPokemonListLength, setPokemonSearch } from "../../reduxStore/pokemonSlice";


const DeckOfCards:React.FC = () => {
  const { pokemonList, pokemonIndex, pokemonSearch, pokemonListLength } = useAppSelector(state => state.pokemonlist)
  const [pokeArray, setPokeArray] = useState<NameURLInterface[] | null>(pokemonList)
  const [exitX, setExitX] = useState<number>(0);
  const cardIndex = wrap(0, pokemonListLength + 1, pokemonIndex);
  const dispatch = useAppDispatch()

  const handleUndo = () => {
    setExitX(0)
    pokemonIndex > 0 ? dispatch(setPokemonIndex(pokemonIndex - 1)) : dispatch(setPokemonIndex(0))
  }

  useEffect(() => {
    if(pokemonList) {
            const filteredResult = pokemonList.filter( pokemon => pokemon.name.includes(pokemonSearch) )
            setPokeArray(filteredResult)
            dispatch(setPokemonListLength(filteredResult.length))
    }

    return () => {
      setPokeArray(pokemonList)
      dispatch(setPokemonListLength(0))
      setExitX(0)
    }
  }, [pokemonSearch, pokemonList, dispatch])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPokemonSearch(e.target.value.toLowerCase()))
    dispatch(setPokemonIndex(0))
    setExitX(0)
  }


  return (
      <div className="h-max w-max flex flex-col items-center justify-center relative">

            <div className="shadow rounded-md flex items-center bg-white pl-4 p-1 absolute -top-32 w-80">
                <label htmlFor="searchpokemon" className="text-black font-bold mr-3 " >Search: </label>
                <form method="GET" onSubmit={ (event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
                <div className="relative text-gray-400 focus-within:text-black">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FaSearch/>
                    </span>
                    <input id="searchpokemon" type="search" name="q" value={pokemonSearch} className="py-2 text-sm pl-10 focus:outline-none text-gray-900 w-full" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
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
                {pokemonListLength >= 3 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={pokemonListLength}
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
                {pokemonListLength >= 2 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={pokemonListLength}
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
                  {pokemonListLength >= 1 &&
                  <FramerCard
                    pokeArray={pokeArray}
                    length={pokemonListLength}
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
                    whileHover={{
                      scale: 1.025,
                      boxShadow: "0 5px 40px 1px rgba(0,0,0,.25)",
                    }}

                    exitX={exitX}
                    setExitX={setExitX}
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
                  <FaUndoAlt/>
                </motion.div>
              </div>

      </div>
  );
}


export default DeckOfCards