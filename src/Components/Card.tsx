import React from 'react'
// import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
interface RandomShits{
  id: string | undefined
  name: string
}

// const getImageSource = (id: string | undefined) => {
//   return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + id + ".png"
// }
const getImageSource = (name: string) => {
  console.log(name)
  const newName = name.split(" ").join("-")
  if(newName === "minior-red-meteor") return "https://img.pokemondb.net/sprites/home/normal/minior-meteor.png"
  if(newName === "mimikyu-disguised") return "https://img.pokemondb.net/sprites/home/normal/mimikyu.png"
  return "https://img.pokemondb.net/sprites/home/normal/" + newName + ".png"
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Card: React.FC<RandomShits>  = ({id, name}) => {
  return (
    <div className="card-wrapper" >
          <div className="card" >
            <p className="pokemon-name" >{capitalizeFirstLetter(name)}</p>
            <img src={getImageSource(name)} alt={name} className="sprite" />
          </div>
    </div>
  );
}


export default Card