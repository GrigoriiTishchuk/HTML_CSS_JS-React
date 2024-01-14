import React from 'react';
import Component1 from './Components/Component1';

function App() {
  const student = {
    username: "GrigoriiTishchuk"
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <Component1 username={student.username} />
    </div>
  );
}

export default App;
