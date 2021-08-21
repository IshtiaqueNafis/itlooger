import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min'

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    function onSubmit() {
        if (message === '' || tech === '') {
            M.toast({html: 'pleas enter a message and techs'})
        } else {
            console.log('hi');
            //clear field
            setMessage('')
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyles}>
            <div className="modal-content">
                <h4>Enter SYSTEM LOG</h4>
                <div className="row">

                    <div className='input-field'>
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="message" className="active">Log message</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                        <option value="disabled">SELECT Technician</option>
                        <option value="Sam smith">Sam SMith</option>
                        <option value="Sam smith">Sam SMith</option>
                        <option value="Sam smith">Sam SMith</option>
                        <option value="Sam smith">Sam SMith</option>
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
export default EditLogModal;
