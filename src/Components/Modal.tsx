import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface } from './CardInterface';

const Modal: React.FC = () => {
    const { speak, cancel, voices } = useSpeechSynthesis();
    const {state, setState} = useContext(AppContext)
    const [statePokemonData, setPokemonData] = useState<GetPokemonDataInterface | null>(null)
    const [statePokemonSpecieData, setPokemonSpecieData] = useState<GetPokemonSpeciesDataInterface | null>(null)
    const pokemonData = useGetPokemonData(state)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state)
    const [datatext, setDatatext] = useState<string>("")

    // useEffect(() => {
    //     if(pokemonData) console.log(pokemonData)
    // }, [pokemonData])

    const applySentenceCase = (str: string) => {
        return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


    useEffect(() => {
        if(pokemonSpeciesData && pokemonData) {
            const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0]
            const types = pokemonData.types.map(type => type.type.name)
            const text = pokemonData.name + ". " + types.join(" ") + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ")
            setDatatext(applySentenceCase(text))
            speak({
                text: applySentenceCase(text),
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
            setDatatext("")
        }
    }, [pokemonSpeciesData, pokemonData])

        return (
            <div className="absolute w-full h-full top-0 left-0 bg-transparent z-100 backDrop flex items-center justify-center select-none">
                <div className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm"  >
                    <svg className="fill-current text-current cursor-pointer transition duration-250 ease-in-out transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={ () => setState(0)} >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Close)</span>
                </div>
                {(statePokemonData && statePokemonSpecieData) && 
                    <div className="container">
                        <p>{statePokemonSpecieData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text.replace(/\r?\n|\r/g, " ")}</p>
                        <p>catch rate: {Math.round((statePokemonSpecieData.capture_rate / 255)*100)}%</p>
                    </div>
                }  
                
            </div>
        );
    }


export default Modal