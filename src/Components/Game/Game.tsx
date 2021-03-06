import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import { NameURLInterface } from '../../interfacesProps/Interfaces'
import { getIDStringfromURL, getrandomIndex, shuffleOptions } from '../../functions/GlobalFunctions'
import HiddenPokemon from './HiddenPokemon'
import GameOver from './GameOver'
import GameFramerCard from './GameFramerCard'

interface GameProps {
  pokemonList: NameURLInterface[]
}

const arrlives = (num: number) => {
  const lives = new Array(num).fill(1)
  return lives
}

const Game: React.FC<GameProps> = ({ pokemonList }) => {
  const [index, setIndex] = useState<number>(0)
  const [guessed, setGuessed] = useState<number[]>([0])
  const [options, setOptions] = useState<number[] | null>(null)
  const [score, setScore] = useState<number>(0)
  const [lives, setLives] = useState<number>(3)
  const [reveal, setReveal] = useState<boolean>(false)
  const [selected, setSelected] = useState<number | null>(null)
  const [exitX, setExitX] = useState<number>(0)
  const [rotateX, setRotateX] = useState<number>(0)
  const x = 500
  const rotate = 15

  useEffect(() => {
    const tempOptions: number[] = []
    while (tempOptions.length < 3 && !tempOptions.includes(index))
      tempOptions.push(getrandomIndex(pokemonList.length - 1, 1))
    tempOptions.push(index)
    const shuffledOptions = shuffleOptions(tempOptions)
    setOptions(shuffledOptions)
    return () => {
      setOptions(null)
    }
  }, [pokemonList, index])

  const handleSelect = (option: number) => {
    if (index < pokemonList.length) {
      setSelected(option)
      setGuessed([...guessed, index])
      setReveal(true)
      const tempX = index % 2 === 0 ? -x : x
      const tempRotate = index % 2 === 0 ? -rotate : rotate
      setExitX(tempX)
      setRotateX(tempRotate)
      setTimeout(() => {
        setIndex(index + 1)
        setReveal(false)
        setSelected(null)
      }, 3000)
    }
    if (index === option) setScore(score + 1)
    if (index !== option) setLives(lives - 1)
  }

  const buttonBGColor = (rev: boolean, opt: number, sel: number | null, idx: number) => {
    if (rev) {
      if (opt === sel) {
        if (sel === idx) {
          return 'bg-green-300'
        }
        return 'bg-red-300'
      }
      if (idx === opt) {
        return 'bg-green-300'
      }
      return 'bg-white'
    }
    return 'bg-white'
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {pokemonList && (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-evenly w-full">
            <span>
              score <span className="font-bold">{score}</span>
            </span>
            <span className="flex text-red-500 text-lg">
              {arrlives(lives).map((life) => (
                <span key={life} className="ml-1">
                  <FaHeart />
                </span>
              ))}
            </span>
          </div>
          <div className="h-96 w-80 select-none relative my-8">
            <AnimatePresence>
              <GameFramerCard
                key={index + 2}
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
                <HiddenPokemon
                  id={+getIDStringfromURL(pokemonList[index + 2].url)}
                  reveal={reveal}
                />
              </GameFramerCard>

              <GameFramerCard
                key={index + 1}
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
                <HiddenPokemon
                  id={+getIDStringfromURL(pokemonList[index + 1].url)}
                  reveal={reveal}
                />
              </GameFramerCard>

              <GameFramerCard
                key={index}
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
                exitX={exitX}
                rotateX={rotateX}
              >
                <HiddenPokemon id={+getIDStringfromURL(pokemonList[index].url)} reveal={reveal} />
              </GameFramerCard>
            </AnimatePresence>
          </div>
          <div className="flex">
            {options &&
              options.map((option) => (
                <div key={option} className="m-2">
                  <button
                    type="button"
                    className={`p-2 cursor-pointer shadow-md transition-colors rounded-md hover:shadow-lg ${buttonBGColor(
                      reveal,
                      option,
                      selected,
                      index
                    )}`}
                    onClick={() => handleSelect(option)}
                    style={{
                      pointerEvents: reveal ? 'none' : 'all',
                      opacity: reveal ? 0.5 : 1,
                    }}
                  >
                    {pokemonList[option].name}
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
      {lives === 0 && !reveal && <GameOver score={score} />}
    </div>
  )
}

export default Game
