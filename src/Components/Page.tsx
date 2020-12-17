import React, {createContext, useState} from 'react'
import DeckOfCards from '../Deck/DeckOfCards'
import Modal from './Modal';

interface stateProps {
    sprite: string,
    id: number
}

const appCtxDefaultValue = {
    state: {
        sprite: "",
        id: 0
    },
    setState: (state: stateProps) => {} // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);
  
const Page: React.FC = () => {
    const [state, setState] = useState(appCtxDefaultValue.state);

        return (
            <AppContext.Provider value={{state, setState }} >
            <div className="relative h-screen w-full" >
                <DeckOfCards />
                {state.id && <Modal />}
            </div>
            </AppContext.Provider>
        )
        
}


export default Page