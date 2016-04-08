import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (
      <h1>Hellllllo</h1>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);
