import React, { useEffect, useState } from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
import { GetPokemonDataInterface } from './CardInterface';
import logo from "../Assets/pokemon-logo.svg"
import egg from "../Assets/pokemon-egg.png"
import Trail from './Trail';
interface CardInterface{
  link: string
  name: string
  index: number
}
interface ActualCardInterface{
  pokemondata: GetPokemonDataInterface
  isLoadEgg: boolean
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


const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata, isLoadEgg, link, name}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className={`pokemon-card ${isClicked ? "isClicked" : ""}`}  style={{backgroundColor: findColor(pokemondata.types[0].type.name)[1]}} onClick={handleClick}>
      <h3 className="pokemon-name" >{capitalizeFirstLetter(name)}</h3>
      <img src={logo} className="poke-logo" alt="poke-logo" />
      {(!isLoadEgg && pokemondata) ? <img src={getImageSource(link)} alt={name} className="sprite"  /> :  <img src={egg} className="m-auto w-2/5 animate-bounce" alt="pokemon egg" />}
      <div className="pokemon-type" >
        {pokemondata.types.map( (type,index) => <div className="type" key={index}>{type.type.name}</div> )}
      </div>
  </div>
  )
}

const CardLoader = () => {
  return (
  <div className="h-full w-full bg-gray-300 rounded-xl p-2.5 relative z-10 flex flex-col justify-between" >
    <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-3/4"></div>
    <img src={logo} className="poke-logo animate-pulse" alt="poke-logo" />
    <div className="flex" >
      <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-1/4 mr-2.5"></div>
      <div className="animate-pulse h-6 bg-gray-200 rounded-2xl w-1/4"></div>
    </div>
  </div>
  )
}


const Card: React.FC<CardInterface>  = ({link, name, index}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface>()
  const [isLoad, setIsLoad] = useState<boolean>(true)
  const [isLoadEgg, setIsLoadEgg] = useState<boolean>(true)
  const [isLoader, setIsLoader] = useState<boolean>(true)
  const pokemon = useGetPokemonData(name)
  var LoadtimeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000), EggtimeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000), LoadertimeoutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

  useEffect(() => {
    if(pokemon !== undefined) setPokemondata(pokemon)  
   }, [pokemon])
   
   useEffect(() => {
    clearTimeout(LoadertimeoutID)
    clearTimeout(LoadtimeOutID)
    clearTimeout(EggtimeOutID)

    setTimeout(() => {
      setIsLoader(false)
      setTimeout(() => {
        setIsLoad(false)
        setTimeout(() => {
          setIsLoadEgg(false)
        }, 2000)
      }, 2000)
    }, 1000)


    return () => {
      setIsLoad(false)
      setIsLoadEgg(false)
      setIsLoader(false)
    }
   
   }, [link, name, index])







  return (
    <Trail open={true}>
    <div className="h-96 w-64" >
      {/* {(isLoad  || !pokemondata) && <div className="h-full w-full bg-gray-500 relative z-10" ></div> } */}
        {(pokemondata && !isLoader) && (
          !isLoad ? <ActualCard pokemondata={pokemondata} link={link} isLoadEgg={isLoadEgg} name={name} />
           : <CardLoader/>
        )
          
      }
    </div>
    </Trail>
  )
}


export default Card