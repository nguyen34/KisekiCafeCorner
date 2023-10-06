import articleReducer from './reducers/articles/reducer';
import landingReducer from './reducers/landing/reducer';
import appReducer from './reducers/app/reducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
	articles: articleReducer,
	landing: landingReducer,
	app: appReducer,
});

export default reducer;
