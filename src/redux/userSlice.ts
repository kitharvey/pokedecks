import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { signIn, patchFavorites, patchScore } from '../fetch/FetchData'
import { SignInProps, UserProps } from '../InterfacesProps/Interfaces'

export const signin = createAsyncThunk(
    'user/signin',
    async (body: SignInProps) => {
          const userData = await signIn(body)
          return userData.user
    }
  )


interface initialStateProps{
    userData: UserProps | null,
    status: 'loading' | 'success' | 'failed' | null
}

const initialState: initialStateProps = {
    userData: null,
    status: null,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFavorites: (state, action: PayloadAction<number>) => {
            const id = action.payload
            if(state.userData) {
                let tempFav = state.userData.favorites.slice()
                if(tempFav.includes(id)) {
                    const index = tempFav.indexOf(id)
                    tempFav.splice(index, 1)
                    patchFavorites(tempFav, state.userData._id)
                    state.userData.favorites = tempFav
                }
                else {
                    tempFav.push(id)
                    patchFavorites(tempFav, state.userData._id)
                    state.userData.favorites = tempFav
                } 
            }
        },
        updateScore: (state, action: PayloadAction<number>) => {
            const newScore = action.payload
            if(state.userData) {
                if(state.userData.score < newScore) {
                    state.userData.score = newScore
                    patchScore(newScore, state.userData._id)
                }
            }
        },
        signout: (state) => {
            state.userData = null
            state.status = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(signin.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(signin.fulfilled, (state, { payload })  => {
            state.userData = payload
            state.status = 'success'
        })
      },
  })
  

export const {updateFavorites, signout} = userSlice.actions
export default userSlice.reducer