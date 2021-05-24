import React, {useState} from "react";
import Screen from "./Screen";
import UserContextProvider from "./Context";

function App() {

  return (
    <UserContextProvider>
      <Screen/>
    </UserContextProvider>
  );
}

export default App;
