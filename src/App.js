import React, { Component } from 'react';

import './App.css';

import Nav from './nav/nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      name: ['Kevin'],
      postsAva: ['1'],
      freeCall: ['3'],
      credits: ['20'],
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
  }

  render() {
    const open = this.state.isOpen;
    return (
      <div class="nav_container">
        <div class="navContainer">
          <Nav
            name={this.state.name}
            postsAva={this.state.postsAva}
            freeCall={this.state.freeCall}
            credits={this.state.credits}
          />
          <h4 class={open ? 'collapse' : 'collapse_open'} onClick={this.toggle}>
            |||
          </h4>
        </div>
        <div
          class={open ? 'nav_collapse' : 'nav_collapse_open'}
          onClick={this.toggle}
        >
          <h1> Profile </h1>
          <h1> Matches </h1>
          <h1> Messages </h1>
          <h1> Job Postings </h1>
          <h1> Billing </h1>
          <hr />
          <h1> Sign Out </h1>
        </div>
      </div>
    );
  }
}

export default App;
