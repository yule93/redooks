/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../reducer";
import { useDispatch } from "../todoContext";

export default ({ text, id, isCompleted }) => {
    const dispatch = useDispatch();

    <li key={id}>
        <span>{text}</span>
        <span role ="img" aria-label = "delete completed" onClick = {() => dispatch({ type: DEL, payload: id })}>❌</span>
        <span role ="img" aria-label = "roll back completed to toDo" onClick = {() => dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })}>
            {isCompleted ? "⏪" : "✔"}
        </span>
    </li>
}