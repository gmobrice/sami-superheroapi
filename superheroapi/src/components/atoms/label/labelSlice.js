import { createSlice } from "@reduxjs/toolkit";

const labelState = {
  label: "label",
};

const labelSlice = createSlice({
  name: "label",
  initialState: labelState,
  reducers: {
    setLabel: (state, action) => {
      state.label = action.payload;
    },
  },
});

export const { setLabel } = labelSlice.actions;
const labelReducer = labelSlice.reducer;
export default labelReducer;
