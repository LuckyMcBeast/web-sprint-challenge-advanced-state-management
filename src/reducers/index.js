import * as actions from '../actions'

export const initialState = {
    smurfs: [],
    appLoading: false,
    errorText: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SMURFS_START:
            return {
                ...state,
                appLoading: true,
                errorText: ''
            };
        case actions.FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false,
                errorText: ''
            };
        case actions.FETCH_SMURFS_FAIL:
            return {
                ...state,
                errorText: action.payload
            };
        case actions.POST_SMURF_START:
            return {
                ...state,
                appLoading: true,
                errorText: ''
            };
        case actions.POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false,
                errorText: ''
            };
        case actions.POST_SMURF_FAIL:
            return {
                ...state,
                errorText: action.payload
            };
        case actions.UPDATE_FORM_ERROR:
            return {
                ...state,
                errorText: action.payload
            }
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:  COMPLETE
//      - an array of smurfs
//      - a boolean indicating if the app is loading 
//      - error text
//2. Setup your reducer to take the state and action as peremeters COMPLETE
//3. Add in cases to your reducer to handle: COMPLETE
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary