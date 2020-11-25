import { useEffect, useState } from 'react';
import { Service } from './Service';
import { GetPokemonDataInterface } from './CardInterface';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const useGetPokemonData = (num: number) => {
  const [result, setResult] = useState<Service<GetPokemonDataInterface>>({
    status: 'loading'
  });



  useEffect(() => {
    // var interval = {
    //   limit: Math.random,
    //   offset: 34
    // }
    // P.getPokemonSpeciesList() // with Promise
    //     .then((response: any) => {
    //       // setResult({ status: 'loaded', payload: response })
    //       console.log(response)
    //     })
    //     .catch((error: any ) => {
    //       // setResult({ status: 'error', error })
    //       console.log(error)

    //     });
        
    P.getPokemonByName(num, function(response: any, error: any) { // with callback
      if(!error) {
        setResult({ status: 'loaded', payload: response })
      } else {
        setResult({ status: 'error', error })
      }
    });
  }, [num])

  console.log(result)

  return result;
};

export default useGetPokemonData;