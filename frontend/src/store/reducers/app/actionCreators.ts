import * as appTypes from './actionTypes';

export function setPageHeader(header: string) {
    return {
        type: appTypes.SET_PAGE_HEADER,
        payload: header,
    }
}