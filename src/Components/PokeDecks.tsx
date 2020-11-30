import React, { useEffect, useState } from 'react'
import  Card  from './Card';
import { useGetPokemonList } from './useGetPokemonList';
import { Waypoint } from 'react-waypoint';
// import { GetPokemonList } from './CardInterface';

interface GetPokemonArrayInterface {
        name: string
        url: string
}

const NUMBERofCARDS = 8



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
                setCardNumber(cardNumber => cardNumber + NUMBERofCARDS)
                console.log(cardNumber)
        }


        return (
                <div className="grid-of-cards" >
                        {pokeArray && pokeArray.map( (pokemon, index) => (
                                        <div className="dummy" key={index}>
                                                {index  % NUMBERofCARDS === 0 && <Waypoint onEnter={getRandom}/>}
                                                <Card  link={pokemon.url} name={pokemon.name} />
                                        </div>
                                
                                ))}
                                
                </div> 
        )
}

export default PokeDecks