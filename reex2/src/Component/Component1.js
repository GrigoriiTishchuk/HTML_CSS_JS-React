import React from 'react';
import Users from '../School/Users';

function Component1(props) {
  return (
    <div>
      <h1>Component 1</h1>
      <Users username={props.username} />
    </div>
  );
}

export default Component1;