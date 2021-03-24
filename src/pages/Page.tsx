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
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { auth } from '../firebase';
import { signin } from '../redux/userSlice';
import { fetchPokemonList } from '../redux/pokemonSlice';
import { signout } from '../redux/userSlice';
import DeckOfCards from '../components/Deck/DeckOfCards';
import Nav from '../components/Nav/Nav';
import FirebaseAuth from '../components/Login/FirebaseAuth';
  
const Page: React.FC = () => {
    const dispatch = useAppDispatch()
    const {userData} = useAppSelector(state => state.user)
    const {modalShow} = useAppSelector(state => state.modal)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                if(user.displayName) {
                    dispatch(signin({
                        uid: user.uid,
                        displayName: user.displayName,
                    }))
                }
                dispatch(fetchPokemonList())

            }
            else dispatch(signout())
        })
        return unsubscribe
      }, [dispatch])

        return (
            <Router>
                <Nav />
                <div className="relative h-92.5-screen w-full flex items-center justify-evenly">
                    <Switch>
                            <Route exact path="/pokemons">
                                {userData 
                                    ?  <DeckOfCards /> 
                                    : <Redirect to='/signin' /> 
                                } 
                            </Route>
                               <Route exact path='/'>
                                <LandingPage/>
                            </Route>
                            <Route exact path='/signin'>
                                <FirebaseAuth/>
                            </Route>
                            <Route exact path='/user/:userid'>
                                {userData 
                                    ? <User/>
                                    : <Redirect to='/signin' /> 
                                } 
                            </Route>
                    </Switch>

                    {modalShow && <Modal />}
                </div>
            </Router>
        )
        
}


export default Page