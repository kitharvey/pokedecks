import React, {useEffect} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonSpeciesData} from './useGetPokemonData';

const Modal: React.FC = () => {
  const {state, setState} = React.useContext(AppContext)

  const pokemonData = useGetPokemonData(state)
  const pokemonSpeciesData = useGetPokemonSpeciesData(state)
    useEffect(() => {
        if(pokemonData) console.log(pokemonData)
    }, [pokemonData])
    useEffect(() => {
        if(pokemonSpeciesData) console.log(pokemonSpeciesData)
    }, [pokemonSpeciesData])

        return (
            <div className="absolute w-full h-full top-0 left-0 bg-transparent z-100 backDrop flex items-center justify-center select-none">
                <div className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm"  >
                    <svg className="fill-current text-current cursor-pointer transition duration-250 ease-in-out transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={ () => setState("")} >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Close)</span>
                </div>
                <div className="container">
                    {/* <Card name={state} /> */}
                </div>
            </div>
        );
}


export default Modal