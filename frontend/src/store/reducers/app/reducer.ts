import * as actionTypes from './actionTypes';

const initialState: AppState = {
    pageHeader: "",
}

const appReducer = (
    state: AppState = initialState,
    action: AppAction) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_HEADER:
            return {
                ...state,
                pageHeader: action.payload,
            }
            
    }
    return state;
}

export default appReducer;