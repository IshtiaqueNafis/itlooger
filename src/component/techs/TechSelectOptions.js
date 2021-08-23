import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getTechs} from "../../actions/techActions";

const TechSelectOptions = ({getTechs, tech: {techs, loading}}) => {
    useEffect(() => {
        getTechs();
    }, [])
    return (
        !loading && techs != null && techs.map(t =>
            <option key={t.id} value={`${t.firstName} ${t.lastname}`}>
                {t.firstName} {t.lastName}
            </option>)
    );
};

TechSelectOptions.propTypes = {};
const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
