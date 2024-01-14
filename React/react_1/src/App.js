import logo from './logo.svg';
import { useState } from 'react';
import Component1 from './Components/Component_1';
import UserCard from './Components/UserCard';
import Component2 from './Components/Component_2';

const user_1 = {
  name: "Greg",
  email: "some@asd.com",
};


function App() {
  return (
    <>
    <h1>Big one</h1>
    <Component1/>
    <UserCard myObject = {user_1}/>
    <Component2/>
    </>
  );
}

export default App;
