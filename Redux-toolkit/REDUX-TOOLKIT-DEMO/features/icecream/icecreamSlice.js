const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIcecream: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //although this approach of adding an extra reducer work the recommended approach is to add a build function
  //extra reducers
  /*
  extraReducers: {
    //each action is a function here
    ["cake/ordered"]: (state) => {
      state.numOfIcecream--;
    },
  },
  */
  //extra reducers using build function
  extraReducers: (builder) => {
    //2nd arguement is a reducer type functions where we pass state and argument
    //using builder we add cases for each of the action type
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});
//default export the reducer
module.exports = icecreamSlice.reducer;
//named export the acctions
module.exports.icecreamActions = icecreamSlice.actions;
