import React, { useEffect, useState } from 'react'
import {useGetPokemonData} from '../Components/useGetPokemonData';
import { GetPokemonDataInterface } from '../Components/CardInterface';
import {getTypeIcon, findColor} from '../Components/getTypeIcon';
import egg from "../Assets/pokemon-egg.png"
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
    setState(id)
  }


  return (
    <div 
      className="rounded-lg bg-white h-full w-full p-2.5 flex flex-col justify-between"
      >
      <div 
        className="w-full h-52 rounded-lg p-3 shadow-inner relative " 
        style={{backgroundColor: findColor(pokemondata.types[0].type.name)[1]}} 
        >
        <div className="w-44 h-auto absolute left-1/2 bottom-2.5 transform -translate-x-1/2 translate-y-1/4"  >
          <LazyLoadImage
              alt={pokemondata.name}
              effect="black-and-white"
              threshold={10}
              src={sprite}
              placeholderSrc={egg}
              draggable="false" 
              onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} 
          />
        </div>
        <motion.div 
          className=" w-4/5 absolute top-2.5 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-2xl cursor-pointer hover:text-opacity-50 leading-none"
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
            {capitalizeFirstLetter(pokemondata.name)}
          </motion.div>
      </div>

      <div className="w-full flex flex-col justify-between h-32" >
        <div className="flex justify-between" >
          <div className="flex" >
            {pokemondata.types.map( (type,index) => <img  src={getTypeIcon(type.type.name)[1]} 
                                                          className="mr-1 w-8" 
                                                          key={index} 
                                                          draggable="false" 
                                                          onDragStart={ e => e.preventDefault()}  
                                                          alt={getTypeIcon(type.type.name)[0]}
                                                    />)}
          </div>
          <p className="text-black font-bold text-lg" >#{getIDString(id)}</p>
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

const CardLoader: React.FC = () => {
  return (
    <div className="rounded-lg h-full w-full p-2.5 flex flex-col justify-between  bg-white">
    <div className="w-full h-52 rounded-lg bg-gray-400 p-3 shadow-inner relative animate-pulse " >
      <div className=" w-4/5 h-8 absolute top-2.5 left-1/2 transform -translate-x-1/2 rounded-lg bg-gray-200 animate-pulse" ></div>
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


const Card: React.FC<CardInterface>  = ({id}) => {
  const [pokemondata, setPokemondata] = useState<GetPokemonDataInterface | null>(null)
  const [isLoader, setIsLoader] = useState<boolean>(true)
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
   
   useEffect(() => {
      let LoadertimeoutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)
      clearTimeout(LoadertimeoutID)

      LoadertimeoutID = setTimeout(() => {
        setIsLoader(false)
      }, 1000)
    return () => {
      setIsLoader(false)
    }
   
   }, [id])







  return (
    <div className="h-96 w-64 select-none" >
        {(pokemondata && !isLoader)
            ? <ActualCard pokemondata={pokemondata} id={pokemondata.id} />
            : <CardLoader/>
        }
        
    </div>
  )
}


export default Card