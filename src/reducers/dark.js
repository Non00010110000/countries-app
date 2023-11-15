import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const darkReducer = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const { setDarkMode } = darkReducer.actions;
export default darkReducer.reducer;