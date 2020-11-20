import { strict } from 'assert';
import React from 'react'
import fetchAPI from '../Fetch/fetchAPI';
import  Card  from './Card';

// interface PokeDecksProps {

// }


const PokeDecks: React.FC<any> = async ({}) => {
    const pokemon = await fetchAPI()
        return <Card name={pokemon.name}/>;
}

export default PokeDecks