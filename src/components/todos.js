import List from "./list";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import {
    addTodo,
    selectTodos
} from '../reducers/todoSlice'
import { useRef } from "react";

export function Todos(){
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const inputRef = useRef();

    const addItem = (e) => {
        e.preventDefault();
        console.log(inputRef.current);
        dispatch(addTodo({'name': inputRef.current.value}))
    }

    return (
        <div>
          <h1>Todo List</h1>
          <input type="text" placeholder="Add Todo" ref={inputRef} />
          <button onClick={addItem}>Add Todo</button>
    
          <List items={todos} />
        </div>
      );
}