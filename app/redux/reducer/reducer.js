// reducer.js
const initialState = {
  questionair: null,
  states: null,
  loading: false,
  stepFormQuestions: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTIONAIR":
      return {
        ...state,
        questionair: action.payload,
      };
    case "SET_STATES":
      return {
        ...state,
        states: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_LOCAL_USER_DATA":
      return {
        ...state,
        stepFormQuestions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
