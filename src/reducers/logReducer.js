import {
    ADD_LOG,
    CLEAR_CURRENT,
    DELETE_LOG,
    GET_LOGS,
    LOGS_ERROR, SEARCH_LOGS,
    SET_CURRENT,
    SET_LOADING,
    UPDATE_LOG
} from "../actions/type";

const initalState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}
// this is the initalState with the following properties.

export default (state = initalState, action) => { // this is the default state.
// state --> recives the initalState, action passed
    // check on action.type and loop through it.
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state, // copy the state.
                logs: action.payload, // hwatever we get from logs can show up heere. fvia payload.
                loading: false,
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true // set it to true.
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload.id),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload

            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }

        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}