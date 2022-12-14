import React, {Fragment,useEffect} from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogsModal from './components/logs/AddLogsModal';
import EditLogsModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';




const App = () => {
  useEffect(() => {
    // Init materialize javascript
    M.AutoInit();
  })
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar/>
        <div className='container'>
          <AddBtn/>
          <AddLogsModal/>
          <EditLogsModal/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
      </Provider>
  );
}

export default App;
