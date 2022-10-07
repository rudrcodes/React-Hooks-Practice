const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
//To apply middleware we use this function
const applyMiddleware = redux.applyMiddleware;
//Logger is a middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

console.log("From index.js");
// const cake_ordered = "CAKE_ORDERED ";
const CAKE_ORDERED = "CAKE_ORDERED ";
const CAKE_RESTOCKED = " CAKE_RESTOCKED ";
const ICECREAM_RESTOCKED = " ICECREAM_RESTOCKED ";
const ICECREAM_ORDERED = " ICECREAM_ORDERED ";

//Action Creator
// if getting any error in creating a action creator function remove that function and type it again😇
function orderCake() {
  return {
    //Action
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}
/*
//Actions as objects---->
const orderCake = {
  type: CAKE_ORDERED,
  payload: 1,
};
const restockCake = {
  type: CAKE_RESTOCKED,
  payload: 3,
};
*/
//Specifying Initial State
// const initialState = {
//   numofCakes: 10,
//   numofIceCream: 20,
// };
const initialStateCake = {
  numofCakes: 10,
};
const initialStateIceCream = {
  numofIceCream: 20,
};

//MULTIPLE REDUCERS
// (prevState,action)=>newState
//Cake Reducer
const reducerCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numofCakes: state.numofCakes + action.payload,
      };

    default: {
      return state;
    }
  }
};
//IceCream Reducer
const reducerIceCream = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numofIceCream: state.numofIceCream + action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIceCream: state.numofIceCream - action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numofIceCream: state.numofIceCream - 1,
      };
    default:
      return state; //To avoid the 'throw shape
  }
};
//Combining multiple reducers using combineReducer
const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(logger));
//---To access individual states---
//reducerCake takes initial state of cake only so cake reducer ke pass cake ki inital state ka access h change krne ka.same for iceCream
// console.log("Initial state", store.getState().iceCream);
console.log("Initial state", store.getState());
//----------use this when using logger middleware
// const unsubscribe = store.subscribe(() => {});
//----------use this when NOT using logger middleware
const unsubscribe = store.subscribe(
  () => console.log("Update state ", store.getState())
  // console.log("Update state ", store.getState().iceCream)
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
// store.dispatch(restockCake(1));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
// actions.orderCake();
actions.orderCake();
actions.orderCake();
// actions.restockCake(3);
console.log("--------UPDATION-------");
actions.restockIceCream(3);
actions.restockIceCream(3);
//if we use logger our unsubscribe method is not working..
unsubscribe();
store.dispatch(orderCake());
