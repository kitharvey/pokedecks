import React from 'react'
import  Card  from './Card';


const PokeDecks: React.FC= () => {
        const pokeArray = Array(10).fill(0).map( a => Math.floor(Math.random() * 893 + 1))

        return (
                <div className="grid-of-cards" > 
                        {pokeArray.map( (data, index) =>  <Card num={index + 1} key={index} /> )}
                </div> 
        )
}

export default PokeDecks