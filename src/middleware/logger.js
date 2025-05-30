const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("Updated state:", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
