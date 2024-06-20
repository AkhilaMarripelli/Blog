import React from 'react';

const Greeting2 = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default Greeting2;
