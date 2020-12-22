import React, {useEffect, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { applySentenceCase, getFlavorSpeech } from '../Functions/GlobalFunctions';
import ModalCardWrapper from './ModalCardWrapper';
import CardLoader from '../Deck/CardLoader';
import ModalCardLoader from './ModalCardLoader';






const Modal: React.FC = () => {
    const { speak, cancel, voices } = useSpeechSynthesis();
    const {state, setState} = useContext(AppContext)
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
        } 
        return () => {
            cancel()
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
                {(pokemonData && pokemonSpeciesData)
                    ? <ModalCardWrapper pokemonData={pokemonData}  pokemonSpeciesData={pokemonSpeciesData} state={state} />
                    : <ModalCardLoader />
                }  
            </div>
        );
    }


export default Modal