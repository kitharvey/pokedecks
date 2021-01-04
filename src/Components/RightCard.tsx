import React from 'react'
import { ModalCardProps } from './CardInterface';
import Evolution from './Evolution';



const RightCard: React.FC<ModalCardProps> = ({speciesdata, pokemondata}) => {
        return (
            <div className="min-h-100 h-max w-96 p-4 bg-white">
                {(speciesdata && pokemondata) && 
                <div className="h-96 w-full flex flex-col items-center justify-between"> 
                    <p className="mr-auto text-xl font-bold" >Evolution</p>
                    <Evolution pokemonSpeciesData={speciesdata} />
                    <p className="mr-auto text-xl font-bold" >Stats</p>
                        <div className="flex justify-evenly p-2.5 w-full" >
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >HP</p>
                                    <p className="" >{pokemondata.stats[0].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >Atk</p>
                                    <p className="" >{pokemondata.stats[1].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >Def</p>
                                    <p className="" >{pokemondata.stats[2].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >Sp. Atk</p>
                                    <p className="" >{pokemondata.stats[3].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >Sp. Def</p>
                                    <p className="" >{pokemondata.stats[4].base_stat}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className=" font-bold" >Speed</p>
                                    <p className="" >{pokemondata.stats[5].base_stat}</p>
                                </div>
                        </div>
                </div>}
            </div>
        );
}


export default RightCard