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
        const [searchInput, setSearchInput] = useState<string>('')

        useEffect(() => {
                let newData
                if(result !== undefined) {
                        newData = result.results.slice(0, cardNumber)
                        setPokeArray(newData)
                } 
                // if(newData !== undefined) setPokeArray(newData)
        }, [result, cardNumber])

        const handleOnEnter = () => {
                setCardNumber(cardNumber => cardNumber + NUMBERofCARDS)
                console.log(cardNumber)
        }

        const handleSearch = (e: any) => {
                // let temp = searchInput
                setSearchInput(searchInput => searchInput + (e.key+''))
        }

        useEffect(() => {
                document.body.addEventListener( 'keydown', handleSearch )
        }, [])

        useEffect(() => {
                if(pokeArray) {
                        setPokeArray(pokeArray.filter( pokemon => pokemon.name.includes(searchInput) ))
                } 
                console.log(searchInput, pokeArray ? pokeArray.length : 0)
        }, [searchInput])



        return (
                <div className="grid grid-cols-4 gap-4 w-6/12 mx-auto my-4" >
                        {pokeArray && pokeArray.map( (pokemon, index) => (
                                        <div className="h-max w-full" key={index}>
                                                {index  % NUMBERofCARDS === 0 && <Waypoint onEnter={handleOnEnter}/>}
                                                <Card  link={pokemon.url} name={pokemon.name} />
                                        </div>
                                
                                ))}
                                
                </div> 
        )
}

export default PokeDecks