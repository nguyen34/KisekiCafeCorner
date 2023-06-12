
import * as actionTypes from "./actionTypes";
import axios from 'axios';

export function getGreeting() {
    return (dispatch: LandingDispatchType) => {
        axios.get('/test_redux_django')
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
