import React, {createContext, useState} from 'react'
import DeckOfCards from '../Deck/DeckOfCards'
import Modal from './Modal';


const appCtxDefaultValue = {
    state: 0,
    setState: (state: number) => {} // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);
  
const Page: React.FC = () => {
    const [state, setState] = useState(appCtxDefaultValue.state);

        return (
            <AppContext.Provider value={{state, setState }} >
            <div className="relative h-screen w-full" >
                <DeckOfCards />
                {state && <Modal />}
            </div>
            </AppContext.Provider>
        )
        
}


export default Page