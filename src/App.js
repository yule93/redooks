import React, {useReducer, useState} from "react";
import Screen from "./Screen";
import Lang from "./Context";
import translations from "./translations";
import uuid from "uuid/v4";

const initialState = {
  toDos: []
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
      case DEL:
        return {toDos: state.toDos.filter(toDo => {
          console.log("Current: ", toDo.id, "Target: ", action.payload);
          return toDo.id !== action.payload;  // target이랑 다른 아이디면 살아남고 같으면 삭제
        })
      };   // filter 함수는 모든 array에 적용됨. 여기서 array는 toDos.
    default:
      return;
  }
}

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
            <button onClick = {() => dispatch({ type: DEL, payload: toDo.id })}>Del</button>
          </li>
        ))}
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