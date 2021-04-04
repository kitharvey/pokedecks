import { configureStore } from "@reduxjs/toolkit";
import pokemonlistReducer from "./pokemonSlice";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import leaderboardReducer from "./leaderboardSlice";
import favoritesReducer from "./favoritesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pokemonlist: pokemonlistReducer,
    modal: modalReducer,
    leaderboard: leaderboardReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
