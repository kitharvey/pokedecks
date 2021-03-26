import React from 'react'
import { ActualCardInterface } from "../../InterfacesProps/Interfaces"
import ActualCard from './ActualCard';





const Card: React.FC<ActualCardInterface >  =  ({pokemondata}) => {
    return (
      <ActualCard  id={pokemondata.id}  mainType={pokemondata.types[0].type.name}  name={pokemondata.name}  types={pokemondata.types} />
    )
  }

export default Card
