import { useEffect, useState } from 'react';
// import { Service } from './Service';
import { GetPokemonDataInterface } from './CardInterface';
import axios from 'axios'


const useGetPokemonData = (name: string) => {
  const [result, setResult] = useState<GetPokemonDataInterface>()



  const fetchAPI = async (num: string) => {
    if(num !== undefined) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setResult( response.data )
      console.log( response.data )
    }
  }
  

    useEffect( () => {
      fetchAPI(name)
    }, [name])

  return result;
};

export default useGetPokemonData;