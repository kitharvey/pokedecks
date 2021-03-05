import React from 'react'
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import CenterCard from './CenterCard';
import { ModalCardProps } from '../../InterfacesProps/Interfaces';




const ModalCard: React.FC<ModalCardProps> = ({speciesdata, pokemondata}) => {
    return (
        <div className="h-max min-h-full w-full flex flex-col items-center justify-evenly bg-white p-4 shadow lg:flex-row" >
            <div className="h-max w-full" >
                <CenterCard />
            </div>
            <div className="h-max w-full" >
                <LeftCard speciesdata={speciesdata} pokemondata={pokemondata} />
            </div>
            <div className="h-max w-full" >
                <RightCard speciesdata={speciesdata} pokemondata={pokemondata} />
            </div>

        </div>
    )
}


export default ModalCard