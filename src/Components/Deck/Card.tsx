import React from 'react'
import {fetchPokemonData} from '../../fromAPI/axiosFunctions';
import { CardInterface } from '../../InterfacesProps/Interfaces';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import CardLoader from './CardLoader';
import { useQuery } from 'react-query';
import ActualCard from './ActualCard';

const Card: React.FC<CardInterface>  = ({id}) => {
  const {data, isFetching} = useQuery(['fetchPokemonData', id], async() => await fetchPokemonData(id))

  return (
    <div className="h-full w-full select-none" >
        {(data && !isFetching) ? <ActualCard pokemondata={data}/> : <CardLoader/>  } 
    </div>
  )
}


export default Card