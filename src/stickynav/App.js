// Refactored Code

import React, { Component } from 'react';
import './styles.css';
// classList .add / .remove

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById('nav');
      if (isTop) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <div id="nav" className="nav">
        <div className="nav_text">
          <h1>Henlo (OvO")</h1>
          <h1>I'm a navigation text!</h1>
        </div>
      </div>
    );
  }
}

export default App;

// Old Code
// import React, { Component } from 'react';
// import './styles.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       scrolled: false,
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', () => {
//       const isTop = window.scrollY < 100;
//       if (isTop !== true) {
//         this.setState({ scrolled: true });
//       } else {
//         this.setState({ scrolled: false });
//       }
//     });
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll');
//   }

//   render() {
//     return (
//       <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
//         <div className="nav_text">
//           <h1>Henlo (OvO")</h1>
//           <h1>I'm a navigation text!</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
