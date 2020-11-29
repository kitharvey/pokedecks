import React, { useEffect, useState } from 'react'
import  Card  from './Card';
import { useGetPokemonList } from './useGetPokemonList';
import { Waypoint } from 'react-waypoint';
// import { GetPokemonList } from './CardInterface';

interface GetPokemonArrayInterface {
        name: string
        url: string
}

const NUMBERofCARDS = 6



const PokeDecks: React.FC= () => {
        const [cardNumber, setCardNumber] = useState<number>(NUMBERofCARDS)
        const result = useGetPokemonList()
        const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[]>()


        useEffect(() => {
                let newData
                if(result !== undefined) {
                        newData = result.results.slice(0, cardNumber)
                        setPokeArray(newData)
                } 
                // if(newData !== undefined) setPokeArray(newData)
        }, [result, cardNumber])

        const getRandom = () => {
                setCardNumber(cardNumber => cardNumber + 6)
        }


        return (
                <div className="grid-of-cards" >
                        {pokeArray !== undefined &&
                                pokeArray.map( (pokemon, index) => (
                                        <div key={index}>
                                                {index % 6 === 0 && <Waypoint onEnter={getRandom}/>}
                                                <Card  link={pokemon.url} name={pokemon.name} />
                                        </div>
                                
                                ))}
                </div> 
        )
}

export default PokeDecks