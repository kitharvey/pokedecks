import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchList } from '../fromAPI/axiosFunctions'
import { NameURLInterface } from '../interfacesProps/Interfaces'

export const fetchPokemonList = createAsyncThunk('pokemon/fetchPokemonList', async () => {
  const data = await fetchList()
  return data
})

interface InitialStateProps {
  pokemonList: NameURLInterface[] | null,
  status: 'loading' | 'success' | 'failed',
  pokemonIndex: number,
  pokemonSearch: string,
  pokemonListLength: number
}

const initialState: InitialStateProps = {
  pokemonList: null,
  status: 'loading',
  pokemonIndex: 0,
  pokemonSearch: '',
  pokemonListLength: 0,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonIndex: (state, action: PayloadAction<number>) => {
      state.pokemonIndex = action.payload
    },
    setPokemonListLength: (state, action: PayloadAction<number>) => {
      state.pokemonListLength = action.payload
    },
    setPokemonSearch: (state, action: PayloadAction<string>) => {
      state.pokemonSearch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonList.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPokemonList.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(fetchPokemonList.fulfilled, (state, { payload }) => {
      state.pokemonList = payload
      state.pokemonListLength = payload.length
      state.status = 'success'
    })
  },
})

export const { setPokemonIndex, setPokemonSearch, setPokemonListLength } = pokemonSlice.actions
export default pokemonSlice.reducer
