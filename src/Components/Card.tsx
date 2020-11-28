import React, { useEffect, useState } from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
import { GetPokemonDataInterface } from './CardInterface';
interface RandomShits{
  link: string
  name: string
}

const getImageSource = (link: string) => {
  const id = getID(link)
  if(id !== undefined) return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + id + ".png"
}
// const getImageSource = (name: string) => {
//   console.log(name)
//   const newName = name.split(" ").join("-")
//   if(newName === "minior-red-meteor") return "https://img.pokemondb.net/sprites/home/normal/minior-meteor.png"
//   if(newName === "mimikyu-disguised") return "https://img.pokemondb.net/sprites/home/normal/mimikyu.png"
//   return "https://img.pokemondb.net/sprites/home/normal/" + newName + ".png"
// }

const getID = (link: string) => {
  if(link !== undefined) {
          const splitLink = link.split('/')
          const IDString = parseInt(splitLink[splitLink.length-2])
          console.log(IDString)
          if(IDString < 10) return '00' + IDString
          if(IDString >= 10 && IDString < 100) return '0' + IDString
          if(IDString >= 100 ) return '' + IDString
  }
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Card: React.FC<RandomShits>  = ({link, name}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface>()
  const pokemon = useGetPokemonData(name)

  useEffect(() => {
    if(pokemon !== undefined) setPokemondata(pokemon)
  }, [pokemon])

  return (
    <div className="card-wrapper" >
          <div className="card" >
            <p className="pokemon-name" >{capitalizeFirstLetter(name)}</p>
            <img src={getImageSource(link)} alt={name} className="sprite" />
            {pokemondata && pokemondata.abilities.map( ability => <p>{ability.ability.name}</p> )}
          </div>
    </div>
  );
}


export default Card