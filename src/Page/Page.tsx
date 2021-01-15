import React, {createContext, useState} from 'react'
import DeckOfCards from '../Deck/DeckOfCards'
import { NameURLInterface } from '../InterfacesProps/Interfaces';
import Modal from '../Components/ModalComponents/Modal';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { fetchList } from '../Fetch/useGetPokemonList';
import { useQuery } from 'react-query';


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
    const [stateSearch, setStateSearch] = useState<string>(appCtxDefaultValue.stateSearch);
    const [stateTop, setStateTop] = useState<NameURLInterface>(appCtxDefaultValue.stateTop)
    const [stateModal, setStateModal] = useState<boolean>(appCtxDefaultValue.stateModal)
    const [stateActivePokemonID, setStateActivePokemonID] = useState<string>(appCtxDefaultValue.stateActivePokemonID)
    const [stateActiveColorTheme, setStateActiveColorTheme] = useState<string>(appCtxDefaultValue.stateActiveColorTheme)
    const [stateIndex, setStateIndex] = useState<number>(0)
    const { data } = useQuery('fetchList', fetchList, {refetchOnWindowFocus: false})
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateIndex(0)
        setStateModal(false)
        setStateSearch(e.target.value.toLowerCase())
      }

        return (
            <Router>
            <AppContext.Provider value={{stateSearch, setStateSearch, 
                                        stateTop, setStateTop, 
                                        stateModal, setStateModal,
                                        stateActivePokemonID, setStateActivePokemonID,
                                        stateActiveColorTheme, setStateActiveColorTheme,
                                        stateIndex, setStateIndex
                                        }} >
                <nav className="p-3 w-full flex items-center justify-between z-10 transition duration-500 ease-in-out" style={{background: stateActiveColorTheme}}>
                    <h1 className="text-4xl font-bold text-black" >Pokédecks</h1>
                    <div className="flex items-center bg-white pl-4">
                        <label htmlFor="searchpokemon" className="text-black font-bold mr-3 " >Search: </label>
                        <form method="GET" onSubmit={ (event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
                        <div className="relative text-gray-400 focus-within:text-black">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            {/* <button type="submit" className="p-1 focus:outline-none focus:shadow-outline"> */}
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            {/* </button> */}
                            </span>
                            <input id="searchpokemon" type="search" name="q" className="py-2 text-sm pl-10 focus:outline-none text-gray-900" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
                        </div>
                        </form>
                    </div>
                </nav>
                <Switch>
                <Route exact path="/">
                    <div className="relative min-h-screen h-max w-full flex items-center justify-evenly h-9/10">
                        <DeckOfCards data={data} />
                    </div>
                </Route>
                <Route exact path={`/${stateActivePokemonID}`}>
                    <Modal />
                </Route>
                    {/* <AnimatePresence>
                        {(stateModal) && (
                        <motion.div
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
                        >
                            <Modal />
                        </motion.div>
                        )}
                    </AnimatePresence> */}
                </Switch>
            </AppContext.Provider>
            </Router>
        )
        
}


export default Page