import React, { useEffect, useState } from 'react'
import { shuffleDeck } from '../../functions/GlobalFunctions'
import { NameURLInterface } from '../../InterfacesProps/Interfaces'
import { useAppSelector } from '../../reduxStore/hooks'
import Game from './Game'

const GameWrapper: React.FC = () => {
  const { pokemonList } = useAppSelector((state) => state.pokemonlist)
  const [shuffled, setShuffled] = useState<NameURLInterface[] | null>(null)

  useEffect(() => {
    if (pokemonList) {
      const temp = pokemonList.slice()
      const shuff = shuffleDeck(temp)
      setShuffled(shuff)
    }
    return () => {
      setShuffled(null)
    }
  }, [pokemonList, setShuffled])

  return (
    <div className="container h-9/10 m-auto relative">
      {shuffled && <Game pokemonList={shuffled} />}
    </div>
  )
}

export default GameWrapper
