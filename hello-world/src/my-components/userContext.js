import React from "react";
const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

//Now we have to export them to use them in the App componenet and the required component
export { UserConsumer, UserProvider };

//Don't use default while exporting them ..don't know why.