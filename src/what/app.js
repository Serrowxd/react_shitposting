import React, { Component } from 'react';
import '../reset.css';
import '../less/styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      void: null,
    };
  }
  render() {
    return (
      <div>
        <h1> Henlo </h1>
      </div>
    );
  }
}

export default App;
