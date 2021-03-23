import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { signIn } from '../fetch/FetchData'
import { SignInProps, UserProps } from '../InterfacesProps/Interfaces'

export const signin = createAsyncThunk(
    'user/signin',
    async (body: SignInProps) => {
          const userData = await signIn(body)
          console.log(userData.user)
          return userData.user
    }
  )

interface initialStateProps{
    userData: UserProps | null,
    status: 'loading' | 'success' | 'failed'
}

const initialState: initialStateProps = {
    userData: null,
    status: 'loading',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // updateTRL: (state ,action: PayloadAction<TRLProps>) => {
        //     if(state.item) state.item.trl = action.payload
        // },
        // updateCategories: (state ,action: PayloadAction<IDName[]>) => {
        //     if(state.item) state.item.categories = action.payload
        // },
        // updateBusinessModels: (state ,action: PayloadAction<IDName[]>) => {
        //     if(state.item) state.item.businessModels = action.payload
        // },
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
  

// export const {updateTRL,updateCategories,updateBusinessModels} = productSlice.actions
export default userSlice.reducer