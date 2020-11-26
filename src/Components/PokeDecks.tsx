import React, { useState } from 'react'
import  Card  from './Card';
import { useGetPokemonList } from './useGetPokemonList';
import { Waypoint } from 'react-waypoint';
import { GetPokemonArrayInterface } from './CardInterface';

interface GetPokemonList {
        results: []
    }

const PokeDecks: React.FC= () => {
        // const [pageNumber, setPageNumber] = useState(1)
        const result = useGetPokemonList()
        const [pokeArray, setPokeArray] = useState<GetPokemonList>([])
        
        

        const getID = (link: string) => {
                const splitLink = link.split('/')
                const IDString = parseInt(splitLink[splitLink.length-2])
                if(IDString < 10) return '00' + IDString
                if(IDString >= 10 && IDString < 100) return '0' + IDString
                if(IDString >= 100 ) return '' + IDString
        }

        
        
        const getRandom = (e: any) => {
                const tempArr = []
                if(result.status === 'loaded') tempArr.push(result.payload.results[Math.ceil(Math.random() * 809)])
                setPokeArray([...pokeArray, result.payload.results[Math.ceil(Math.random() * 809)]])
                console.log(tempArr, e)
        }


        return (
                <div className="grid-of-cards" >
                        {result.status === 'loading' && <div>Loading...</div>}
                        {result.status === 'loaded' &&
                                result.payload.results.map( (pokemon, index) => (
                                        <div key={index}>
                                                <Waypoint onEnter={getRandom} />
                                                <Card  id={getID(pokemon.url)} name={pokemon.name} />
                                        </div>
                                
                                ))}
                        {result.status === 'error' && <div>Error</div>}
                </div> 
        )
}

export default PokeDecks