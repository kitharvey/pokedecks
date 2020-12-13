import React, { useEffect, useState } from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
import { GetPokemonDataInterface } from './CardInterface';
import {getTypeIcon, findColor} from './getTypeIcon';
import ProgressiveImage from 'react-progressive-image-loading';
import egg from "../Assets/pokemon-egg.png"
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
  const newName = string.split("-").join(" ")
  return newName.charAt(0).toUpperCase() + newName.slice(1);
}


const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata, link, name}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const sprite = getImageSource(link) 
  const handleClick = () => {
    setIsClicked(!isClicked)
  }


  return (
    <div 
      className="rounded-lg bg-white h-full w-full p-2.5 flex flex-col justify-between"
      onClick={handleClick}>
      <div 
        className="w-full h-52 rounded-lg p-3 shadow-inner relative " 
        style={{backgroundColor: findColor(pokemondata.types[0].type.name)[1]}} 
        >
        <ProgressiveImage
              preview = {egg}
              src = {sprite}
              render = { src => (
                <img 
                  src={src} 
                  alt={name} 
                  className="w-44 h-auto absolute left-1/2 bottom-2.5 transform -translate-x-1/2 translate-y-1/4" 
                  draggable="false" 
                  onDragStart={ e => e.preventDefault()} 
                />
              )}
            />

        <p className=" w-4/5 absolute top-2.5 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-2xl" >{capitalizeFirstLetter(name)}</p>
      </div>

      <div className="w-full flex flex-col justify-between h-32" >
        <div className="flex justify-between" >
          <div className="flex" >
            {pokemondata.types.map( (type,index) => <img  src={getTypeIcon(type.type.name)[1]} 
                                                          className="mr-1 w-8" 
                                                          key={index} 
                                                          draggable="false" 
                                                          onDragStart={ e => e.preventDefault()}  
                                                          alt={getTypeIcon(type.type.name)[0]}/>)}
          </div>
          <p className="text-black font-bold text-lg" >#{getID(link)}</p>
        </div>
        <div className="w-full flex justify-evenly" >
          <div className="flex flex-col items-center" >
            <p className="text-black text-xs font-normal" >attack</p>
            <p className="text-black font-bold" >{pokemondata.stats[1].base_stat}</p>
          </div>
          <div className="flex flex-col items-center" >
            <p className="text-black text-xs font-normal" >hp</p>
            <p className="text-black font-bold" >{pokemondata.stats[0].base_stat}/{pokemondata.stats[0].base_stat}</p>
          </div>
          <div className="flex flex-col items-center" >
            <p className="text-black text-xs font-normal" >defense</p>
            <p className="text-black font-bold" >{pokemondata.stats[2].base_stat}</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly" >
          <div className="flex flex-col items-center" >
            <p className="text-black text-xs font-medium" >height</p>
            <p className="text-black font-bold" >{pokemondata.height/10}m</p>
          </div>
          <div className="flex flex-col items-center" >
            <p className="text-black text-xs font-normal" >weight</p>
            <p className="text-black font-bold" >{pokemondata.weight/10}kg</p>
          </div>
        </div>
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
    <div className="rounded-lg h-full w-full p-2.5 flex flex-col justify-between  bg-white">
    <div className="w-full h-52 rounded-lg bg-gray-400 p-3 shadow-inner relative animate-pulse " >
      <div className=" w-4/5 h-10 absolute top-2.5 left-1/2 transform -translate-x-1/2 rounded-lg bg-gray-200 animate-pulse" ></div>
      <img 
        src={egg} 
        alt="egg loaded"
        className="w-44 h-auto absolute left-1/2 bottom-2.5 transform -translate-x-1/2 translate-y-1/4 z-10 animate-pulse" 
        style={{
          filter: "grayscale(1)"
        }}
        draggable="false" 
        onDragStart={ e => e.preventDefault()} 
      />
    </div>

    <div className="w-full flex flex-col justify-between h-32" >
      <div className="flex justify-between" >
        <div className="flex" >
          <div className="mr-1 w-8 h-8 rounded-full bg-gray-400 animate-pulse" />
          <div className="mr-1 w-8 h-8 rounded-full bg-gray-400 animate-pulse" />
        </div>
        <div className="w-12 h-6 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
      </div>
      <div className="w-full flex justify-evenly" >
        <div className="flex flex-col items-center" >
          <div className="w-10 h-3 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
          <div className="w-6 h-4 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
        </div>
        <div className="flex flex-col items-center" >
          <div className="w-8 h-3 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
          <div className="w-12 h-4 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
        </div>
        <div className="flex flex-col items-center" >
          <div className="w-10 h-3 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
          <div className="w-6 h-4 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly" >
      <div className="flex flex-col items-center" >
          <div className="w-8 h-3 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
          <div className="w-14 h-4 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
        </div>
        <div className="flex flex-col items-center" >
          <div className="w-8 h-3 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
          <div className="w-14 h-4 m-0.5 rounded-lg bg-gray-400 animate-pulse" ></div>
        </div>
      </div>
    </div>
   

</div>
  )
}


const Card: React.FC<CardInterface>  = ({link, name, index}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface | null>(null)
  const [isLoader, setIsLoader] = useState<boolean>(true)
  const pokemon = useGetPokemonData(name)
  var LoadertimeoutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

  useEffect(() => {
    if(pokemon !== undefined) setPokemondata(pokemon)  

    return () => setPokemondata(null) 
   }, [pokemon])
   
   useEffect(() => {
    clearTimeout(LoadertimeoutID)

    LoadertimeoutID = setTimeout(() => {
      setIsLoader(false)
    }, 1000)


    return () => {
      setIsLoader(false)
    }
   
   }, [index, LoadertimeoutID])







  return (
    <div className="h-96 w-64" >
        {(pokemondata && !isLoader)
            ? <ActualCard pokemondata={pokemondata} link={link} name={name} />
            : <CardLoader/>
        }
    </div>
  )
}


export default Card