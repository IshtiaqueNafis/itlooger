import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from 'react-redux'
import {addTech} from "../../actions/techActions";

const AddTechModal = ({addTech}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    function onSubmit() {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'pleas enter the first name'})
        } else {
            addTech({firstName, lastName})
            M.toast({html: 'added new technican'})
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>NEW TECHNICIAN</h4>
                <div className="row">

                    <div className='input-field'>
                        <input type="text" name='firstName' value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="message" className="active">First Name</label>
                    </div>
                </div>
            </div>

            <div className="modal-content">
                <div className="row">

                    <div className='input-field'>
                        <input type="text" name='firstName' value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="message" className="active">Last Name</label>
                    </div>
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

export default connect(null, {addTech})(AddTechModal);
