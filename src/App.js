import React from 'react';
import './App.css';

import ReactFunc, { ReactCls } from './components/React';
import NestingDemo from './components/NestingDemo';

function App() {
  return (
    <div className="App">
      <NestingDemo title="Hello, I'm a prop." message="I'll be passed on as a prop to the component"/>
      {/* <ReactFunc />
      <ReactCls /> */}
    </div>
  );
}

export default App;