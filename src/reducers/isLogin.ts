export const isLoginReducer = (action = { type: "" }, state = false) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};
