import React, { Component } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UserClassComponent from './UserClassComponent';
function App() {

  // ******* USing variable
  // let data = "Tausif Shaikh" // variable
  // function Apple() {
  //   alert("Function called...")
  //   data = "Kabir" // varibale doesn't update
  // }

  const [data, setData] = useState(0)

  function Apple() {
    setData(data + 1);
  }

  return (
    <div className="App">

      <h1>{data}</h1>
      {/* <User></User>
      <UserClassComponent></UserClassComponent> */}


      {/* <button onClick={Apple}>Click Me!</button> */}

      <button onClick={() => Apple()} >Click Me!</button>
      {/* <button onClick={() => alert("Hello")}>Click Me!</button> */}
    </div>
  );
}


export default App;
