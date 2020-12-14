import React, {createContext, useState, useEffect} from 'react'
import DeckOfCards from '../Deck/DeckOfCards'
import Modal from './Modal';

interface PageProps {

}
const appCtxDefaultValue = {
    state: "",
    setState: (state: string) => {} // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);
  
const Page: React.FC<PageProps> = ({}) => {
    const [state, setState] = useState(appCtxDefaultValue.state);
    useEffect(() => {
      console.log(state)
    }, [state])
        return (
            <AppContext.Provider value={{state, setState }} >
            <div className="relative h-screen w-full" >
                <DeckOfCards />
                {state && <Modal name={state} />}
            </div>
            </AppContext.Provider>
        )
        
}


export default Page