import { NameURLInterface, SignInProps } from '../InterfacesProps/Interfaces';
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
export const signIn = async (body: SignInProps) => {
  const {data} = await axios.post(`http://localhost:5000/test/signin`, body)
  return data
}
export const patchFavorites = async (favorites: number[], id: string) => {
  const {data} = await axios.patch(`http://localhost:5000/test/${id}`, {favorites})
  return data
}
