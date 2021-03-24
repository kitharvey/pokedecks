import React from 'react'
import { ActualCardInterface } from "../../InterfacesProps/Interfaces"
import {getTypeIcon, findColor} from '../../functions/getTypeIconAndColor';
import egg from "../../assets/pokemon-egg.png"
import { getImageSourcefromID, getIDStringfromID } from '../../functions/GlobalFunctions';
import { LazyImage } from "react-lazy-images";
import {FaInfoCircle} from 'react-icons/fa'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import ClickableIcons from './ClickableIcons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateFavorites } from '../../redux/userSlice';
import { setModalIndex, setModalShow } from '../../redux/modalSlice';





const ActualCard: React.FC<ActualCardInterface >  =  ({pokemondata}) => {
    const dispatch = useAppDispatch()
    const {userData} = useAppSelector(state => state.user)
    const {modalShow} = useAppSelector(state => state.modal)
    const sprite = getImageSourcefromID(pokemondata.id)
    const handleFavToggle = () => {
      dispatch(updateFavorites(pokemondata.id))
    }
    const handleModal = () => {
      dispatch(setModalIndex(pokemondata.id))
      dispatch(setModalShow(true))
    }
    return (
      <div 
        className="h-full w-full rounded-md p-4 flex flex-col justify-between bg-white relative addFilter"
        >
        <div 
          className="w-full h-full relative " 
          style={{
            background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${findColor(pokemondata.types[0].type.name)[1]} 100%)`
          }} 
          >
            <div className="absolute left-2 top-2" >
              <div onClick={handleFavToggle} >
                {(userData && userData.favorites.includes(pokemondata.id)) 
                  ? <ClickableIcons icon={<FaHeart/>} text="Remove from favorites" color='red-500' colorHover='red-500' />
                  : <ClickableIcons icon={<FaRegHeart/>} text="Add to favorites" color='white' colorHover='red-500' />
                  }
              </div>
            </div>
          <p className="absolute top-5 right-1/2 transform translate-x-1/2 text-black text-opacity-25 font-bold text-5xl tracking-widest leading-none" >#{getIDStringfromID(pokemondata.id)}</p>
          <div className="absolute right-2 top-2 ">
            {!modalShow && 
            <div onClick={handleModal}>
              <ClickableIcons icon={<FaInfoCircle/>} text="View more info" color='white' colorHover='gray-200' />
            </div>
            }
          </div>
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
                                                            className="-m-0.5 rounded-full"
                                                            style={{
                                                              width: "40px",
                                                              height: "40px",
                                                              margin: pokemondata.types.length > 1 ? "-0.125rem" : "0"
                                                            }}
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

  export default ActualCard
