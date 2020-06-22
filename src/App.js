import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Notes from './components/notes/Notes';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Notes />
      </div>
    </Fragment>
  );
}

export default App;
