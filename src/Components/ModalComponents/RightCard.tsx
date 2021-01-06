import React from 'react'
import { ModalCardProps } from '../../InterfacesProps/Interfaces';
import Evolution from './Evolution';



const RightCard: React.FC<ModalCardProps> = ({speciesdata, pokemondata}) => {
        return (
            <div className="h-100 w-96 p-4 bg-white">
                {(speciesdata && pokemondata) && 
                <div className="h-full w-full flex flex-col items-center justify-between">
                    <div className="w-full" >
                        <p className="mr-auto text-xl font-bold" >Evolution</p>
                        <Evolution pokemonSpeciesData={speciesdata} />
                    </div>
                    <div className="w-full">
                        <p className="mr-auto text-xl font-bold" >Stats</p>
                        <div className="grid grid-cols-3 gap-y-5 w-full mt-4" >
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >HP</p>
                                    <p className="text-sm" >{pokemondata.stats[0].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >Atk</p>
                                    <p className="text-sm" >{pokemondata.stats[1].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >Def</p>
                                    <p className="text-sm" >{pokemondata.stats[2].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >Sp. Atk</p>
                                    <p className="text-sm" >{pokemondata.stats[3].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >Sp. Def</p>
                                    <p className="text-sm" >{pokemondata.stats[4].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-semibold" >Speed</p>
                                    <p className="text-sm" >{pokemondata.stats[5].base_stat}</p>
                                </div>
                        </div>
                    </div>

                </div>}
            </div>
        );
}


export default RightCard