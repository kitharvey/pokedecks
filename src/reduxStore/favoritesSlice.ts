
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialStateProps{
    modalIndex: number,
    modalShow: boolean
}

const initialState: initialStateProps = {
    modalIndex: 0,
    modalShow: false
}

const favoritesSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setModalIndex: (state ,action: PayloadAction<number>) => {
            state.modalIndex = action.payload
        },
        setModalShow: (state ,action: PayloadAction<boolean>) => {
            state.modalShow = action.payload
        },
    },
})
  

export const {setModalIndex,setModalShow} = favoritesSlice.actions
export default favoritesSlice.reducer