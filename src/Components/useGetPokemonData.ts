import { useEffect, useState } from 'react';
// import { Service } from './Service';
import { GetPokemonDataInterface, GetPokemonEvolutionChainInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import axios from 'axios'


export const useGetPokemonData = (id: number) => {
  const [result, setResult] = useState<GetPokemonDataInterface>()

    useEffect( () => {
      const fetchAPI = async (id: number) => {
        if(id) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          setResult( response.data )
          // console.log( response.data )
        }
      }
      fetchAPI(id)
    }, [id])

  return result;
};
export const useGetPokemonSpeciesData = (id: number) => {
  const [result, setResult] = useState<GetPokemonSpeciesDataInterface>()

    useEffect( () => {
      const fetchAPI = async (id: number) => {
        if(id) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
          setResult( response.data )
          // console.log( response.data )
        }
      }
      fetchAPI(id)
    }, [id])

  return result;
};
export const useGetPokemonEvolutionChain = (url: string) => {
  const [result, setResult] = useState<GetPokemonEvolutionChainInterface>()

    useEffect( () => {
      const fetchAPI = async (url: string) => {
        if(url) {
          const response = await axios.get(url)
          setResult( response.data )
        }
      }
      fetchAPI(url)
    }, [url])

  return result;
};
