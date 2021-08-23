import {
    ADD_LOG,
    CLEAR_CURRENT,
    DELETE_LOG,
    GET_LOGS,
    LOGS_ERROR,
    SEARCH_LOGS,
    SET_CURRENT,
    SET_LOADING,
    UPDATE_LOG
} from "./type";

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();
//
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }


export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS, // get logs is the type
            payload: data // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, // if there is a error this will be shown
            payload: error.response.data // this is the payload. for error.
        })
    }


}

export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, // if there is a error this will be shown
            payload: error.response.data // this is the payload. for error.
        })
    }
}
//delete log froms erver
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });


        dispatch({
            type: DELETE_LOG, // get logs is the type
            payload: id // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, // if there is a error this will be shown
            payload: error.response.data // this is the payload. for error.
        })
    }


}
//update log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const res=   await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body:JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG, // get logs is the type
            payload: data // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, // if there is a error this will be shown
            payload: error.response.data // this is the payload. for error.
        })
    }


}
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS, // get logs is the type
            payload: data // payload is the data.
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR, // if there is a error this will be shown
            payload: error.response.data // this is the payload. for error.
        })
    }


}

// current log
 export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}
//clear current log

export const clearCurrentLog = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}