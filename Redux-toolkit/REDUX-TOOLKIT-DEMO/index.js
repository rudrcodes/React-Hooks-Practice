//import the store
//it's a place where me import all the actions related to the reducers
const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

//importing the fetch users thunk
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State : ", store.getState());
console.log("---------------"); 
//subscribing to the updates
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

//as fetchUsers is an async action doesn't require an unsubscribe method
store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));
// unsubscribe();
