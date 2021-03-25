import { SignInProps, UserProps } from '../InterfacesProps/Interfaces';
import axios from 'axios'
import { shuffle } from '../functions/GlobalFunctions';


const BACKEND_API = process.env.REACT_APP_BACKEND_API
// const BACKEND_API = 'http://localhost:5000'

export const fetchList = async () => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${807}&offset=0`)
  const shuffledData = shuffle(data.results)
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
  const {data} = await axios.post(`${BACKEND_API}/api/signin`, body)
  return data
}
export const deleteUser = async (body: SignInProps) => {
  const {uid, displayName} = body
  const {data} = await fetch(`${BACKEND_API}/api/delete`, {
    method: 'DELETE',
    body: JSON.stringify({uid, displayName})
  }).then(response => response.json())

  return data
}
export const patchFavorites = async (favorites: number[], id: string) => {
  const {data} = await axios.patch(`${BACKEND_API}/api/favorites/${id}`, {favorites})
  return data
}
export const patchScore = async (score: number, id: string) => {
  const {data} = await axios.patch(`${BACKEND_API}/api/score/${id}`, {score})
  return data
}
export const fetchUsersList = async () => {
  const {data} = await axios.get(`${BACKEND_API}/api/users`)
  const sortedData = data.sort( (a: UserProps, b: UserProps) => b.score - a.score )
  return sortedData
}
