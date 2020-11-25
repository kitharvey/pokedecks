import React from 'react'
import  Card  from './Card';
import { useGetPokemonList } from './useGetPokemonList';


const PokeDecks: React.FC= () => {
        const service = useGetPokemonList()

        const getID = (link: string) => {
                const splitLink = link.split('/')
                const IDString = parseInt(splitLink[splitLink.length-2])
                // console.log(IDString)
                if(IDString < 10) return '00' + IDString
                if(IDString >= 10 && IDString < 100) return '0' + IDString
                if(IDString >= 100 ) return '' + IDString

                
        }


        return (
                <div className="grid-of-cards" >
                        {service.status === 'loading' && <div>Loading...</div>}
                        {service.status === 'loaded' &&
                                service.payload.results.map( pokemon => (
                                <Card key={pokemon.url} id={getID(pokemon.url)} name={pokemon.name} />
                                ))}
                        {service.status === 'error' && <div>Error, the backend moved to the dark side.</div>}
                </div> 
        )
}

export default PokeDecks