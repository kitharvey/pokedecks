import React, { useEffect, useState } from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
import { GetPokemonDataInterface } from './CardInterface';
import logo from "../Assets/pokemon-logo.svg"
import Trail from './Trail';
import getTypeIcon from './getTypeIcon';
interface CardInterface{
  link: string
  name: string
  index: number
}
interface ActualCardInterface{
  pokemondata: GetPokemonDataInterface
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


const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata, link, name}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const sprite = getImageSource(link) 
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  useEffect(() => {
    console.log(getTypeIcon(pokemondata.types[0].type.name)[1])
  }, [pokemondata])

  return (
    <div className={`rounded-lg pokemon-card ${isClicked ? "isClicked" : ""}`}  
      style={{backgroundColor: findColor(pokemondata.types[0].type.name)[1]}} 
      onClick={handleClick}>
      <div className="bg-black bg-opacity-10 w-full h-auto rounded-lg p-3 shadow-inner relative " >
        {sprite && <img src={sprite} alt={name} draggable="false" onDragStart={ e => e.preventDefault()} className="sprite my-4 mx-auto"  /> }
        <p className="absolute top-2.5 right-2.5 text-black text-opacity-50 font-black" >#{getID(link)}</p>
        <div className="flex absolute bottom-0 left-2.5 transform translate-y-1/2" >
          {/* {pokemondata.types.map( (type,index) => <div className="text-black text-opacity-50 font-black mr-1" key={index}>{type.type.name}</div> )} */}
          {pokemondata.types.map( (type,index) => <img src={getTypeIcon(type.type.name)[1]} className="mr-2 w-8" key={index} alt={getTypeIcon(type.type.name)[0]}/>)}
        </div>
      </div>
      <h3 className="pokemon-name" >{capitalizeFirstLetter(name)}</h3>
      <div className="flex flex-wrap" >
        {pokemondata.abilities.map( (ability,index) => <div className="type" key={index}>{ability.ability.name}</div> )}
        {/* {pokemondata.stats.map( (stat,index) => <div className="type" key={index}>{stat.base_stat}</div> )} */}
      </div>

  </div>
  )
}

//height
//weight
//type
//hp
//ability

const CardLoader: React.FC = () => {
  return (
  <div className="h-full w-full bg-gray-300 rounded-xl p-2.5 relative z-10 flex flex-col justify-between" >
    <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-3/4"></div>
    <img src={logo} draggable="false" onDragStart={ e => e.preventDefault()} className="poke-logo animate-pulse" alt="poke-logo" />
    <div className="flex" >
      <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-1/4 mr-2.5"></div>
      <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-1/4"></div>
    </div>
  </div>
  )
}


const Card: React.FC<CardInterface>  = ({link, name, index}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface>()
  const [isLoader, setIsLoader] = useState<boolean>(true)
  const pokemon = useGetPokemonData(name)
  var LoadtimeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000), EggtimeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000), LoadertimeoutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

  useEffect(() => {
    if(pokemon !== undefined) setPokemondata(pokemon)  
    console.log(pokemon)
   }, [pokemon])
   
   useEffect(() => {
    clearTimeout(LoadertimeoutID)
    clearTimeout(LoadtimeOutID)
    clearTimeout(EggtimeOutID)

    setTimeout(() => {
      setIsLoader(false)
    }, 1000)


    return () => {
      setIsLoader(false)
    }
   
   }, [index])







  return (
    <Trail open={true}>
    <div className="h-96 w-64" >
        {(pokemondata && !isLoader)
            ? <ActualCard pokemondata={pokemondata} link={link} name={name} />
            : <CardLoader/>
        }
    </div>
    </Trail>
  )
}


export default Card