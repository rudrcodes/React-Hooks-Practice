//import the store here
const store = require("./app/store");
//importing actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const { fetchUsers } = require("./features/user/userSlice");
console.log("Initial State : ", store.getState());

//subscribing to the store
const unsubscribe = store.subscribe(() => {
  console.log("New State : ", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(4));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(4));
store.dispatch(fetchUsers());
// unsubscribe();
