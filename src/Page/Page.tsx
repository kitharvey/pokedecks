import React, {useState} from 'react'
import DeckOfCards from '../Components/Deck/DeckOfCards'
import Modal from '../Components/ModalComponents/Modal';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { fetchList } from '../Fetch/FetchData';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';

  
const Page: React.FC = () => {
    const { data } = useQuery('fetchList', fetchList)
    const [stateIndex, setStateIndex] = useState<number>(0);
    const [stateSearch, setStateSearch] = useState<string>('');

        return (
            <Router>
                <nav className="p-3 w-full h-1/10 flex items-center justify-between z-10 bg-white shadow-lg">
                    <h1 className="text-4xl font-bold text-black" >Pokédecks</h1>
                </nav>
                <Switch>
                        <Route exact path="/">
                                <div className="relative min-h-9/10-screen h-max w-full flex items-center justify-evenly h-9/10">
                                    <DeckOfCards data={data} stateIndex={stateIndex} setStateIndex={setStateIndex} stateSearch={stateSearch} setStateSearch={setStateSearch} />
                                </div>
                        </Route>
                        <Route exact path={`/:pokemon`}>
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
            </Router>
        )
        
}


export default Page