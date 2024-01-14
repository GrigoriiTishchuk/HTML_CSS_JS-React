import React from 'react';
import './App.css';
import User from './Comps/User';
import LightSwitch from './Comps/LightSwitch';

const user_1 = {
  name: "Greg",
  email: "some@asd.com",
  location: "Finland",
};


function App() {
  return (
    <div className="App">
      <User propies = {user_1}/>
      <LightSwitch/>
    </div>
  );
}

export default App;
