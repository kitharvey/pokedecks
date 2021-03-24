import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import Game from './Game';

const GameWrapper: React.FC = () => {
        const {pokemonList} = useAppSelector( state => state.pokemonlist )

        return (
            <div className="container h-9/10 m-auto relative">
                {pokemonList && <Game pokemonList={pokemonList} />}
            </div>
        );
}


export default GameWrapper