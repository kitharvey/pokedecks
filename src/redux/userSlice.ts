import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { signUp } from '../fetch/FetchData'
import { SignUpProps, UserProps } from '../InterfacesProps/Interfaces'
// import { RootState } from './store'

// export const getProduct = createAsyncThunk<UserProps>(
//   'user/login',
//   async () => {
//     return await getData('https://api-test.innoloft.com/product/6781/')
//   }
// )
export const signup = createAsyncThunk(
  'user/signup',
  async (body: SignUpProps) => {
      const userData = await signUp(body)
    return userData as UserProps
  }
)

interface initialStateProps{
    item: UserProps | null
    status: 'loading' | 'success' | 'failed'
}

const initialState: initialStateProps = {
    item: null,
    status: 'loading',
}

const productSlice = createSlice({
    name: 'product',
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
        builder.addCase(signup.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(signup.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(signup.fulfilled, (state, { payload })  => {
            state.item = payload
            state.status = 'success'
        })
      },
  })
  

// export const {updateTRL,updateCategories,updateBusinessModels} = productSlice.actions
export default productSlice.reducer