import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { fetchUsers } from "./userSlice";

export const UserView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h2>List of Users : </h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>Error : {user.error}</div>}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
         </ul>
        // <div>
        //     {JSON.stringify(user)}
        //   <div>Helllo</div>
        // </div>
      ) : null}
    </div>
  );
};
