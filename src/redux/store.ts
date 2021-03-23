import { configureStore } from '@reduxjs/toolkit'
import pokemonlistReducer from './pokemonSlice'
import userReducer from './userSlice'
const store =  configureStore({
    reducer: {
        user: userReducer,
        pokemonlist: pokemonlistReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store