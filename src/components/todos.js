import React, { useRef, useState } from 'react';
import List from './list';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from '../reducers/todoSlice';

export function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const inputRef = useRef();
  const [error, setError] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    if (!value) {
      setError('Please enter a valid todo name.');
      return;
    }

    dispatch(addTodo({ name: value }));
    inputRef.current.value = '';
    setError('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addItem}>
        <input type="text" placeholder="Add Todo" ref={inputRef} aria-label="New todo" />
        <button type="submit">Add Todo</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <List items={todos} />
    </div>
  );
}
