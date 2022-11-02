import { ordered as cakeOrdered } from "../cake/cakeSlice";

// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked(state, action) {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(actionType,reducer type fucntion with state and action as parameters=>{
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
