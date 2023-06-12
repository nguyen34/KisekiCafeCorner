import articleReducer from "./reducers/articles/reducer";

import { combineReducers } from "redux"

const reducer = combineReducers({
  articles: articleReducer,
})
  
  export default reducer