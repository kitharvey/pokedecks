import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonEvolutionChain, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import { findColor, getTypeIcon } from './getTypeIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import egg from "../Assets/pokemon-egg.png"
import Card from '../Deck/Card';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
interface ModalCardProps{
    statePokemonSpecieData: GetPokemonSpeciesDataInterface
    statePokemonData: GetPokemonDataInterface
    state: {
        sprite: string,
        id: number
    }
}


const applySentenceCase = (str: string) => {
    const text = str.replace(/\r?\n|\r/g, " ")
    return text.replace(/.+?[\.\?\!](\s|$)/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const capitalizeFirstLetter = (string: string) => {
    const newName = string.split("-").join(" ")
    return newName.charAt(0).toUpperCase() + newName.slice(1);
}

const getFlavorSpeech = (pokemonSpeciesData: GetPokemonSpeciesDataInterface, pokemonData: GetPokemonDataInterface) => {
    const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0]
    const types = pokemonData.types.map(type => type.type.name)
    const legend = pokemonSpeciesData.is_legendary ? " legendary " : ""
    const mythic = pokemonSpeciesData.is_mythical ? " mythical " : ""
    const text = pokemonData.name + ". " + legend + mythic + types.join(" ") + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ")
    return text
}

const getIDString = (id: number) => {
    if(id < 10) return '00' + id
    if(id >= 10 && id < 100) return '0' + id
    if(id >= 100 ) return '' + id
}

type PokemonDetailsProps = {
    category: string;
    details: React.ReactNode;
};

const FlexBetween: React.FC<PokemonDetailsProps> = ({category, details}) => {
    return (
        <div className="w-full flex justify-between">
            <p>{category}</p>
            <div>
                {details}
            </div>
        </div>
    )
}  


const BackCard: React.FC<ModalCardProps> = ({statePokemonSpecieData, statePokemonData, state}) => {
    const pokemonEvolutionData = useGetPokemonEvolutionChain(statePokemonSpecieData.evolution_chain.url)
    useEffect(() => {
        console.log(pokemonEvolutionData)
    },[])
    return (
        <div className="h-96 w-80 p-2.5 overflow-y-scroll fontSizeAdjust hideScroll flex flex-col items-center justify-between" 
            style={{backgroundColor: "#f5f1e3"}}
        >
            <div className="h-auto leading-tight p-2.5" >{applySentenceCase(statePokemonSpecieData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
            
            <div className="flex flex-col bg-white p-2.5 w-full" >
                <FlexBetween
                    category="Genus:"
                    details={
                        <p>{applySentenceCase(statePokemonSpecieData.genera.filter((entry) => entry.language.name === "en")[0].genus)}</p>
                    }
                />
                <FlexBetween
                    category="Height:"
                    details={
                        <p>{statePokemonData.height/10}m <span>({Math.floor(((statePokemonData.height/10) * 39.37)/12)}'{(((statePokemonData.height/10) * 39.37) % 12).toFixed(1)}")</span></p>
                    }
                />
                <FlexBetween
                    category="Weight:"
                    details={
                        <p>{statePokemonData.weight/10}kg <span>({((statePokemonData.weight/10) * 2.2).toFixed(1)} lbs)</span></p>
                    }
                />
                <FlexBetween
                    category="Abilities:"
                    details={
                        <div className="flex flex-col items-end" >
                        {statePokemonData.abilities.map( (ability,index) => <p key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span className="text-xs" >{ability.is_hidden && "(Hidden Ability)"}</span> </p> )}
                        </div>
                    }
                />
            </div>

            <div className="grid grid-cols-6 gap-1 bg-white p-2.5 w-full" >
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >HP</p>
                        <p className="text-xs" >{statePokemonData.stats[0].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Atk</p>
                        <p className="text-xs" >{statePokemonData.stats[1].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Def</p>
                        <p className="text-xs" >{statePokemonData.stats[2].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Sp. Atk</p>
                        <p className="text-xs" >{statePokemonData.stats[3].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Sp. Def</p>
                        <p className="text-xs" >{statePokemonData.stats[4].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Speed</p>
                        <p className="text-xs" >{statePokemonData.stats[5].base_stat}</p>
                    </div>
            </div>
        </div>
    )
}

const ModalCard: React.FC<ModalCardProps> = ({statePokemonSpecieData, statePokemonData, state}) => {

    return (
        <div className="w-max h-auto flex">
             <Flippy
                flipOnHover={true}
                flipDirection="horizontal"
            >
                <FrontSide style={{padding: 0}} >
                    <Card id={state.id} />
                </FrontSide>
                <BackSide style={{padding: 0}} >
                    <BackCard statePokemonSpecieData={statePokemonSpecieData} statePokemonData={statePokemonData} state={state} />
                </BackSide>
            </Flippy>
    </div>
    )
}




const Modal: React.FC = () => {
    const { speak, cancel, voices } = useSpeechSynthesis();
    const {state, setState} = useContext(AppContext)
    const [statePokemonData, setPokemonData] = useState<GetPokemonDataInterface | null>(null)
    const [statePokemonSpecieData, setPokemonSpecieData] = useState<GetPokemonSpeciesDataInterface | null>(null)
    const pokemonData = useGetPokemonData(state.id)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.id)

    useEffect(() => {
        if(pokemonSpeciesData && pokemonData) {
            let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)
            clearTimeout(timeOutID)
            const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
            timeOutID = setTimeout(() => {
                speak({
                    text: applySentenceCase(flavorText),
                    voice: voices[5],
                    pitch: .3,
                    speaking: true
                })
            }, 1000)
            setPokemonData(pokemonData)
            setPokemonSpecieData(pokemonSpeciesData)
            console.log(pokemonSpeciesData)
        } 
        return () => {
            cancel()
            setPokemonData(null)
            setPokemonSpecieData(null)
        }
    }, [pokemonSpeciesData])

        return (
            <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-10 z-100 backDrop flex items-center justify-center select-none">
                <div className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm"  >
                    <svg className="fill-current text-current cursor-pointer transition duration-250 ease-in-out transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={ () => setState({id: 0, sprite: ""})} >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Close)</span>
                </div>
                {(statePokemonData && statePokemonSpecieData)
                    ? <ModalCard statePokemonData={statePokemonData}  statePokemonSpecieData={statePokemonSpecieData} state={state} />
                    : <div>Loading...</div>
                }  
            </div>
        );
    }


export default Modal