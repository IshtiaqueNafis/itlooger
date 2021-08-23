import {GET_LOGS, GET_TECHS, LOGS_ERROR, TECHS_ERROR} from "./type";
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