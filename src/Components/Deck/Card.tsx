import React from 'react'
import {useGetPokemonData} from '../../Fetch/useGetPokemonData';
import { ActualCardInterface, CardInterface } from '../../InterfacesProps/Interfaces';
import {getTypeIcon, findColor} from '../../Functions/getTypeIconAndColor';
import egg from "../../Assets/pokemon-egg.png"
import { motion } from 'framer-motion';
import { AppContext } from '../../Page/Page';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { getImageSourcefromID, getIDStringfromID } from '../../Functions/GlobalFunctions';
import CardLoader from './CardLoader';
import { LazyImage } from "react-lazy-images";
import { Link } from "react-router-dom";
const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata}) => {
  const sprite = getImageSourcefromID(pokemondata.id)
  const {setStateActivePokemonID, setStateActiveColorTheme, setStateModal, stateModal} = React.useContext(AppContext)

  const handleClick = () => {
    const activeID = getIDStringfromID(pokemondata.id)
    const activeColor = findColor(pokemondata.types[0].type.name)[1]
    setStateActivePokemonID(activeID)
    setStateActiveColorTheme(activeColor)
    setStateModal(true)
    localStorage.setItem('stateActivePokemonID', activeID)
    localStorage.setItem('stateActiveColorTheme', activeColor)
    localStorage.setItem('stateModal', 'true')
  }




  return (
    <div 
      className="h-full w-full p-4 flex flex-col justify-between bg-white relative addFilter "
      // style={{backgroundColor: "#eaeaea"}}
      >
      <div 
        className="w-full h-full relative" 
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${findColor(pokemondata.types[0].type.name)[1]} 100%)`
        }} 
        >
        <p className="absolute top-5 right-1/2 transform translate-x-1/2 text-black text-opacity-25 font-bold text-5xl tracking-widest leading-none" >#{getIDStringfromID(pokemondata.id)}</p>
          <motion.div className="absolute right-2 top-2 Courier text-2xl font-black text-white leading-none cursor-pointer hover:text-opacity-50"
              onClick={() => handleClick()}
              initial={{
                opacity: 1
              }}
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
            {!stateModal && 
            <Link to={`/${getIDStringfromID(pokemondata.id)}`} >
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="20px" height="20px" viewBox="0 0 416.979 416.979" xmlSpace="preserve" fill="#FFF" >
                  <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                    c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                    c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                    c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                    c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
              </svg>
            </Link>
            }
         
          </motion.div>
        <div className="w-52 h-52 absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"  >
          <LazyImage
            src={sprite}
            alt={pokemondata.name}
            placeholder={({ imageProps, ref }) => (
              <img  ref={ref} src={egg} alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
            )}
            
            actual={({ imageProps }) => <img {...imageProps} alt={pokemondata.name}  draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}

            />}
            error={() => (
              <img src={egg} alt="egg error" draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
            )}
          />
        </div>

      </div>
      <div className="flex absolute bottom-12 right-1/2 transform translate-x-1/2 translate-y-1/4 " >
            {pokemondata.types.map( (type,index) => <img  src={getTypeIcon(type.type.name)[1]} 
                                                          className="-m-0.5 w-10 rounded-full" 
                                                          key={index} 
                                                          draggable="false" 
                                                          onDragStart={ e => e.preventDefault()}  
                                                          alt={getTypeIcon(type.type.name)[0]}
                                                    />)}
      </div>


        <div className="absolute bottom-4 right-1/2 transform translate-x-1/2  w-max  text-black text-center font-bold capitalize text-xl leading-none">
                {pokemondata.name}
        </div>
  </div>
  )
}






const Card: React.FC<CardInterface>  = ({id}) => {
  // const {state, setState} = React.useContext(AppContext)
  const pokemon = useGetPokemonData(id)

  // React.useEffect(() => {
  //   let colorArray = state.bgColors.slice(0)
  //   if(pokemon) {
  //     const color = findColor(pokemon.types[0].type.name)[1]
  //     colorArray[0].color ? colorArray.push({color: color, colorIndex: index}) : colorArray = [{color: color, colorIndex: index}]
  //     setState({...state, bgColors: colorArray})
  //   }

  // }, [pokemon])

  return (
    <div className="h-full w-full select-none" >
        {pokemon ? <ActualCard pokemondata={pokemon}/> : <CardLoader/>  } 
        {/* <CardLoader/> */}
        
        
    </div>
  )
}


export default Card