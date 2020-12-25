import React, {useContext, useEffect} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import { applySentenceCase, getFlavorSpeech } from '../Functions/GlobalFunctions';
import ModalCardWrapper from './ModalCardWrapper';
import { AppContext } from './Page';
import { useGetPokemonData, useGetPokemonSpeciesData } from './useGetPokemonData';
let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

const Modal: React.FC = () => {
    const {state} = useContext(AppContext)
    const pokemonData = useGetPokemonData(state.id)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.id)
    const { speak, cancel, voices } = useSpeechSynthesis();
    useEffect(() => {
        if(pokemonSpeciesData && pokemonData) {
            const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
            clearTimeout(timeOutID)
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
            if(pokemonSpeciesData && pokemonData) {
                cancel()
                clearTimeout(timeOutID)
            }

        }
    }, [pokemonSpeciesData, pokemonData])

        return (
            <div className="absolute w-full h-screen top-0 left-0 bg-white bg-opacity-10 z-100 backDrop flex items-center justify-center select-none">
                 <ModalCardWrapper />
            </div>
        );
    }


export default Modal