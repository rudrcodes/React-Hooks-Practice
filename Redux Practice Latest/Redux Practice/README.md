# Redux Core :-

# Notes:

## why we created a Node application and not just use it without node.

--We used node so we can install dependencies if we would have done it using without node we will not be able to use the redux package.
--we created/initialed the project using ----"npm init --yes"

## Theory -----

--Actions:Only way to interact with the STORE.Actions describe what has to be done.
--Reducers:Takes action and then make changes in the store based on the action.The signature of Reducers is (prevState,action)=>newState
--Store:All the states are present in the store.Gets updated based on the ACTION provided to the REDUCERS

# Redux Store:

One store for the entire application
Responsibilities of the Store:-
🎯Holds application state
🎯Allows access to the state via getState()
🎯Allows state to be updated via dispatch(action)
🎯Register listeners via subscribe(listener)
🎯 Handles unregistering of listeners via the function returned by subscribe(listener)

## More on Redux Store:-

-Redux provides a createStore() method to create the store
-We pass the reducer to the createStore() method , so that the store can have access to the application state(Responsibility 1️⃣)
-The createStore() provides a getState() method that we can use to get the state of the application.(Responsibility 1️⃣ 2)
-The createStore() provides a subscribe() method which will run if the react state undergoes any changes .(Responsibility 1️⃣ 4)
-The createStore() provides a dispatch() method which will take a Action object/Action creator .(Responsibility 1️⃣ 3)

## About importing the required methods

As we are using redux in a normal node application and not with React now so we can import the required methods using the "require" syntax

--- example:
In React application we would have done something like this:
import redux from 'redux'

In a normal Node application we will do it like this:
const redux= require('redux')

# Important (The essence of Redux)

## Flow Of Redux :

1-Create a store
2-Declare initial state and the reducer
3-Define action creators and return action from them
4-subscribe to the store
5-dispatch actions using Action Creators to update the store
6-Finally unsubscribe from the store to avoid any more actions

## bindActionCreators

Redux provides bindActionCreators method to bind actions together

## Immer library

npm i Immer
-Immer is a library that will allow use to write code such that ,it looks like we are actually making changes into the initial state but deep down immer provides is just a sugar coated code way over the long version of code.
-immer library provides a produce method

# Middleware

-Suggested way to extend Redux with custom functionality.
-Provides a third-party extension between dispatching an action and the moment it reaches the reducer.
-Use Middleware for logging,crash Reporting and performing async tasks etc.
-- Redux provide an applyMiddleware method to apply Middlewares int the store

## Redux Thunk

-Redux thunk is a Middleware that helps in performing async actions in the Store
-It allows us to write an action creato that can return a function instea of an action
-The returned function can be impure , this means the returned function can have sideEffects such as async calls or change data ouside its scope
-We can performe async operations in the returned function
-We can access the actions(basically the action creators) in the function that we will be returning by passing the dispatch method provided by the createStore method and then can pas the action creators inside the dispatch method on different scenario such as when we make the async request and if the async request is successfull or if there is any error.
