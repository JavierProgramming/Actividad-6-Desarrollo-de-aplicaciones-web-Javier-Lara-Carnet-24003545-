import React, { useRef } from 'react';
import List from "./list";
import { useSelector, useDispatch } from 'react-redux';
import { addGoal, selectGoals } from '../reducers/goalsSlice';

export function Goals() {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);
  const inputRef = useRef();

  const handleAddGoal = (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim();
    if (name) {
      dispatch(addGoal({ name }));
      inputRef.current.value = '';
    }
  };

  return (
    <div className="goals-container">
      <h1>Goals List</h1>
      <form onSubmit={handleAddGoal} className="goals-form">
        <input 
          type="text" 
          placeholder="Add Goal" 
          ref={inputRef} 
          aria-label="Goal name"
          className="goal-input"
        />
        <button type="submit" className="btn btn-primary">Add Goal</button>
      </form>
      <List items={goals} />
    </div>
  );
}
