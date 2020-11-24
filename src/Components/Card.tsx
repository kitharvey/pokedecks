import React from 'react'
import useGetPokemonData from './useGetPokemonData';
import "../Sass/CardStyle.scss"
interface RandomShits{
  num: number
}

const Card: React.FC<RandomShits>  = ({num}) => {
  const service = useGetPokemonData(num)

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
          <div className="card" >
            <p>{service.payload.name}</p>
            <img src={service.payload.sprites.front_default} />
          </div>}
      {service.status === 'error' && (
        <div>Error</div>
      )}
    </div>
  );
}


export default Card