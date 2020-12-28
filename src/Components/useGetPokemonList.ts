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

// const getID = (link: string) => {
//     const splitLink = link.split('/')
//     const IDString = parseInt(splitLink[splitLink.length-2])
//     return IDString
// }

export const useGetPokemonList = () => {
    const [result, setResult] = useState<GetPokemonList | null>(null)
    let unmounted = false;
    const numofPokemon = 807
      const cancelTokenSource = axios.CancelToken.source();
      useEffect( () => {
        const fetchAPI = async () => {
          try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${numofPokemon}&offset=0`, {
            cancelToken: cancelTokenSource.token
          } )
          // console.log(response.data)
          if(!unmounted) {
            // response.data.results.filter( (data: GetPokemonArrayInterface) => getID(data.url) <= 4)
            shuffle( response.data.results )
            setResult( response.data )
          }
        }catch (error) {
          if (axios.isCancel(error)) {
          } else {
              throw error
          }
        }

        }

        fetchAPI()
        return() => {
          unmounted = true
          setResult(null)
          cancelTokenSource.cancel()
        }
      }, [])
   
    
      return result
}

