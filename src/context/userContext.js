import React from "react";

const userContext = React.createContext({
  username: "Max Mustermann",
  email: "max@mustermann.de",
  authenticated: false,
});

export { userContext };
