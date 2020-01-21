import React from 'react';
import './App.css';

import ReactFunc, { ReactCls } from './components/React';
import CompReuseDemo from './components/CompReuseDemo';
import NestingDemo from './components/NestingDemo';

function App() {
  return (
    <div className="App">

      {/* Reusing the component below and passing different props each time. */}
      
      {/* <CompReuseDemo
        title="Hello, I'm a prop."
        names={['Doe, John', 'Pan, Peter', 'Bay, Michael', 'Gunn, Robert']}
      />
      <CompReuseDemo
        title="I'm reusing the component to display new names"
        names={['Stark, Brandon', 'Snow, John', 'Lanister, Tyrion', 'Targaryen, Aegon']}
      /> */}

      
      {/* Nesting component inside component */}
      {/* <NestingDemo />  */}

      {/* Functional and Class component */}
      <ReactFunc />
      <ReactCls />
    </div>
  );
}

export default App;