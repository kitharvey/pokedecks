import React, {useState, useEffect} from 'react'
import { LazyImage } from 'react-lazy-images'
import { extractEvolutionChain, getIDStringfromURL, getImageSourceFromURL } from '../../functions/GlobalFunctions'
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface, NameURLInterface } from '../../InterfacesProps/Interfaces'
import egg from "../../assets/pokemon-egg.png"
import { useQuery } from 'react-query'
import axios from 'axios'
import { motion } from 'framer-motion'
import { findColor } from '../../functions/getTypeIconAndColor'
import { useAppDispatch } from '../../reduxStore/hooks'
import { setModalIndex, setModalShow } from '../../reduxStore/modalSlice'

interface EvolutionProps{
    pokemonSpeciesData: GetPokemonSpeciesDataInterface
    pokemonData: GetPokemonDataInterface
}


const Evolution: React.FC<EvolutionProps> = ({pokemonSpeciesData, pokemonData}) => {
    const { data, isFetching } = useQuery('fetchEvolutionData', async() => await axios.get(`${pokemonSpeciesData.evolution_chain.url}`))
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[] | null>(null)
    const dispatch = useAppDispatch()
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

    const handleModal = (id: number) => {
        dispatch(setModalIndex(id))
        dispatch(setModalShow(true))
      }


    return (
        <div className="flex flex-wrap justify-evenly w-full mt-4" >
        {(evolutionChain && !isFetching) ? evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
            <p className="text-xs" >#{getIDStringfromURL(url)}</p>
            <div onClick={() => handleModal(+getIDStringfromURL(url))} >
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
            </motion.div>
            </div>
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