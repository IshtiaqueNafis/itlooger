import './App.css';
import React, {Fragment, useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from "./component/layout/searchBar.component";
import Logs from "./component/logs/logs.component";
import AddBtn from "./component/layout/addBtn";
import AddLogModal from "./component/logs/addLogModal";
import EditLogModal from "./component/logs/editLogModal";
import AddTechModal from "./component/techs/addTechModal";
import TechListModal from "./component/techs/techListModal";
import {Provider} from 'react-redux'
import store from "./store";



const App = () => {
    useEffect(() => {
        // intialzes materalize js.
        M.AutoInit()
    })
    return (
        <Provider store={store}>

        <Fragment>
            <SearchBar/>
            <div className="container">
                <TechListModal/>
                <AddBtn/>
                <AddTechModal/>
                <EditLogModal/>
                <AddLogModal/>
                <Logs/>
            </div>
        </Fragment>
        </Provider>
    );
};

export default App;
