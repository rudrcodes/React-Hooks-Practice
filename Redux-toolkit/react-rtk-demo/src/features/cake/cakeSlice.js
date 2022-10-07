import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
//default export
export default cakeSlice.reducer;
//named export
export const {ordered,restocked} = cakeSlice.actions;
