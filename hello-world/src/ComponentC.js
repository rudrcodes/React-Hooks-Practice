import React from "react";
import { UserConsumer } from "./my-components/userContext";
function ComponentC() {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
      {/* Here we passed a function as UserConsumer child ,the function then recieves the context value as it's parameter which can be then used to return the desired JSX*/}
    </UserConsumer>
  );
}

export default ComponentC;
