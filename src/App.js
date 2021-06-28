import React, {useReducer, useState} from "react";
import Screen from "./Screen";
import Lang from "./Context";
import translations from "./translations";
import reducer, { initialState, DEL, ADD, COMPLETE, UNCOMPLETE } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });    // toDo Array를 새로운 배열로 바꾸면 버그 생길 가능성이 높음. 대신에 기존 배열+새배열로 대체.
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add to do </h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span role ="img" aria-label = "delete toDo" onClick = {() => dispatch({ type: DEL, payload: toDo.id })}>❌</span>
            <span role ="img" aria-label = "complete toDo" onClick = {() => dispatch({ type: COMPLETE, payload: toDo.id })}>✔</span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span role ="img" aria-label = "delete completed" onClick = {() => dispatch({ type: DEL, payload: toDo.id })}>❌</span>
                <span role ="img" aria-label = "roll back completed to toDo" onClick = {() => dispatch({ type: UNCOMPLETE, payload: toDo.id })}>⏪</span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );

  /*return (
    <Lang defaultLang = "en" translations = {translations}>
      <Screen/>
    </Lang>
  );*/
}

export default App;