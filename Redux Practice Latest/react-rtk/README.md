# REACT-REDUX

## Provider

-First part is to provide our REDUX store to our REACT application .
-REACT-REDUX provides us a Provider .
-import it in main or index file and provide a prop store as store to it.

## useSelector hook

-Use to get hold of any state maintained in the Redux store
-This hook takes a selector function as an argument. The selector is called with the store state ,then we can access the particular reducer(key) we want to access and then store the returned value in a variable.
-This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.

## useDispatch hook

-Use to dispatch an action with react redux
-This hooks returns a reference to the dispatch function from the redux store
-A hook to access the redux dispatch function.
-@returns — redux store's dispatch function.
-We have to import the actions from Slices to use them in dispatch function.
