import { useEffect, useState } from 'react';
// import { Service } from './Service';
import { GetPokemonDataInterface, GetPokemonEvolutionChainInterface, GetPokemonSpeciesDataInterface } from './CardInterface';
import axios from 'axios'



export const useGetPokemonData = (id: number) => {
  const [result, setResult] = useState<GetPokemonDataInterface | null>(null)
  const cancelTokenSource = axios.CancelToken.source();
    useEffect( () => {
      const fetchAPI = async (id: number) => {
        if(id) {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
              cancelToken: cancelTokenSource.token
            })
            setResult( response.data )
          } catch (err) {
            setResult(null)
          }
          
        }
      }
      fetchAPI(id)
      return() => {
        setResult(null)
        cancelTokenSource.cancel()
      } 
    }, [id])

  return result;
};


export const useGetPokemonSpeciesData = (id: number) => {
  const [result, setResult] = useState<GetPokemonSpeciesDataInterface | null>(null)
  const cancelTokenSource = axios.CancelToken.source();

    useEffect( () => {
      const fetchAPI = async (id: number) => {
        if(id) {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
              cancelToken: cancelTokenSource.token
            } )
            setResult( response.data )
          } catch (err) {
            setResult(null)
          }
        }
        
      }
      fetchAPI(id)
      return() => {
        setResult(null)
        cancelTokenSource.cancel()
      }
    }, [id])

  return result;
};


export const useGetPokemonEvolutionChain = (url: string) => {
  const [result, setResult] = useState<GetPokemonEvolutionChainInterface | null>(null)
  const cancelTokenSource = axios.CancelToken.source();

    useEffect( () => {
      const fetchAPI = async (url: string) => {
        if(url) {
          try {
          const response = await axios.get(url, {
            cancelToken: cancelTokenSource.token
          } )
          setResult( response.data )
          }catch (err) {
            setResult(null)
          }
        }
      }
      fetchAPI(url)
      return() => {
        setResult(null)
        cancelTokenSource.cancel()
      }
    }, [url])

  return result;
};
