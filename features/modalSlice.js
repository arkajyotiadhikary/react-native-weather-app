import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
      name: "modal",
      initialState: {
            isVisible: false,
      },
      reducers: {
            setTrue: (state) => {
                  state.isVisible = true;
            },
            setFalse: (state) => {
                  state.isVisible = false;
            },
      },
});
export const { setFalse, setTrue } = modalSlice.actions;

export default modalSlice.reducer;
