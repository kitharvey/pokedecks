import React, {useState, useEffect} from 'react'
import { LazyImage } from 'react-lazy-images'
import { extractEvolutionChain, getImageSourceFromURL } from '../Functions/GlobalFunctions'
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
            console.log("mounted", pokemonEvolutionData)
        }

        return (() => {
            setEvolutionChain(null)
            console.log("unmounted", pokemonEvolutionData)

            }
        )
    },[pokemonEvolutionData])

    return (
        <div className="flex justify-evenly w-full" >
        {evolutionChain ? evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
            <p className="text-xs capitalize" >{name}</p>
            <div className="w-12 h-auto"  >
            <LazyImage
                src={getImageSourceFromURL(url)}
                alt={name}
                placeholder={({ imageProps, ref }) => (
                <img ref={ref} src={egg} alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                )}
                actual={({ imageProps }) => <img {...imageProps} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
            />
            </div>
            {pokemonSpeciesData.is_legendary &&  <p className="text-xs" >Legendary</p>}
            {pokemonSpeciesData.is_mythical &&  <p className="text-xs" >Mythical</p>}
            {!(pokemonSpeciesData.is_legendary || pokemonSpeciesData.is_mythical) && <p className="text-xs" >stage{index+1}</p>}
            </div> )

            :   <div className="flex justify-evenly w-full" >
                    <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                    <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                    <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                </div>
        }
    </div>
    )
}


export default Evolution