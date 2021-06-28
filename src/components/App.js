import React from "react";
import Screen from "../Screen";
import Lang from "../Context";
import translations from "../translations";
import Add from "./Add";
import List from "./List";
import ToDo from "./ToDo";
import { useState } from "../todoContext";

function App() {
  const toDos = useState();
  const completed = useState();
  return (
    <>
      <Add />
      <List name = "To Do">
        {toDos.map((toDo) => (
          <ToDo key = {toDo.id} id = {toDo.id} text = {toDo.text} isCompleted = {false}/>
        ))}
      </List>
      <List name = {completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo key = {toDo.id} id = {toDo.id} text = {toDo.text} isCompleted = {true} />
        ))}
      </List>
    </>
  );

  /*return (
    <Lang defaultLang = "en" translations = {translations}>
      <Screen/>
    </Lang>
  );*/
}

export default App;