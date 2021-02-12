import React from 'react'
import Card from '../Deck/Card';
import { useParams } from "react-router-dom";


const CenterCard: React.FC = () => {
    const { pokemon } = useParams()
        return (
                <div className="h-100 w-full">
                    <Card id={+pokemon} />
                </div>
        );
}


export default CenterCard