import React, {useState, useEffect} from 'react'
import { LazyImage } from 'react-lazy-images'
import { extractEvolutionChain, getIDStringfromURL, getImageSourceFromURL } from '../Functions/GlobalFunctions'
import { GetPokemonSpeciesDataInterface, NameURLInterface } from './CardInterface'
import { useGetPokemonEvolutionChain } from './useGetPokemonData'
import egg from "../Assets/pokemon-egg.png"

interface EvolutionProps{
    pokemonSpeciesData: GetPokemonSpeciesDataInterface
}


const Evolution: React.FC<EvolutionProps> = ({pokemonSpeciesData}) => {
    const pokemonEvolutionData = useGetPokemonEvolutionChain(pokemonSpeciesData.evolution_chain.url)
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[] | null>(null)
    useEffect(() => {
        if(pokemonEvolutionData) {
            const data = extractEvolutionChain(pokemonEvolutionData)
            setEvolutionChain(data)
        }

        return (() => {
            setEvolutionChain(null)

            }
        )
    },[pokemonEvolutionData])

    return (
        <div className="flex justify-evenly w-full mt-4" >
        {evolutionChain ? evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
            <p className="text-xs capitalize" >{name}</p>
            <div className="w-24 m-1 h-auto"  >
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
            <p>#{getIDStringfromURL(url)}</p>
            </div> )

            :   <div className="flex justify-evenly w-full" >
                    <div className="w-24 h-24 m-1 rounded-full bg-gray-400 animate-pulse" />
                    <div className="w-24 h-24 m-1 rounded-full bg-gray-400 animate-pulse" />
                    <div className="w-24 h-24 m-1 rounded-full bg-gray-400 animate-pulse" />
                </div>
        }
    </div>
    )
}


export default Evolution