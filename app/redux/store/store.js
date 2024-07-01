import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchQuestionair } from "../actions/fetchQuestionair";
import reducer from "../reducer/reducer";
import { fetchStates } from "../actions/fetchStates";
import { fetchLocalUserData } from "../actions/fetchUserLocalData";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchQuestionair());
store.dispatch(fetchStates());
store.dispatch(fetchLocalUserData());

export default store;
