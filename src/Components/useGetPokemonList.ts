import { useEffect, useState } from 'react'
import { GetPokemonList } from './CardInterface';
import axios from 'axios'


export const useGetPokemonList = () => {
    const [result, setResult] = useState<GetPokemonList>()
    const fetchAPI = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0`)
      setResult( response.data )
      console.log(response.data)
    }
    

      useEffect( () => {
        fetchAPI()
      }, [])
    
    
      return result
}

