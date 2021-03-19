import { NameURLInterface } from '../InterfacesProps/Interfaces';
import axios from 'axios'
import { shuffle } from '../functions/GlobalFunctions';




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
export const signUp = async (body: any) => {
  const {data} = await axios.post('http://localhost:5000/test/signup', body)
  return data
}
