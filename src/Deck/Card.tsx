import React, { useEffect, useState } from 'react'
import {useGetPokemonData} from '../Components/useGetPokemonData';
import { GetPokemonDataInterface } from '../Components/CardInterface';
import {getTypeIcon, findColor} from '../Components/getTypeIcon';
import egg from "../Assets/pokemon-egg.png"
import rays from "../Assets/rays.png"
import { motion } from 'framer-motion';
import { AppContext } from '../Components/Page';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import ProgressiveImage from "react-progressive-image-loading";

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

const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata, id}) => {
  const {state, setState} = React.useContext(AppContext)
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

          <motion.div className="absolute right-2 top-2 Courier text-2xl font-black text-white leading-none cursor-pointer hover:text-opacity-50"
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
          >
          {/* more info */}
          {!state.id && <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="20px" height="20px" viewBox="0 0 416.979 416.979" xmlSpace="preserve" fill="#FFF" >
              <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
          </svg>}
         
          </motion.div>
        <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"  >
          <ProgressiveImage
              preview={egg}
              src={sprite}
              render={(src, style) => <img alt={pokemondata.name} src={src} style={style} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
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


        <div className="absolute bottom-2.5 right-1/2 transform translate-x-1/2  w-max  text-black text-center font-bold capitalize text-xl leading-none">
                {pokemondata.name}
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
            alt="loader egg"
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
    <div className="h-96 w-80 select-none" >
        {(pokemondata)
            ? <ActualCard pokemondata={pokemondata} id={pokemondata.id} />
            : <CardLoader/>
        }
        
    </div>
  )
}


export default Card