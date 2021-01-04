import React, {useEffect, useState} from 'react'
import {  getFlavorSpeech } from '../Functions/GlobalFunctions'
import { ModalCardProps, ModalCardStateProps } from './CardInterface'
import Evolution from './Evolution'
import FlexBetween from './FlexBetween'
import { useSpeechSynthesis } from 'react-speech-kit';
import Case from 'case'




const ActualLeftCard: React.FC<ModalCardProps | null> = ({speciesdata, pokemondata}) => {
    const [cardState, setCardState] = useState<ModalCardStateProps>({speciesData: null, pokemonData: null})
    const {speciesData, pokemonData} = cardState
// const { speak, cancel, voices } = useSpeechSynthesis();
    // useEffect(() => {

    //     const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
    //     // console.log(Case.sentence(flavorText))
    //         speak({
    //             text: "I am a robot.",
    //             voice: voices[5],
    //             pitch: .3,
    //             speaking: true
    //         })
    //     return () => {
    //             cancel()
    //     }
    // }, [pokemonSpeciesData])


    useEffect(() => {
        if(speciesdata && pokemondata)setCardState({speciesData: speciesdata, pokemonData: pokemondata})

        return () => setCardState({speciesData: null, pokemonData: null})
    }, [speciesdata, pokemondata])

    return (
        <div className="h-full w-full p-4 bg-white flex flex-col items-center justify-between">
            {(speciesData && pokemonData) && <>
            <div className="w-full h-max" >
                <p className="mr-auto font-bold" >Bio</p>
                <div className="h-auto mt-4 leading-tight" >{Case.sentence(speciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
                
                <div className="flex flex-col w-full mt-4" >
                    <FlexBetween
                        category="Genus:"
                        details={
                            <p>{Case.capital(speciesData.genera.filter((entry) => entry.language.name === "en")[0].genus)}</p>
                        }
                    />
                    <FlexBetween
                        category="Height:"
                        details={
                            <p>{pokemonData.height/10}m <span>({Math.floor(((pokemonData.height/10) * 39.37)/12)}'{(((pokemonData.height/10) * 39.37) % 12).toFixed(1)}")</span></p>
                        }
                    />
                    <FlexBetween
                        category="Weight:"
                        details={
                            <p>{pokemonData.weight/10}kg <span>({((pokemonData.weight/10) * 2.2).toFixed(1)} lbs)</span></p>
                        }
                    />
                    <FlexBetween
                        category="Abilities:"
                        details={
                            <div className="flex flex-col items-start" >
                            {pokemonData.abilities.map( (ability,index) => <p key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span className="text-xs" >{ability.is_hidden && "(Hidden Ability)"}</span> </p> )}
                            </div>
                        }
                    />
                </div>
            </div>
      

            <div className="w-full h-max mt-4" >
            <p className="mr-auto font-bold" >Training</p>
                    <div className="flex flex-col w-full mt-4" >
                        <FlexBetween
                            category="Base Exp:"
                            details={
                                <p>{pokemonData.base_experience}</p>
                            }
                        />
                        <FlexBetween
                            category="Base Happiness:"
                            details={
                                <p>{speciesData.base_happiness}</p>
                            }
                        />
                        <FlexBetween
                            category="Catch Rate:"
                            details={
                                <p>{speciesData.capture_rate} <span className="text-xs" >({((speciesData.capture_rate / 255)*100).toFixed(1)}%)</span></p>
                            }
                        />
                        <FlexBetween
                            category="Growth Rate:"
                            details={
                                <p>{speciesData.growth_rate.name}</p>
                            }
                        />
                    </div>
            </div>
            </>
}

        {/* <Evolution pokemonSpeciesData={pokemonSpeciesData} />
    
        <div className="flex justify-evenly bg-white p-2.5 w-full" >
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >HP</p>
                    <p className="text-xs" >{pokemonData.stats[0].base_stat}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >Atk</p>
                    <p className="text-xs" >{pokemonData.stats[1].base_stat}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >Def</p>
                    <p className="text-xs" >{pokemonData.stats[2].base_stat}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >Sp. Atk</p>
                    <p className="text-xs" >{pokemonData.stats[3].base_stat}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >Sp. Def</p>
                    <p className="text-xs" >{pokemonData.stats[4].base_stat}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold" >Speed</p>
                    <p className="text-xs" >{pokemonData.stats[5].base_stat}</p>
                </div>
        </div> */}
    </div>
    )
}


export default ActualLeftCard