import {GET_TECHS, SET_LOADING} from "../actions/type";

const initialState = {
    techs: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {


    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_TECHS: {
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        }

        default:
            return state;
    }
}

