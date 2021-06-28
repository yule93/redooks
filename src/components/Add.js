/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, useState } from "react";
import { ADD } from "../reducer";
import { useDispatch } from "../todoContext";

export default () => {
    const [newToDo, setNewToDo] = useState("");
    const { dispatch } = useDispatch();

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
        </>
    );
}