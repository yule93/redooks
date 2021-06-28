import uuid from "uuid/v4";

export const initialState = {
    toDos: [],
    completed: []
  };
  
export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "comp";
export const UNCOMPLETE = "uncomp";
  
const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,       // 이전 상태의 state를 항상 return 해줘야 한다. 왜냐하면 state.completed의 length를 계속해서 App.js에서 재고 있기 때문!!
                toDos: [...state.toDos, { text: action.payload, id: uuid() }]
            };
        case DEL:
            return {
                ...state,       // 이전 상태의 state를 항상 return 해줘야 한다.
                toDos: state.toDos.filter(toDo => {
                    console.log("Current: ", toDo.id, "Target: ", action.payload);
                    return toDo.id !== action.payload;  // target이랑 다른 아이디면 살아남고 같으면 삭제
            })
        };   // filter 함수는 모든 array에 적용됨. 여기서 array는 toDos.
        case COMPLETE:
            const target = state.toDos.find(toDo => toDo.id === action.payload);
            return {
                ...state,
                toDo: state.toDos.filter(toDo => toDo.id !== action.payload),
                completed: [...state.completed, { ...target }]
            };
        case UNCOMPLETE:
            const untarget = state.completed.find(toDo => toDo.id === action.payload);
            return {
                ...state,
                completed: state.completed.filter(toDo => toDo.id !== action.payload),
                toDo: [...state.toDos, { ...untarget }]
            };
        default:
            return;
    }
}

export default reducer;