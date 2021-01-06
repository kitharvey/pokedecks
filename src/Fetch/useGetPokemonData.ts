import { useEffect, useState } from 'react';
// import { Service } from './Service';
import { GetPokemonDataInterface, GetPokemonEvolutionChainInterface, GetPokemonSpeciesDataInterface } from '../InterfacesProps/Interfaces';
import axios from 'axios'

export const fetchPokemonData = async (id: number) => {
  console.log(id)
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data
}
export const fetchPokemonSpeciesData = async (id: number) => {
  console.log(id)
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  return data
}



export const useGetPokemonData = (id: number) => {
  const [result, setResult] = useState<GetPokemonDataInterface | null>(null)
  useEffect( () => {
      let unmounted = false;
      const cancelTokenSource = axios.CancelToken.source();
      const fetchAPI = async (id: number) => {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
              cancelToken: cancelTokenSource.token
            })
            if(!unmounted) setResult( response.data )
          } catch (error) {
            if (axios.isCancel(error)) {
            } else {
                throw error
            }
        }
          
        
      }
      if(id > 0) fetchAPI(id)
      return() => {
        unmounted = true
        setResult(null)
        cancelTokenSource.cancel()
      } 
    }, [id])

  return result;
};


export const useGetPokemonSpeciesData = (id: number) => {
  const [result, setResult] = useState<GetPokemonSpeciesDataInterface | null>(null)

    useEffect( () => {
      let unmounted = false;
      const cancelTokenSource = axios.CancelToken.source();

      const fetchAPI = async (id: number) => {
      
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
              cancelToken: cancelTokenSource.token
            } )
            if(!unmounted) setResult( response.data )
          }catch (error) {
            if (axios.isCancel(error)) {
            } else {
                throw error
            }
        }
        
        
      }
      if(id > 0) fetchAPI(id)
      return() => {
        unmounted = true
        setResult(null)
        cancelTokenSource.cancel()
      }
    }, [id])

  return result;
};


export const useGetPokemonEvolutionChain = (url: string) => {
  const [result, setResult] = useState<GetPokemonEvolutionChainInterface | null>(null)
  
  useEffect( () => {
      let unmounted = false;
      const cancelTokenSource = axios.CancelToken.source();

      const fetchAPI = async (url: string) => {

          try {
          const response = await axios.get(url, {
            cancelToken: cancelTokenSource.token
          } )
          if(!unmounted) setResult( response.data )
          }catch (error) {
            if (axios.isCancel(error)) {
            } else {
                throw error
            }
        }
        
      }
      fetchAPI(url)
      return() => {
        unmounted = true
        setResult(null)
        cancelTokenSource.cancel()
      }
    }, [url])

  return result;
};
