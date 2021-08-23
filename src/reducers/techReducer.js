import {ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING} from "../actions/type";

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
        case ADD_TECH:{
            return{
                ...state,
                techs:[...state.techs,action.payload,]
            }
        }
        case GET_TECHS: {
            return {
                ...state,
                techs: action.payload,
                loading: false,
            }
        }

        case DELETE_TECH:{
            return{
                ...state,
                techs: state.techs.filter(tech=> tech.id !==action.payload)
            }
        }

        default:
            return state;
    }
}

