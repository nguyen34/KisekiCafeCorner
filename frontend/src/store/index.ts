import articleReducer from "./reducers/articles/reducer";
import landingReducer from "./reducers/landing/reducer";

import { combineReducers } from "redux"

const reducer = combineReducers({
  articles: articleReducer,
  landing: landingReducer,
})
  
  export default reducer