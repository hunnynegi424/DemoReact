import React from 'react';
import './App.css';

// import ReactFunc, { ReactCls } from './components/React';
// import CompReuseDemo from './components/CompReuseDemo';
// import NestingDemo from './components/NestingDemo';
// import StateDemo from './components/ClsComp/StateClsDemo';
import StateUpdtDemo from './components/ClsComp/StateUpdtDemo';

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
      {/* <ReactFunc />
      <ReactCls /> */}


      {/* State Initialized Component */}
      {/* <StateDemo/> */}


      {/* State Updation Component */}
      <StateUpdtDemo/>
    </div>
  );
}

export default App;