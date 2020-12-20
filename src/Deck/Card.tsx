import React, { useEffect, useState } from 'react'
import {useGetPokemonData} from '../Components/useGetPokemonData';
import { GetPokemonDataInterface } from '../Components/CardInterface';
import {getTypeIcon, findColor} from '../Components/getTypeIcon';
import egg from "../Assets/pokemon-egg.png"
import rays from "../Assets/rays.png"
import { motion } from 'framer-motion';
import { AppContext } from '../Components/Page';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

interface CardInterface{
  id: number
}

interface ActualCardInterface{
  pokemondata: GetPokemonDataInterface
  id: number
}




const getImageSource = (id: number) => {
  return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDString(id) + ".png"
}

const getIDString = (id: number) => {
      if(id < 10) return '00' + id
      if(id >= 10 && id < 100) return '0' + id
      if(id >= 100 ) return '' + id
}

const capitalizeFirstLetter = (string: string) => {
  const newName = string.split("-").join(" ")
  return newName.charAt(0).toUpperCase() + newName.slice(1);
}


const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata, id}) => {
  const {setState} = React.useContext(AppContext)
  const sprite = getImageSource(id)

  const handleClick = (id: number) => {
    setState({id,sprite})
  }


  return (
    <div 
      className="h-full w-full p-2.5 flex flex-col justify-between relative addFilter"
      style={{backgroundColor: "#f5f1e3"}}
      >
      <div 
        className="w-full h-80 relative border-solid border-4 border-white" 
        style={{
          backgroundColor: findColor(pokemondata.types[0].type.name)[1],
          backgroundImage: `url(${rays})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} 
        >
          <motion.div className="absolute right-2 top-2 Courier text-2xl font-black text-white Courier leading-none cursor-pointer hover:text-opacity-50"
              onClick={() => handleClick(pokemondata.id)}
              whileHover={{
                opacity: .5,
              }}
              whileTap={{ 
                opacity: 8,
              }}
              transition={{
                opacity: {
                  duration: 0.25
                }
            }}
          >i</motion.div>
          {/* <img src={rays} alt="rays" className="w-96 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2" /> */}
        <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"  >
          
          <LazyLoadImage
              alt={pokemondata.name}
              effect="black-and-white"
              threshold={100}
              src={sprite}
              placeholderSrc={egg}
              draggable="false" 
              onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} 
          />
        </div>

        <p className="absolute top-2.5 right-1/2 transform translate-x-1/2 text-white font-bold text-lg leading-none" >#{getIDString(id)}</p>
      </div>
      <div className="flex absolute bottom-10 right-1/2 transform translate-x-1/2 " >
            {pokemondata.types.map( (type,index) => <img  src={getTypeIcon(type.type.name)[1]} 
                                                          className="-m-0.5 w-10 rounded-full border-solid border-4 border-white" 
                                                          key={index} 
                                                          draggable="false" 
                                                          onDragStart={ e => e.preventDefault()}  
                                                          alt={getTypeIcon(type.type.name)[0]}
                                                    />)}
      </div>


        <div className="absolute bottom-2.5 right-1/2 transform translate-x-1/2  w-max  text-black text-center font-bold text-xl leading-none">
                {capitalizeFirstLetter(pokemondata.name)}
        </div>
  </div>
  )
}

const CardLoader: React.FC = () => {
  return (

    <div 
    className="h-full w-full p-2.5 flex flex-col justify-between relative addFilter"
    style={{backgroundColor: "#f5f1e3"}}
    >
    <div className="w-full h-80 relative bg-gray-400 border-solid border-4 border-white" 
      >
      <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 animate-pulse"  >
        <img
            alt="loader image"
            src={egg}
            draggable="false" 
            onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
            style={{
                    filter: "grayscale(1)"
                  }}
        />
      </div>
      <div className="absolute top-2.5 w-12 h-6  rounded-lg right-1/2 transform translate-x-1/2 bg-gray-200 animate-pulse " />
    </div>

    <div className="flex absolute bottom-10 right-1/2 transform translate-x-1/2 " >
          <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
          <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
    </div>


      <div className="absolute w-32 h-6 rounded-lg bottom-2.5 right-1/2 transform translate-x-1/2 bg-gray-400 animate-pulse"   />
</div>

  )
}




const Card: React.FC<CardInterface>  = ({id}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface | null>(null)
  const pokemon = useGetPokemonData(id)

  useEffect(() => {
    let mounted = true
    if(pokemon && mounted) setPokemondata(pokemon)  
    else setPokemondata(null)
       
    return () => {
      mounted = false
      setPokemondata(null)
    }
   }, [pokemon, id])
   






  return (
    <div className="h-96 w-64 select-none" >
        {(pokemondata)
            ? <ActualCard pokemondata={pokemondata} id={pokemondata.id} />
            : <CardLoader/>
        }
        
    </div>
  )
}


export default Card