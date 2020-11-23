import { useEffect, useState } from 'react';
import { Service } from './Service';
import { GetPokemonArrayInterface } from './CardInterface';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const useGetPokemonData = () => {
  const [result, setResult] = useState<Service<GetPokemonArrayInterface>>({
    status: 'loading'
  });




  useEffect(() => {
    // var interval = {
    //   limit: Math.random,
    //   offset: 34
    // }
   
    // P.getPokemonsList() // with Promise
    //     .then((response: any) => {
    //       setResult({ status: 'loaded', payload: response })
    //     })
    //     .catch((error: any ) => {
    //       setResult({ status: 'error', error })
    //     });
        
    P.getPokemonByName(Math.floor(Math.random() * 893 + 1), function(response: any, error: any) { // with callback
      if(!error) {
        setResult({ status: 'loaded', payload: response })
      } else {
        setResult({ status: 'error', error })
      }
    });
  }, [])

  console.log(result)

  return result;
};

export default useGetPokemonData;