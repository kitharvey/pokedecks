import { useEffect, useState } from 'react'
import { GetPokemonArrayInterface } from './CardInterface';
import { Service } from './Service';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

interface GetPokemonList {
  results: GetPokemonArrayInterface[]
}

export const useGetPokemonList = () => {
    const [result, setResult] = useState<Service<GetPokemonList>>({
        status: 'loading'
      });

      useEffect(() => {
        const interval = {
          offset: 0,
          // offset: Math.ceil(Math.random() * 809 - 11),
          limit: 806,
        }
        P.getPokemonsList(interval) // with Promise
            .then((response: any) => {
              setResult({ status: 'loaded', payload: response })
            })
            .catch((error: any ) => {
              setResult({ status: 'error', error })
    
            });
      }, [])
    
      console.log(result)
    
      return result;
}


