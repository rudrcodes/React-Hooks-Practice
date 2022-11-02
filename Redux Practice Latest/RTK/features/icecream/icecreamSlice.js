const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
  extraReducers:(builder)=>{
    // builder.addCase(actionType,reducer type fucntion with state and action as parameters=>{
    builder.addCase(cakeActions.ordered,(state,action)=>{
        state.numOfIcecreams--;
    })
  }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
