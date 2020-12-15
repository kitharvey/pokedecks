import { useEffect, useState } from 'react';
// import { Service } from './Service';
import { GetPokemonDataInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import axios from 'axios'


export const useGetPokemonData = (name: string) => {
  const [result, setResult] = useState<GetPokemonDataInterface>()

    useEffect( () => {
      const fetchAPI = async (num: string) => {
        if(num !== undefined) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          setResult( response.data )
          // console.log( response.data )
        }
      }
      fetchAPI(name)
    }, [name])

  return result;
};
export const useGetPokemonSpeciesData = (name: string) => {
  const [result, setResult] = useState<GetPokemonSpeciesDataInterface>()

    useEffect( () => {
      const fetchAPI = async (num: string) => {
        if(num !== undefined) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
          setResult( response.data )
          // console.log( response.data )
        }
      }
      fetchAPI(name)
    }, [name])

  return result;
};
