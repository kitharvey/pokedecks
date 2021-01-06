import React, {useState, useEffect, useContext} from 'react'
import { LazyImage } from 'react-lazy-images'
import { extractEvolutionChain, getIDStringfromURL, getImageSourceFromURL } from '../Functions/GlobalFunctions'
import { GetPokemonSpeciesDataInterface, NameURLInterface } from './CardInterface'
import { useGetPokemonEvolutionChain } from './useGetPokemonData'
import egg from "../Assets/pokemon-egg.png"
import { useQuery } from 'react-query'
import { AppContext } from './Page'
import axios from 'axios'
import { findColor } from '../Functions/getTypeIconAndColor'

interface EvolutionProps{
    pokemonSpeciesData: GetPokemonSpeciesDataInterface
}


const Evolution: React.FC<EvolutionProps> = ({pokemonSpeciesData}) => {
    const {state} = useContext(AppContext)
    const { data, isFetching } = useQuery('fetchEvolutionData', async() => await axios.get(`${pokemonSpeciesData.evolution_chain.url}`), {refetchOnWindowFocus: false})
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[] | null>(null)
    useEffect(() => {
        if(data) {
            const evolutionData = extractEvolutionChain(data.data)
            setEvolutionChain(evolutionData)
        }

        return (() => {
            setEvolutionChain(null)

            }
        )
    },[data])

    return (
        <div className="flex justify-evenly w-full mt-4" >
        {(evolutionChain && !isFetching) ? evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
            <p className="text-xs" >#{getIDStringfromURL(url)}</p>

            <div className="w-28 h-28 rounded-full p-4 m-2"
            style={{
                background: `linear-gradient(0deg, ${findColor(state.pokemonData.types[0].type.name)[1] + "10"} 0%, ${findColor(state.pokemonData.types[0].type.name)[1]} 80%)`
              }} 
            >
            <LazyImage
            
                src={getImageSourceFromURL(url)}
                alt={name}
                placeholder={({ imageProps, ref }) => (
                <img ref={ref} src={egg} alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                )}
                actual={({ imageProps }) => <img {...imageProps} alt={name} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
                error={() => (
                    <img src={egg} alt="egg error" draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                  )}
            />
            </div>
            <p className="text-xs capitalize" >{name}</p>

            </div> )

            : <div className="flex justify-evenly w-full" >
                    <div className="flex flex-col items-center" >
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                    </div>
                    <div className="flex flex-col items-center" >
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                    </div>
                    <div className="flex flex-col items-center" >
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                        <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                    </div>
                
                </div>
        }
    </div>
    )
}


export default Evolution