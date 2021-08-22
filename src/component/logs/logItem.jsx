import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Moment from "react-moment";
import {deleteLog, setCurrent} from "../../actions/logAction";
import M from 'materialize-css/dist/js/materialize.min'
const LogItem = ({log, deleteLog,setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id)
        M.toast({html:'log item deleted'})
    }

    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal"
                   className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={()=>setCurrent(log)}>{log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span id="black-text">ID#{log.id}</span> last Updated  by
                    <span className="black-text">
                        {log.tech}
                    </span> on <Moment format='MMMM Do YYYY,h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content">
                    <i className='material-icons grey-text' onClick={onDelete}>delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
};

export default connect(null, {deleteLog,setCurrent})(LogItem);
