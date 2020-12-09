import { useEffect, useState } from 'react'
import { GetPokemonList, GetPokemonArrayInterface } from './CardInterface';
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

const getID = (link: string) => {
    const splitLink = link.split('/')
    const IDString = parseInt(splitLink[splitLink.length-2])
    return IDString
}

export const useGetPokemonList = () => {
    const [result, setResult] = useState<GetPokemonList>()
    
    const numofPokemon = 807

      useEffect( () => {
        const fetchAPI = async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${numofPokemon}&offset=0`)
          // console.log(response.data)
          if(response) {
            // response.data.results.filter( (data: GetPokemonArrayInterface) => getID(data.url) <= 4)
            shuffle( response.data.results )
            setResult( response.data )
          }

        }

        fetchAPI()
      }, [])
    
    
      return result
}

