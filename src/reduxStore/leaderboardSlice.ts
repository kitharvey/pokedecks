import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUsersList } from "../fetch/FetchData"
import {UserProps} from '../InterfacesProps/Interfaces'

export const fetchusersList = createAsyncThunk(
    'leaderboard/fetchusersList',
    async () => {
          const data = await fetchUsersList()
          return data as UserProps[]
    }
  )

interface initialStateProps{
    usersList: UserProps[] | null,
    status: 'loading' | 'success' | 'failed'
}

const initialState: initialStateProps = {
    usersList: null,
    status: 'loading',
}


const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchusersList.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchusersList.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(fetchusersList.fulfilled, (state, { payload })  => {
            state.usersList = payload
            state.status = 'success'
        })
        },
})
  

export default leaderboardSlice.reducer