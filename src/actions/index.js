import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs COMPLETE
//              - dispatch actions that indicate if we are waiting for a server response COMPLETE
//              - dispatch an error text action if an error is returned from the server COMPLETE
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field COMPLETE
//              - send a post request with the smurf as body to see if there is an error COMPLETE
//              - dispatch add smurf action if request is successful COMPLETE
//              - dispatch an error text action if an request returns an error COMPLETE
//3. Add set error text action:
//              - return action object setting error text COMPLETE
//4. Any other actions you deem nessiary to complete application. COMPLETE

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const UPDATE_FORM_ERROR = "UPDATE_FORM_ERROR";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            )
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }))
}

export const addSmurf = (smurf) => dispatch => {
        dispatch({type: POST_SMURF_START});
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res =>{
                dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: err}))
    }

export const updateFormError = (error) => {
    return {
        type: "UPDATE_FORM_ERROR",
        payload: error
    }
}