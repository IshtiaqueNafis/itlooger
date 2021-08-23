import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min'
import {updateLog} from "../../actions/logAction";
import TechSelectOptions from "../techs/TechSelectOptions";


const EditLogModal = ({current, updateLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    }, [current])

    function onSubmit() {
        if (message === '' || tech === '') {
            M.toast({html: 'pleas enter a message and techs'})
        } else {
            const upLog = {
                id: current.id,
                message,
                attention,
                tech,
                date:new Date()
            }
            updateLog(upLog)
            //clear field
            setMessage('')
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyles}>
            <div className="modal-content">
                <h4>Enter SYSTEM LOG</h4>
                <div className="row">

                    <div className='input-field'>
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                        <TechSelectOptions/>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="input">
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                className='filled-in'
                                checked={attention}
                                value={attention}
                                onChange={e => setAttention(!attention)}
                            />
                            <span>Needs attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className='modal-close waves-effect waves-green btn '>
                    Enter
                </a>
            </div>
        </div>
    );
};
const modalStyles = {
    width: '75%',
    height: '75%'

}
const mapStateToProps = state => (
    {
        current: state.log.current
    }
)

export default connect(mapStateToProps, {updateLog})(EditLogModal);
