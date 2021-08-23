import {ADD_TECH, DELETE_TECH, GET_TECHS, TECHS_ERROR} from "./type";
import {setLoading} from "./logAction";


export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS, // get logs is the type
            payload: data // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR, // if there is a error this will be shown
            payload: error.response.statusText // this is the payload. for error.
        })
    }


}
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH, // get logs is the type
            payload: data // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR, // if there is a error this will be shown
            payload: error.response.statusText // this is the payload. for error.
        })
    }


}

export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/:${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: DELETE_TECH,
            payload: id

        })

    } catch (error) {
        dispatch({
            type: TECHS_ERROR, // if there is a error this will be shown
            payload: error.response.statusText // this is the payload. for error.
        })
    }


}

