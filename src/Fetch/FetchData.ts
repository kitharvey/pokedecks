import { NameURLInterface } from '../InterfacesProps/Interfaces';
import axios from 'axios'
import { shuffle } from '../Functions/GlobalFunctions';




export const fetchList = async () => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${807}&offset=0`)
  const shuffledData: NameURLInterface[] = shuffle(data.results)
  return shuffledData
}

export const fetchPokemonData = async (id: number) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data
}
export const fetchPokemonSpeciesData = async (id: number) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  return data
}
