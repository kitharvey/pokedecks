import React from 'react'
import Card from '../Deck/Card';


const CenterCard: React.FC<{pokemon: number}> = ({pokemon}) => {
        return (
                <div className="h-100 w-full">
                    <Card id={pokemon} />
                </div>
        );
}


export default CenterCard