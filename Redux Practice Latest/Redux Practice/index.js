const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const produce = require("immer").produce;

const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
//Action Types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//Action Creators that returns the action
const orderCake = (name) => ({
  type: CAKE_ORDERED,
  quantity: 5,
  Fname: name,
});
const restockCake = (name) => ({
  type: CAKE_RESTOCKED,
  quantity: 2,
  Fname: name,
});
const orderIcecream = (name) => ({
  type: ICECREAM_ORDERED,
  quantity: 2,
  Fname: name,
});
const restockIcecream = (name) => ({
  type: ICECREAM_RESTOCKED,
  quantity: 3,
  Fname: name,
  payload: 1,
});
// console.log(orderCake("rudransh"));

//Initial State Object
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
  flavours: {
    choc: 5,
    van: 5,
    butterS: 10,
  },
};

//Reducer that returns the new state
const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      let CakeValue = state.numOfCakes - action.quantity;

      return {
        ...state,
        numOfCakes: CakeValue >= 0 ? CakeValue : "empty",
      };
    case CAKE_RESTOCKED:
      //   let CakeValue = state.numOfCakes - action.quantity;

      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};
const Icecreaamreducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      let IceValue = state.numOfIcecream - action.quantity;
      return {
        ...state,
        numOfIcecream: IceValue >= 0 ? IceValue : "empty",
      };
    case ICECREAM_RESTOCKED:
      //   let IceValue = state.numOfIcecream - action.quantity;
      return produce(state, (draft) => {
        draft.flavours.choc = draft.flavours.choc - action.payload;
      });
    // return {
    //   ...state,
    //   numOfIcecream: state.numOfIcecream + action.quantity,
    // };
    default:
      return state;
  }
};
//Combining the reduceers into the root reducer
const rootReducer = combineReducers({
  cake: Cakereducer,
  iceCream: Icecreaamreducer,
});
// Creating Redux Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State :", store.getState());
const unsubscribe = store.subscribe(() => {});

//Binding all actions using bindActionCreators
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
// Either this--
// actions.orderCake();
// actions.restockCake();
actions.orderIcecream();
actions.restockIcecream();

//Or this--
// store.dispatch(orderCake());
// store.dispatch(orderIcecream());
// store.dispatch(restockCake());
// store.dispatch(restockIcecream());
unsubscribe();
