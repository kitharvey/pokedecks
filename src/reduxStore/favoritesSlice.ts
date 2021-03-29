import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UpdateFavoritesProps } from "../InterfacesProps/Interfaces"

interface initialStateProps{
    list: UpdateFavoritesProps[] | null,
    filteredList: UpdateFavoritesProps[] | null,
    typeList: string[] | null
}

const initialState: initialStateProps = {
    list: null,
    filteredList: null,
    typeList: null
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        getFavoritesList: (state, action: PayloadAction<UpdateFavoritesProps[]>) => {
            let tempList = action.payload.slice()
            state.list = tempList
            state.filteredList = tempList
            let flat = tempList.map( item => item.types ).flat()
            let arrUnique = Array.from(new Set(flat))
            state.typeList = arrUnique
        },
        filterFavoritesByType: (state, action: PayloadAction<string>) => {
            const key = action.payload
            console.log(key)
            if(state.list) {
                let tempList = key ? state.list.filter( favorite => favorite.types.includes(key) ) : state.list
                console.log(tempList)
                state.filteredList = tempList
            }
        },
        sortFavorites: (state, action: PayloadAction<string>) => {
            const key = action.payload
            if(state.filteredList) {
                let list = state.filteredList.slice()
                if(key === 'name') {
                    list.sort( (a, b) => {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (a.name < b.name) {
                          return -1;
                        }
                        return 0;
                      } )
                }
                else if(key === 'id'){
                    list.sort( (a, b) => {
                        if (a.id > b.id) {
                          return 1;
                        }
                        if (a.id < b.id) {
                          return -1;
                        }
                        return 0;
                      } )
                }
                state.filteredList = list
            }

        },
    },
})
  

export const {filterFavoritesByType, sortFavorites, getFavoritesList} = favoritesSlice.actions
export default favoritesSlice.reducer