// const RTK = require("@reduxjs/toolkit");
// const createSlice = RTK.createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 20,
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
//importing reducer so that it can be used to the store
//Default export
// module.exports = cakeSlice.reducer;
//importing actions so they can be dispatched in the index.js file
//Named export

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
// export cakeSlice.reducer
// const rudr = {
//   name: "rudr",
//   age() {
//     console.log(21);
//   },
//   age2: () => {
//     console.log(21);
//   },
// };

// rudr.age();
// rudr.age2();
