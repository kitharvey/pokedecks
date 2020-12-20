import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import { findColor, getTypeIcon } from './getTypeIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import egg from "../Assets/pokemon-egg.png"
import Card from '../Deck/Card';
import { AnimatePresence, motion } from 'framer-motion';

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

const PokemonDetails: React.FC<PokemonDetailsProps> = ({category, details}) => {
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
    return (
        <div className="h-96 w-80 p-2.5 overflow-y-scroll fontSizeAdjust hideScroll" 
            style={{backgroundColor: "#f5f1e3"}}
        >
            <div className="p-2.5" >
                <div className="flex justify-between" >
                <p className="uppercase" >{statePokemonData.name}</p>
                <p>#{getIDString(statePokemonData.id)}</p>
            </div>
            <div className="flex justify-between" >
                <img 
                    className="w-10"
                    src={state.sprite}
                />
                <div className="flex" >
                    {statePokemonData.types.map( (type,index) => <div className="m-0.5 flex items-center" key={index}  >  
                        <img  src={getTypeIcon(type.type.name)[1]} 
                            className="mr-0.5 w-4 h-4 rounded-full border-solid border-2 border-white" 
                            
                            draggable="false" 
                            onDragStart={ e => e.preventDefault()}  
                            alt={getTypeIcon(type.type.name)[0]}
                        />
                        <p>{type.type.name}</p>
                    </div>)}
                </div>
            </div>
            </div>

        <div className="flex flex-col bg-white p-2.5" >
            <PokemonDetails
                category="Genus:"
                details={
                    <p>{applySentenceCase(statePokemonSpecieData.genera.filter((entry) => entry.language.name === "en")[0].genus)}</p>
                }
            />
            <PokemonDetails
                category="Height:"
                details={
                    <p>{statePokemonData.height/10}m <span>({Math.floor(((statePokemonData.height/10) * 39.37)/12)}'{(((statePokemonData.height/10) * 39.37) % 12).toFixed(1)}")</span></p>
                }
            />
            <PokemonDetails
                category="Weight:"
                details={
                    <p>{statePokemonData.weight/10}kg <span>({((statePokemonData.weight/10) * 2.2).toFixed(1)} lbs)</span></p>
                }
            />
            <PokemonDetails
                category="Base Happiness:"
                details={
                    <p>{statePokemonSpecieData.base_happiness}</p>
                }
            />
            <PokemonDetails
                    category="Base Experience:"
                    details={
                        <p>{statePokemonData.base_experience}</p>
                    }
                />
            <PokemonDetails
                    category="Capture Rate:"
                    details={
                        <p>{statePokemonSpecieData.capture_rate} <span className="text-xs" >({((statePokemonSpecieData.capture_rate / 255)*100).toFixed(1)}%)</span></p>
                    }
                />
            <PokemonDetails
                    category="Growth Rate:"
                    details={
                        <p>{statePokemonSpecieData.growth_rate.name}</p>
                    }
                />
        </div>


        <div className="h-auto leading-tight p-2.5" >{applySentenceCase(statePokemonSpecieData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
        {/* <div className="w-full flex flex-row justify-between flex-wrap p-2.5" >
            <div className="" >Abilities:</div>
            {statePokemonData.abilities.map( (ability,index) => <div className="mr-1" key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span className="text-xs" >{ability.is_hidden && "(Hidden Ability)"}</span> </div> )}
        </div> */}
    </div>
    )
}

const ModalCard: React.FC<ModalCardProps> = ({statePokemonSpecieData, statePokemonData, state}) => {
    const messages = [
        {
            id: 0,
            content: "test"
        },
        {
            id: 1,
            content: "test1"
        },
        {
            id: 2,
            content: "test2"
        },
    ]
    return (
        <div className="w-max h-auto flex">
            <div className="m-3">
                <Card id={state.id} />
            </div>
            <div className="m-3">
                <AnimatePresence>
                    {messages.map(({ id, content }) => (
                    <motion.li
                        key={id}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {content}
                    </motion.li>
                    ))}
                </AnimatePresence>
            </div>

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