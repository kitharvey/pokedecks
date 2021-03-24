import { configureStore } from '@reduxjs/toolkit'
import pokemonlistReducer from './pokemonSlice'
import userReducer from './userSlice'
import modalReducer from './modalSlice'
const store =  configureStore({
    reducer: {
        user: userReducer,
        pokemonlist: pokemonlistReducer,
        modal: modalReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store