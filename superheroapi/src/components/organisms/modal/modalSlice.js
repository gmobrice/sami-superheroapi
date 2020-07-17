import { createSlice } from "@reduxjs/toolkit";

const modalState = {
  hero: {},
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalState,
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
  },
});

export const { setVisibility, setHero } = modalSlice.actions;
const modalReducer = modalSlice.reducer;
export default modalReducer;
