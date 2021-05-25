import React, {useState} from "react";
import Screen from "./Screen";
import Lang from "./Context";
import translations from "./translations";

function App() {

  return (
    <Lang defaultLang = "en" translations = {translations}>
      <Screen/>
    </Lang>
  );
}

export default App;
