import React, { useState, createContext } from "react";
import { Login } from "./Login";
import { User } from "./User";

export const AppContext = createContext(null);
export const UseContextComp = () => {
  const [user, setUser] = useState("");
  //using states
  return (
    <>
      <h1 className="span">
        Truth - <span>{user}</span>
      </h1>
      <AppContext.Provider value={{ user, setUser }}>
        <Login />
        <User />
      </AppContext.Provider>
    </>
  );
};
