import React, { Component } from 'react';

import './App.css';

import Nav from './nav/nav';
import Breadcrumb from './nav/breadcrumb';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      name: ['Kevin'],
      postsAva: ['1'],
      freeCall: ['3'],
      credits: ['20'],
      crumbs: ['(OvO") /'],
    };

    this.toggle = this.toggle.bind(this);
    this.bCrumb = this.bCrumb.bind(this);
    this.unCrumb = this.unCrumb.bind(this);
  }

  bCrumb() {
    const joined = this.state.crumbs.concat('Henlo (OvO") /');
    this.setState({ crumbs: joined });
  }

  unCrumb() {
    const unjoined = this.state.crumbs.splice(1);
    this.setState({ crumbs: unjoined });
  }

  toggle() {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
  }

  render() {
    const open = this.state.isOpen;
    return (
      <div class="nav_container">
        <div class="cont">
          <div>
            <Breadcrumb crumb={this.state.crumbs} />
          </div>
          <div class="navContainer">
            <Nav
              name={this.state.name}
              postsAva={this.state.postsAva}
              freeCall={this.state.freeCall}
              credits={this.state.credits}
            />
            <h4
              class={open ? 'collapse' : 'collapse_open'}
              onClick={this.toggle}
            >
              |||
            </h4>
          </div>
        </div>
        <div
          class={open ? 'nav_collapse' : 'nav_collapse_open'}
          // onClick={this.toggle} // this toggles the auto-close
        >
          <a href="#" class="nav_link">
            <h3> Profile </h3>
          </a>
          <a href="#" class="nav_link">
            <h3> Matches </h3>
          </a>
          <a href="#" class="nav_link">
            <h3> Messages </h3>
          </a>

          <a href="#" class="nav_link">
            <h3>Job Postings </h3>
          </a>
          <a href="#" class="nav_link">
            <h3> Billing </h3>
          </a>

          <hr />
          <a href="#" class="nav_link">
            <h3> Sign Out </h3>
          </a>
        </div>
        <button onClick={this.bCrumb}> Click Me (OvO") </button>
        <button onClick={this.unCrumb}> Don't Click Me (O^O") </button>
      </div>
    );
  }
}

export default App;
