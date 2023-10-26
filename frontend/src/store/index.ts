import articleReducer from './reducers/articles/reducer';
import landingReducer from './reducers/landing/reducer';
import appReducer from './reducers/app/reducer';
import testReducer from './reducers/test/reducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
	articles: articleReducer,
	landing: landingReducer,
	app: appReducer,
	test: testReducer,
});

export default reducer;
