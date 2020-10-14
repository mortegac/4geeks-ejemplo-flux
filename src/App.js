import React from 'react';

import './App.css';

import injectContext from './store/appContext';
import List from './components/List.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <List />

      </header>
    </div>
  );
}

export default injectContext(App);
