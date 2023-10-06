import * as actionTypes from './actionTypes';

const initialState: LandingState = {
	greeting: 'Hello World!',
};

const landingReducer = (
	state: LandingState = initialState,
	action: LandingAction
) => {
	switch (action.type) {
		case actionTypes.GET_GREETING:
			return {
				...state,
				greeting: action.payload,
			};
	}
	return state;
};

export default landingReducer;
