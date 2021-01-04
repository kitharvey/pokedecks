import React, {createContext, useState} from 'react'
import DeckOfCards from '../Deck/DeckOfCards'
import { findColor } from '../Functions/getTypeIconAndColor';
import { GetPokemonDataInterface, NameURLInterface } from './CardInterface';
import Modal from './Modal';
// import LeftCard from './LeftCard';
import { AnimatePresence, motion } from 'framer-motion';


interface ContextStateProps {
    search: string,
    pokemonOnTop: NameURLInterface,
    pokemonData: GetPokemonDataInterface,
    showModal: boolean
}

export const appCtxDefaultValue = {
    state: {
        search: "",
        pokemonOnTop: {name: '', url: ''},
        pokemonData: {
            abilities: [{ability: {name: '', url: ''}, is_hidden: false}],
            base_experience: 0,
            height: 0,
            id: 0,
            is_default: false,
            location_area_encounters: '',
            name: '',
            order: 0,
            species: {name: '', url: ''},
            types: [{type: {name: '', url: ''}}],
            weight: 0,
            stats: [{
                base_stat: 0,
                effort: 0,
                stat: {name: '', url: ''}
            }]
        },
        showModal: false
    },
    setState: (state: ContextStateProps) => {}
};



export const AppContext = createContext(appCtxDefaultValue);



  
const Page: React.FC = () => {
    const [state, setState] = useState<ContextStateProps>(appCtxDefaultValue.state);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, search: e.target.value.toLowerCase()})
      }

    const getNavBackGround = () => {
        return state.pokemonData.types[0].type.name ? findColor(state.pokemonData.types[0].type.name)[1] : '#eaeaea'
    }

        return (
            <AppContext.Provider value={{state, setState}} >
                <nav className="fixed p-3 top-0 left-0 w-full flex items-center justify-between z-10 transition duration-500 ease-in-out" style={{background: getNavBackGround()}}>
                    <h1 className="text-4xl font-bold text-black" >Pokédecks</h1>
                    <div className="flex items-center">
                        <label htmlFor="searchpokemon" className="text-black font-bold mr-3" >Search: </label>
                        <form method="GET" onSubmit={ (event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
                        <div className="relative text-gray-400 focus-within:text-black">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            {/* <button type="submit" className="p-1 focus:outline-none focus:shadow-outline"> */}
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            {/* </button> */}
                            </span>
                            <input id="searchpokemon" type="search" name="q" className="py-2 text-sm pl-10 focus:outline-none bg-white text-gray-900" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
                        </div>
                        </form>
                    </div>
                </nav>
                <div className="relative h-screen w-full flex items-center justify-evenly">
                <DeckOfCards />

                {/* <AnimatePresence>
                    {(state.pokemonData.id > 0) && (
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
                            transition: { duration: 0.2 }
                        }}
                        transition={{
                            opacity: {
                            duration: 0.5
                            }
                        }}
                    >
                        <LeftCard />
                    </motion.div>
                    )}
                </AnimatePresence> */}

                </div>
                <AnimatePresence>
                    {(state.showModal) && (
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
                </AnimatePresence>
            </AppContext.Provider>
        )
        
}


export default Page