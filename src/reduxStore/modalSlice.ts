import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface initialStateProps{
    modalIndex: number,
    modalShow: boolean
}

const initialState: initialStateProps = {
    modalIndex: 0,
    modalShow: false
}

const modalSlice = createSlice({
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
  

export const {setModalIndex,setModalShow} = modalSlice.actions
export default modalSlice.reducer