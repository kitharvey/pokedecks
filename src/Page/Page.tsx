import React, {createContext, useState} from 'react'
import DeckOfCards from '../Components/Deck/DeckOfCards'
import { NameURLInterface } from '../InterfacesProps/Interfaces';
import Modal from '../Components/ModalComponents/Modal';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { fetchList } from '../Fetch/useGetPokemonList';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';


export const appCtxDefaultValue = {
    stateSearch: '',
    setStateSearch: (stateSearch: string) => {},
    stateTop: {name: '', url: ''},
    setStateTop: (stateTop: NameURLInterface) => {},
    stateModal: false,
    setStateModal: (stateModal: boolean) => {},
    stateActivePokemonID: '0',
    setStateActivePokemonID: (stateActivePokemonID: string) => {},
    stateIndex: 0,
    setStateIndex: (stateActivePokemonID: number) => {},
    stateActiveColorTheme: '#eaeaea',
    setStateActiveColorTheme: (stateModal: string) => {},
};



export const AppContext = createContext(appCtxDefaultValue);



  
const Page: React.FC = () => {
    const ActivePokemonID = localStorage.getItem('stateActivePokemonID');
    const ActiveColorTheme = localStorage.getItem('stateActiveColorTheme');
    const isStateModal = localStorage.getItem('stateModal');
    const [stateSearch, setStateSearch] = useState<string>(appCtxDefaultValue.stateSearch);
    const [stateTop, setStateTop] = useState<NameURLInterface>(appCtxDefaultValue.stateTop)
    const [stateModal, setStateModal] = useState<boolean>(isStateModal === "true")
    const [stateActivePokemonID, setStateActivePokemonID] = useState<string>(ActivePokemonID ? ActivePokemonID : appCtxDefaultValue.stateActivePokemonID)
    const [stateActiveColorTheme, setStateActiveColorTheme] = useState<string>(ActiveColorTheme ? ActiveColorTheme : appCtxDefaultValue.stateActiveColorTheme)
    const [stateIndex, setStateIndex] = useState<number>(0)
    const { data } = useQuery('fetchList', fetchList, {refetchOnWindowFocus: false})


        return (
            <Router>
            <AppContext.Provider value={{stateSearch, setStateSearch, 
                                        stateTop, setStateTop, 
                                        stateModal, setStateModal,
                                        stateActivePokemonID, setStateActivePokemonID,
                                        stateActiveColorTheme, setStateActiveColorTheme,
                                        stateIndex, setStateIndex
                                        }} >
                <nav className="p-3 w-full h-1/10 flex items-center justify-between z-10 transition duration-500 ease-in-out" style={{background: stateActiveColorTheme}}>
                    <h1 className="text-4xl font-bold text-black" >Pokédecks</h1>
                </nav>
                <Switch>
                        <Route exact path="/">
                            {/* <motion.div
                                key={0}
                                initial={{ 
                                    opacity: 0,
                                }}
                                animate={{ 
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{ 
                                    opacity: 0,
                                    transition: { duration: 0.5 }
                                }}
                                transition={{
                                    opacity: {
                                    duration: 0.5
                                    }
                                }}
                            > */}
                                <div className="relative min-h-9/10-screen h-max w-full flex items-center justify-evenly h-9/10">
                                    <DeckOfCards data={data} />
                                </div>
                            {/* </motion.div> */}
                        </Route>
                        <Route exact path={`/${stateActivePokemonID}`}>
                            <motion.div
                                key={1}
                                initial={{ 
                                    opacity: 0,
                                }}
                                animate={{ 
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{ 
                                    opacity: 0,
                                    transition: { duration: 0.5 }
                                }}
                                transition={{
                                    opacity: {
                                    duration: 0.5
                                    }
                                }}>
                                <Modal />
                            </motion.div>
                        </Route>
                </Switch>
            </AppContext.Provider>
            </Router>
        )
        
}


export default Page