import { useEffect, useState } from 'react'
import { GetPokemonList } from './CardInterface';
import axios from 'axios'

const shuffle = (array: []) => {
        let m = array.length, t, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }

export const useGetPokemonList = () => {
    const [result, setResult] = useState<GetPokemonList>()
    
    const numofPokemon = 807

      useEffect( () => {
        const fetchAPI = async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`)
          // console.log(response.data)
          shuffle(response.data.results)
          setResult( response.data )
        }

        fetchAPI()
      }, [])
    
    
      return result
}

