import React from 'react'
import {fetchPokemonData} from '../../fetch/FetchData';
import { CardInterface } from '../../InterfacesProps/Interfaces';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import CardLoader from './CardLoader';
import useSWR from 'swr';
import ActualCard from './ActualCard';

const Card: React.FC<CardInterface>  = ({id}) => {
  const {data} = useSWR(`${id}`, fetchPokemonData)

  return (
    <div className="h-full w-full select-none" >
        {(data) ? <ActualCard pokemondata={data}/> : <CardLoader/>  } 
    </div>
  )
}


export default Card