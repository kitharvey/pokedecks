import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UpdateFavoritesProps } from '../InterfacesProps/Interfaces'

interface InitialStateProps {
  FavoritesList: UpdateFavoritesProps[] | null
  typeList: string[] | null
}

const initialState: InitialStateProps = {
  FavoritesList: null,
  typeList: null,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    getFavoritesList: (state, action: PayloadAction<UpdateFavoritesProps[]>) => {
      const tempList = action.payload.slice()
      state.FavoritesList = tempList
    },
    getTypeList: (state, action: PayloadAction<UpdateFavoritesProps[]>) => {
      const tempList = action.payload.slice()
      const flat = tempList.map((item) => item.types).flat()
      const arrUnique = Array.from(new Set(flat))
      state.typeList = arrUnique
    },
  },
})

export const { getFavoritesList, getTypeList } = favoritesSlice.actions
export default favoritesSlice.reducer
