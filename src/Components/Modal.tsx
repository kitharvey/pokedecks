import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import { findColor, getTypeIcon } from './getTypeIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import egg from "../Assets/pokemon-egg.png"

interface ModalCardProps{
    statePokemonSpecieData: GetPokemonSpeciesDataInterface
    statePokemonData: GetPokemonDataInterface
    sprite: string
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


const ModalCard: React.FC<ModalCardProps> = ({statePokemonSpecieData, statePokemonData, sprite}) => {
    return (
        <div className="w-3/4 flex">
                    <div  className="w-52 h-52 rounded-lg p-2.5 shadow-inner relative m-2.5" 
                        style={{backgroundColor: findColor(statePokemonData.types[0].type.name)[1]}} 
                    >
                        <div className="w-44 h-auto absolute left-1/2 bottom-2.5 transform -translate-x-1/2 translate-y-1/4"  >
                        <LazyLoadImage
                            alt={statePokemonData.name}
                            effect="black-and-white"
                            threshold={10}
                            src={sprite}
                            placeholderSrc={egg}
                            draggable="false" 
                            onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} 
                        />
                        </div>
                        <div className=" w-4/5 absolute top-2.5 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-2xl cursor-pointer hover:text-opacity-50 leading-none">
                            {capitalizeFirstLetter(statePokemonData.name)}
                        </div>
                    </div>
            <div className="rounded-lg p-2.5 relative m-2.5" >
                <div className="flex flex-col" >
                    <h2>About</h2>
                    <p>{applySentenceCase(statePokemonSpecieData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</p>
                    <div className="flex flex-col" >
                            {statePokemonData.types.map( (type,index) => <div className="mr-1 flex items-center" key={index}  > 
                                                                            <img  src={getTypeIcon(type.type.name)[1]} 
                                                                                className="w-8 mr-1" 
                                                                                draggable="false" 
                                                                                onDragStart={ e => e.preventDefault()}  
                                                                                alt={getTypeIcon(type.type.name)[0]}
                                                                            /> 
                                                                            <span>{getTypeIcon(type.type.name)[0]}</span>
                                                                        </div>
                                                                    )}
                    </div>
                    <div className="flex flex-col" >
                        {statePokemonData.abilities.map( (ability,index) => <p key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span>{ability.is_hidden && "(Hidden Ability)"}</span> </p> )}
                    </div>
                </div>

                <p>capture rate: {statePokemonSpecieData.capture_rate} <span className="text-xs" >{((statePokemonSpecieData.capture_rate / 255)*100).toFixed(1)}%</span></p>
                <p></p>
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




    const getFlavorSpeech = (pokemonSpeciesData: GetPokemonSpeciesDataInterface, pokemonData: GetPokemonDataInterface) => {
        const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0]
        const types = pokemonData.types.map(type => type.type.name)
        const text = pokemonData.name + ". " + types.join(" ") + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ")

        return text
    }


    useEffect(() => {
        if(pokemonSpeciesData && pokemonData) {
            const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
            speak({
                text: applySentenceCase(flavorText),
                voice: voices[5],
                pitch: .3
            })
            console.log(pokemonSpeciesData)
            console.log(pokemonData)
            setPokemonData(pokemonData)
            setPokemonSpecieData(pokemonSpeciesData)
        } 
        return () => {
            cancel()
        }
    }, [pokemonSpeciesData])

        return (
            <div className="absolute w-full h-full top-0 left-0 bg-transparent z-100 backDrop flex items-center justify-center select-none">
                <div className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm"  >
                    <svg className="fill-current text-current cursor-pointer transition duration-250 ease-in-out transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={ () => setState({id: 0, sprite: ""})} >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Close)</span>
                </div>
                {(statePokemonData && statePokemonSpecieData)
                    ? <ModalCard statePokemonData={statePokemonData}  statePokemonSpecieData={statePokemonSpecieData} sprite={state.sprite} />
                    : <div>Loading...</div>
                }  
                
            </div>
        );
    }


export default Modal