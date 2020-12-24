import React, {useEffect, useContext, useState} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { applySentenceCase, getFlavorSpeech } from '../Functions/GlobalFunctions';
import ModalCardWrapper from './ModalCardWrapper';
import ModalCardLoader from './ModalCardLoader';
import {GetPokemonDataInterface, GetPokemonSpeciesDataInterface} from "./CardInterface"
let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

interface statePokemonProps {
    data: GetPokemonDataInterface
    species: GetPokemonSpeciesDataInterface
}




const Modal: React.FC = () => {
    const { speak, cancel, voices } = useSpeechSynthesis();
    const [statePokemon, setStatePokemon] = useState<statePokemonProps|null>(null)
    const {state} = useContext(AppContext)
    const pokemonData = useGetPokemonData(state.id)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.id)

    useEffect(() => {
        let mounted = true
        if(pokemonSpeciesData && pokemonData && mounted) {
            const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
            setStatePokemon({data: pokemonData, species: pokemonSpeciesData})
            timeOutID = setTimeout(() => {
                speak({
                    text: applySentenceCase(flavorText),
                    voice: voices[5],
                    pitch: .3,
                    speaking: true
                })
            }, 1000)
        }

        return () => {
            cancel()
            clearTimeout(timeOutID)
            setStatePokemon(null)
        }
    }, [pokemonSpeciesData, pokemonData])

        return (
            <div className="absolute w-full h-screen top-0 left-0 bg-white bg-opacity-10 z-100 backDrop flex items-center justify-center select-none">
                {(statePokemon) && <ModalCardWrapper pokemonData={statePokemon.data}  pokemonSpeciesData={statePokemon.species}/>}  
            </div>
        );
    }


export default Modal