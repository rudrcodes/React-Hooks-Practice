const RTK = require("@reduxjs/toolkit");
const createSlice = RTK.createSlice;

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
module.exports = cakeSlice.reducer;
//importing actions so they can be dispatched in the index.js file
//Named export
module.exports.cakeActions = cakeSlice.actions;

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
