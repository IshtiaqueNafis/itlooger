import React, {useEffect} from 'react';
import {connect} from "react-redux";
import LogItem from "./logItem";
import PreLoader from "../layout/preloader";
import PropTypes from "prop-types";
import {getLogs} from "../../actions/logAction";

const Logs = ({log: {logs, loading},getLogs}) => {


    useEffect(() => {
        getLogs();
    }, [])

   if(loading || logs ==null){
    return   <PreLoader/>
   }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {
                !loading && logs.length === 0 ? (<p className='center'>There is no loading</p>) : logs.map(log =>
                    <LogItem log={log} key={log.id}/>)
            }
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    log: state.log, // state .log gets all the log proeprty from the log Reducer.
    getLogs: PropTypes.func.isRequired,
})
export default connect(mapStateToProps, {getLogs})(Logs);
