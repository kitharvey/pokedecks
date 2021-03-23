import React, { useEffect } from 'react'
import Modal from '../components/ModalComponents/Modal';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import LandingPage from './LandingPage';
import User from '../components/User/User';
import FirebaseAuth from '../components/Login/FirebaseAuth';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import PokemonsPage from './PokemonsPage';
import { auth } from '../firebase';
import { signin } from '../redux/userSlice';
import { fetchPokemonList } from '../redux/pokemonSlice';
  
const Page: React.FC = () => {
    const dispatch = useAppDispatch()
    const {userData} = useAppSelector(state => state.user)
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user && user.displayName) {
                dispatch(signin({
                    uid: user.uid,
                    displayName: user.displayName,
                }))
                dispatch(fetchPokemonList())
            }
        })
        return unsubscribe
      }, [dispatch])

        return (
            <Router>
                <nav className="p-3 w-full h-7.5-screen flex items-center justify-between z-10 bg-white shadow-lg">
                    <h1 className="text-4xl font-bold text-black mr-2" >Pokédecks</h1>
                </nav>
                <div className="relative h-92.5-screen w-full flex items-center justify-evenly">
                    <Switch>
                            <Route exact path="/pokemons">
                                {userData 
                                    ?  <PokemonsPage /> 
                                    : <Redirect to='/' /> 
                                } 
                            </Route>
                            <Route exact path='/pokemons/:pokemon'>
                                {userData 
                                    ?  <Modal />
                                    : <Redirect to='/' /> 
                                } 
                            </Route>
                            <Route exact path='/'>
                                <LandingPage/>
                            </Route>
                            <Route exact path='/auth'>
                                <FirebaseAuth/>
                            </Route>
                            <Route exact path='/:user'>
                                {userData 
                                    ? <User/>
                                    : <Redirect to='/' /> 
                                } 
                            </Route>
                    </Switch>
                </div>
            </Router>
        )
        
}


export default Page