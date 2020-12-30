import { NameURLInterface } from './CardInterface';
import axios from 'axios'
import { shuffle } from '../Functions/GlobalFunctions';




export const fetchList = async () => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${807}&offset=0`)
  const shuffledData: NameURLInterface[] = shuffle(data.results)
  return shuffledData
}

