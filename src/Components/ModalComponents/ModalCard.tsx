import React from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { fetchPokemonData, fetchPokemonSpeciesData } from '../../Fetch/FetchData';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";






const ModalCard: React.FC = () => {
    const { pokemon } = useParams()
    const { data: dataP } = useQuery(['fetchPokemonData', pokemon], async() => await fetchPokemonData(pokemon))
    const { data: dataS } = useQuery(['fetchPokemonSpeciesData', pokemon], async() => await fetchPokemonSpeciesData(pokemon))

    
    return (
        <div className="h-max min-h-full w-full flex flex-col items-center justify-evenly bg-white p-4 shadow lg:flex-row" >
            <div className="h-max w-full" >
                <CenterCard />
            </div>
            <div className="h-max w-full" >
                {(dataP && dataS)
                    ? <LeftCard speciesdata={dataS} pokemondata={dataP} />
                    : <LeftCardLoader />
                }
            </div>
            <div className="h-max w-full" >
                {(dataP && dataS)
                    ? <RightCard speciesdata={dataS} pokemondata={dataP} />
                    : <RightCardLoader />
                }
            </div>

        </div>
    )
}


export default ModalCard