
import * as actionTypes from "./actionTypes";
import axiosConfig from '../../../plugins/axiosConfig';

export function getGreeting() {
    return (dispatch: LandingDispatchType) => {
        axiosConfig.get('/api/test_redux_django/')
            .then((response) => {
                console.log(response);
                dispatch({
                    type: actionTypes.GET_GREETING,
                    payload: response.data.message,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
