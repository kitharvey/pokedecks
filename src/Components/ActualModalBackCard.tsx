import React, {useEffect} from 'react'
import {  getFlavorSpeech } from '../Functions/GlobalFunctions'
import { ModalCardProps } from './CardInterface'
import Evolution from './Evolution'
import FlexBetween from './FlexBetween'
import { useSpeechSynthesis } from 'react-speech-kit';
import Case from 'case'


const ActualModalBackCard: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData}) => {
const { speak, cancel, voices } = useSpeechSynthesis();
    useEffect(() => {
        let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

        const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
        console.log(Case.sentence(flavorText))
        timeOutID = setTimeout(() => {
            speak({
                text: "I am a robot.",
                voice: voices[5],
                pitch: .3,
                speaking: true
            })
        }, 1000)
        return () => {
                cancel()
                console.log("unmounted")
                clearTimeout(timeOutID)
        }
    }, [pokemonSpeciesData])

    return (
        <div className="h-full w-full p-2.5 fontSizeAdjust flex flex-col items-center justify-between" 
        style={{backgroundColor: "#eaeaea"}}
        >
        <div className="h-auto max-h-20 leading-tight p-2.5 text-xs" >{Case.sentence(pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
        
        <div className="flex flex-col bg-white p-2.5 w-full" >
            <FlexBetween
                category="Genus:"
                details={
                    <p>{Case.sentence(pokemonSpeciesData.genera.filter((entry) => entry.language.name === "en")[0].genus)}</p>
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
                    <div className="flex flex-col items-end" >
                    {pokemonData.abilities.map( (ability,index) => <p key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span className="text-xs" >{ability.is_hidden && "(Hidden Ability)"}</span> </p> )}
                    </div>
                }
            />
        </div>

        <Evolution pokemonSpeciesData={pokemonSpeciesData} />
    
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
        </div>
    </div>
    )
}


export default ActualModalBackCard