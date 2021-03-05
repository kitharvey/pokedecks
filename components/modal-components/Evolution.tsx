import React, {useState, useEffect} from 'react'
import { LazyImage } from 'react-lazy-images'
import { extractEvolutionChain, getIDStringfromURL, getImageSourceFromURL } from '../../functions/GlobalFunctions'
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface, NameURLInterface } from '../../InterfacesProps/Interfaces'
import useSWR from 'swr';
import { motion } from 'framer-motion'
import { findColor } from '../../functions/getTypeIconAndColor'
import { useRouter } from 'next/dist/client/router'
import { fetchEvolutionData } from '../../fetch/FetchData'

interface EvolutionProps{
    pokemonSpeciesData: GetPokemonSpeciesDataInterface
    pokemonData: GetPokemonDataInterface
}


const Evolution: React.FC<EvolutionProps> = ({pokemonSpeciesData, pokemonData}) => {
    const { data } = useSWR(`${pokemonSpeciesData.evolution_chain.url}`, fetchEvolutionData)
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[] | null>(null)
    const router = useRouter()

    useEffect(() => {
        if(data) {
            const evolutionData = extractEvolutionChain(data)
            setEvolutionChain(evolutionData)
        }
        else setEvolutionChain(null)

        return (() => {
            setEvolutionChain(null)
            }
        )
    },[data])


    return (
        <div className="flex flex-wrap justify-evenly w-full mt-4" >
        {(evolutionChain) ? evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
            <p className="text-xs" >#{getIDStringfromURL(url)}</p>
            <motion.div className="w-28 h-28 rounded-full p-4 m-2 cursor-pointer"
                style={{
                    background: `linear-gradient(0deg, ${findColor(pokemonData.types[0].type.name)[1] + "10"} 0%, ${findColor(pokemonData.types[0].type.name)[1]} 80%)`
                }}
                initial={{
                    scale: 0,
                    y: 0,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    
                  }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0 5px 5px 1px rgba(0,0,0,.25)",
                }}
                whileTap={{
                    scale: 1,
                    boxShadow: "0 0px 0px 0px rgba(0,0,0,.25)",
                }}
                onClick={() => router.push(`/${getIDStringfromURL(url)}`)}
            >
            <LazyImage
            
                src={getImageSourceFromURL(url)}
                alt={name}
                placeholder={({ imageProps, ref }) => (
                <img ref={ref} src='/pokemon-egg.png' alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                )}
                actual={({ imageProps }) => <img {...imageProps} alt={name} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
                error={() => (
                    <img src='/pokemon-egg.png' alt="egg error" draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                  )}
            />
            </motion.div>
            <p className="text-xs capitalize" >{name}</p>

            </div> )

            : <div className="flex justify-evenly flex-wrap w-full" >
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