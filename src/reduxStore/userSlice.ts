import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signIn, patchFavorites, patchScore } from "../fromAPI/axiosFunctions";
import {
  SignInProps,
  UpdateFavoritesProps,
  UserProps,
} from "../InterfacesProps/Interfaces";

export const signin = createAsyncThunk(
  "user/signin",
  async (body: SignInProps) => {
    const userData = await signIn(body);
    return userData.user;
  }
);

interface InitialStateProps {
  userData: UserProps | null;
  status: "loading" | "success" | "failed" | null;
}

const initialState: InitialStateProps = {
  userData: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFavorites: (state, action: PayloadAction<UpdateFavoritesProps>) => {
      const { payload } = action;
      if (state.userData) {
        const tempFav = state.userData.favorites.map((fav) => ({
          id: fav.id,
          name: fav.name,
          types: fav.types,
        }));
        if (tempFav.filter((fav) => fav.id === payload.id).length > 0) {
          tempFav.splice(
            tempFav.findIndex((fav) => fav.id === payload.id),
            1
          );
          patchFavorites(tempFav, state.userData._id);
          state.userData.favorites = tempFav;
        } else {
          tempFav.push(payload);
          patchFavorites(tempFav, state.userData._id);
          state.userData.favorites = tempFav;
        }
      }
    },
    updateScore: (state, action: PayloadAction<number>) => {
      const newScore = action.payload;
      if (state.userData) {
        if (state.userData.score < newScore) {
          state.userData.score = newScore;
          patchScore(newScore, state.userData._id);
        }
      }
    },
    signout: (state) => {
      state.userData = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signin.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.userData = payload;
      state.status = "success";
    });
  },
});

export const { updateFavorites, updateScore, signout } = userSlice.actions;
export default userSlice.reducer;
