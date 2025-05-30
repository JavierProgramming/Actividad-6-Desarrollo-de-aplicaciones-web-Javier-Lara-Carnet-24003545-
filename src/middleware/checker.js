const checker = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);

  const forbiddenWord = "bitcoin";
  const isTodoAdd = action.type === 'todos/addTodo';
  const isGoalAdd = action.type === 'goals/addGoal';
  const name = action.payload?.name?.toLowerCase() || '';

  if ((isTodoAdd || isGoalAdd) && name.includes(forbiddenWord)) {
    alert("Nope. That's a bad idea.");
    return; // Block the action
  }

  return next(action);
};

export default checker;
