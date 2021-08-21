import React from 'react';
import PropTypes from 'react';
const TechItem = ({tech}) => {
    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className='secondary-content'>
                    <i className="material-icons grey">delete</i>
                </a>
            </div>

        </li>
    );
};

TechItem.propTypes = {

};

export default TechItem;
