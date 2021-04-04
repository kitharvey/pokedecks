import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Modal from "../components/ModalComponents/Modal";
import LandingPage from "./LandingPage";
import User from "../components/User/User";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { auth } from "../firebase";
import { signin , signout } from "../reduxStore/userSlice";
import { fetchPokemonList } from "../reduxStore/pokemonSlice";

import DeckOfCards from "../components/Deck/DeckOfCards";
import Nav from "../components/Nav/Nav";
import FirebaseAuth from "../components/Login/FirebaseAuth";
import GameWrapper from "../components/Game/GameWrapper";
import LeaderBoard from "../components/Game/LeaderBoard";
import { fetchusersList } from "../reduxStore/leaderboardSlice";

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const { modalShow } = useAppSelector((state) => state.modal);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.displayName) {
          dispatch(
            signin({
              uid: user.uid,
              displayName: user.displayName,
            })
          );
        }
        dispatch(fetchPokemonList());
        dispatch(fetchusersList());
      } else dispatch(signout());
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <div className="relative min-h-92.5-screen w-full flex items-center justify-evenly">
        <Switch>
          <Route exact path="/explore">
            {userData ? <DeckOfCards /> : <Redirect to="/signin" />}
          </Route>
          <Route exact path="/leaderboard">
            {userData ? <LeaderBoard /> : <Redirect to="/signin" />}
          </Route>
          <Route exact path="/play">
            {userData ? <GameWrapper /> : <Redirect to="/signin" />}
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <FirebaseAuth />
          </Route>
          <Route exact path="/user/:userid">
            {userData ? <User /> : <Redirect to="/signin" />}
          </Route>
          <Route path="*">
            <h1>404 | Not Found</h1>
          </Route>
        </Switch>

        {modalShow && <Modal />}
      </div>
    </Router>
  );
};

export default Page;
