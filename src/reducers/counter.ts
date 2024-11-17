export const counterReducer = (
  state = 0,
  action = { type: "", payload: 0 },
) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ?? 1);
    case "DECREMENT":
      return state - (action.payload ?? 1);
    default:
      return state;
  }
};
