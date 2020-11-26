import { useEffect, useState } from 'react'
import { GetPokemonList } from './CardInterface';
import { Service } from './Service';
import axios from 'axios'


export const useGetPokemonList = () => {
    const [result, setResult] = useState<Service<GetPokemonList>>({
        status: 'loading'
      })
    // const [hasMore, setHasMore] = useState(false)


    // useEffect(() => {
    //   setResult({status: 'loading'})
    // }, [query])
    

      useEffect(() => {
        axios({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/pokemon/?limit=806&offset=0',
        }).then(response => {
          console.log(response.data.results.length)
          setResult({ status: 'loaded', payload: response.data })
        }).catch(error => {
          if (axios.isCancel(error)) return
          setResult({ status: 'error', error })
        })
      }, [])
    
      // console.log(result)
    
      return result
}

