import React, {useState} from 'react'
import DeckOfCards from '../components/Deck/DeckOfCards'
import Modal from '../components/ModalComponents/Modal';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { fetchList } from '../fetch/FetchData';
import { useQuery } from 'react-query';
import Login from '../components/Login/Login';
import SignUp from '../components/Login/SignUp';
import LandingPage from './LandingPage';
import {FaGithub} from 'react-icons/fa'
  
const Page: React.FC = () => {
    const { data } = useQuery('fetchList', fetchList)
    const [stateIndex, setStateIndex] = useState<number>(0);
    const [stateSearch, setStateSearch] = useState<string>('');

        return (
            <Router>
                <nav className="p-3 w-full h-7.5-screen flex items-center justify-between z-10 bg-white shadow-lg">
                    <h1 className="text-4xl font-bold text-black mr-2" >Pokédecks</h1>
                </nav>
                <div className="relative h-92.5-screen w-full flex items-center justify-evenly">
                    <Switch>
                            <Route exact path="/pokemons">
                                    <DeckOfCards data={data} stateIndex={stateIndex} setStateIndex={setStateIndex} stateSearch={stateSearch} setStateSearch={setStateSearch} />
                            </Route>
                            <Route exact path='/pokemons/:pokemon'>
                                    <Modal />
                            </Route>
                            <Route exact path='/login' >
                                <Login/>
                            </Route>
                            <Route exact path='/signup'>
                                <SignUp/>
                            </Route>
                            <Route exact path='/'>
                                <LandingPage/>
                            </Route>
                    </Switch>
                </div>
            </Router>
        )
        
}


export default Page