import React, {useContext} from 'react'
import Card from '../Deck/Card';
import { AppContext } from '../../Page/Page';



const CenterCard: React.FC = () => {
    const {stateActivePokemonID} = useContext(AppContext)
        return (
                <div className="h-100 w-full">
                    <Card id={+stateActivePokemonID} />
                </div>
        );
}


export default CenterCard