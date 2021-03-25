import React from 'react'
import {LeftCardLoader, RightCardLoader} from "./ModalCardLoader"
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { fetchPokemonData, fetchPokemonSpeciesData } from '../../fromAPI/axiosFunctions';
import { useQuery } from 'react-query';
import { useAppSelector } from '../../reduxStore/hooks';






const ModalCard: React.FC = () => {
    const {modalIndex} = useAppSelector( state => state.modal )
    const { data: dataP } = useQuery(['fetchPokemonData', modalIndex], async() => await fetchPokemonData(modalIndex))
    const { data: dataS } = useQuery(['fetchPokemonSpeciesData', modalIndex], async() => await fetchPokemonSpeciesData(modalIndex))

    
    return (
        <div className="h-max min-h-full w-full rounded-md flex flex-col items-center justify-evenly bg-white p-4 shadow lg:flex-row" >
            <div className="h-max w-full" >
                <CenterCard pokemon={modalIndex} />
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