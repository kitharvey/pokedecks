import React from 'react'
import useGetPokemonData from './useGetPokemonData';


const Card: React.FC = () => {
    const service = useGetPokemonData();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
          <div>
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