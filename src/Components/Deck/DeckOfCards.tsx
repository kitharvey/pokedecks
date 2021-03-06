import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUndoAlt, FaSearch } from 'react-icons/fa'
import { wrap } from 'popmotion'
import FramerCard from './FramerCard'
import { NameURLInterface } from '../../interfacesProps/Interfaces'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import {
  setPokemonIndex,
  setPokemonListLength,
  setPokemonSearch,
} from '../../reduxStore/pokemonSlice'
import { getIDStringfromURL } from '../../functions/GlobalFunctions'
import CardWrapper from './CardWrapper'
import EndCard from './EndCard'

const DeckOfCards: React.FC = () => {
  const { pokemonList, pokemonIndex, pokemonSearch, pokemonListLength } = useAppSelector(
    (state) => state.pokemonlist
  )
  const [pokeArray, setPokeArray] = useState<NameURLInterface[] | null>(pokemonList)
  const [exitX, setExitX] = useState<number>(0)
  const cardIndex = wrap(0, pokemonListLength + 1, pokemonIndex)
  const dispatch = useAppDispatch()

  const handleUndo = () => {
    setExitX(0)
    pokemonIndex > 0 ? dispatch(setPokemonIndex(pokemonIndex - 1)) : dispatch(setPokemonIndex(0))
  }

  useEffect(() => {
    if (pokemonList) {
      const filteredResult = pokemonList.filter((pokemon) => pokemon.name.includes(pokemonSearch))
      setPokeArray(filteredResult)
      dispatch(setPokemonListLength(filteredResult.length))
    }

    return () => {
      setPokeArray(pokemonList)
      dispatch(setPokemonListLength(0))
    }
  }, [pokemonSearch, pokemonList, dispatch])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPokemonSearch(e.target.value.toLowerCase()))
    dispatch(setPokemonIndex(0))
    setExitX(0)
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative">
      <div className="shadow rounded-full flex items-center bg-white py-2 px-6  mb-20">
        <label htmlFor="searchpokemon" className="text-black font-bold mr-3 ">
          Search:{' '}
        </label>
        <form
          method="GET"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
        >
          <div className="relative text-gray-400 focus-within:text-black">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaSearch />
            </span>
            <input
              id="searchpokemon"
              type="search"
              name="q"
              value={pokemonSearch}
              className="py-2 text-sm pl-10 focus:outline-none text-gray-900 w-full"
              placeholder="Enter Pokemon Name..."
              autoComplete="off"
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>

      <div className="h-96 w-80 select-none">
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <AnimatePresence>
            {pokemonListLength >= 3 && cardIndex + 2 < pokemonListLength + 1 && (
              <FramerCard
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
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                }}
                transition={{
                  scale: { duration: 0.5 },
                }}
              >
                {pokeArray && cardIndex + 2 < pokemonListLength ? (
                  <CardWrapper id={+getIDStringfromURL(pokeArray[cardIndex + 2].url)} />
                ) : (
                  <EndCard />
                )}
              </FramerCard>
            )}
            {pokemonListLength >= 2 && cardIndex + 1 < pokemonListLength + 1 && (
              <FramerCard
                key={cardIndex + 1}
                index={cardIndex + 1}
                animate={{
                  scale: 0.9,
                  y: -40,
                  opacity: 1,
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                }}
                transition={{
                  scale: { duration: 0.5 },
                }}
              >
                {pokeArray && cardIndex + 1 < pokemonListLength ? (
                  <CardWrapper id={+getIDStringfromURL(pokeArray[cardIndex + 1].url)} />
                ) : (
                  <EndCard />
                )}
              </FramerCard>
            )}
            {pokemonListLength >= 1 && cardIndex < pokemonListLength + 1 && (
              <FramerCard
                index={cardIndex}
                key={cardIndex}
                initial={{
                  scale: 1,
                  y: 40,
                  opacity: 1,
                }}
                animate={{
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                  scale: 1,
                  y: 0,
                  opacity: 1,
                }}
                whileTap={{
                  cursor: 'grabbing',
                }}
                whileHover={{
                  scale: 1.025,
                  boxShadow: '0 5px 40px 1px rgba(0,0,0,.25)',
                }}
                exitX={exitX}
                setExitX={setExitX}
                drag="x"
              >
                {pokeArray && cardIndex < pokemonListLength ? (
                  <CardWrapper id={+getIDStringfromURL(pokeArray[cardIndex].url)} />
                ) : (
                  <EndCard />
                )}
              </FramerCard>
            )}
          </AnimatePresence>
        </motion.div>
        {/* } */}
      </div>

      <div className="flex rounded-full shadow mt-10">
        <motion.div
          className="h-10 w-10 flex items-center justify-center cursor-pointer select-none bg-white"
          onClick={() => handleUndo()}
          style={{
            borderRadius: '50%',
            padding: '10px',
          }}
          animate={{
            scale: 0.95,
            y: 0,
            opacity: 1,
          }}
          whileTap={{
            rotate: -180,
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <FaUndoAlt />
        </motion.div>
      </div>
    </div>
  )
}

export default DeckOfCards
