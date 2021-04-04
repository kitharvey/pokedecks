import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateFavoritesProps } from "../InterfacesProps/Interfaces";

interface initialStateProps {
  FavoritesList: UpdateFavoritesProps[] | null;
  typeList: string[] | null;
}

const initialState: initialStateProps = {
  FavoritesList: null,
  typeList: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavoritesList: (
      state,
      action: PayloadAction<UpdateFavoritesProps[]>
    ) => {
      let tempList = action.payload.slice();
      state.FavoritesList = tempList;
    },
    getTypeList: (state, action: PayloadAction<UpdateFavoritesProps[]>) => {
      let tempList = action.payload.slice();
      let flat = tempList.map((item) => item.types).flat();
      let arrUnique = Array.from(new Set(flat));
      state.typeList = arrUnique;
    },
  },
});

export const { getFavoritesList, getTypeList } = favoritesSlice.actions;
export default favoritesSlice.reducer;
