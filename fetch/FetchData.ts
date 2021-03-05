import axios from 'axios'

export const fetchList = async (link: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/${link}/?limit=${807}&offset=0`)
  return data.results
}

export const fetchPokemonData = async (id: string) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return data
}
export const fetchPokemonSpeciesData = async (id: string) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  return data
}
export const fetchEvolutionData = async (link: string) => {
  const {data} = await axios.get(link)
  return data
}
