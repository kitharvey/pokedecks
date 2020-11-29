import React, { useEffect, useRef, useState } from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
import { GetPokemonDataInterface } from './CardInterface';
const ColorThief = require('color-thief');
interface RandomShits{
  link: string
  name: string
}

const findColor = (color: string) => {
  const colors = {
    normal: "#C4C4A4",
    fire: "#F08030",
    fighting: "#C03028",
    water: "#6890F0",
    flying: "#A890F0",
    grass: "#78C850",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    bug: "#A8B820",
    dragon: "#7038F8",
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  const getColor = Object.entries(colors).filter(
    ([key, _]) => key === color
  )
  // const main_types = Object.keys(colors);
  // const type = main_types.find(key => key === color)
  // if (type) getColor = colors[type]
  return getColor[0]
}

const getImageSource = (link: string) => {
  const id = getID(link)
  return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + id + ".png"
}


const getID = (link: string) => {
  if(link !== undefined) {
          const splitLink = link.split('/')
          const IDString = parseInt(splitLink[splitLink.length-2])
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
  const imgRef = useRef(null)


  useEffect(() => {
    if(pokemon !== undefined) setPokemondata(pokemon)  
    //  let imgSrc = new Image
    // imgSrc.src = getImageSource(link)
      
      // console.log(domcol)
      if(imgRef.current) {
        const colorThief = new ColorThief();
        const domcol = colorThief.getColor(imgRef.current.src)

      }
    // if(pokemondata !== undefined) {
    //   const getColor = findColor(pokemondata.types[0].type.name)
    //   console.log(getColor[1])
    // }
   }, [pokemon])

  // useEffect(() => {
  //   if(pokemondata !== undefined) console.log(findColor(pokemondata.types[0].type.name))
  //  [pokemondata])

  return (
    <div className="card-wrapper" >
      {pokemondata &&
          <div className="card" style={{backgroundColor: findColor(pokemondata.types[0].type.name)[1]}}>
            <p className="pokemon-name" >{capitalizeFirstLetter(name)}</p>
            <img src={getImageSource(link)} alt={name} className="sprite" ref={imgRef}  />
            <div className="pokemon-ability" >
               {pokemondata.abilities.map( (ability,index) => <p key={index} >{ability.ability.name}</p> )}
            </div>
            <div className="pokemon-type" >
              {pokemondata.types.map( (type,index) => <p key={index} style={{color: findColor(type.type.name)[1]}}  >{type.type.name}</p> )}
            </div>
          </div>
}
    </div>
  );
}


export default Card