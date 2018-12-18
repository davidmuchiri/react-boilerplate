import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
   state = {
      count: 0
   };
   add = () => this.setState(({ count }) => ({ count: count + 1 }));
   minus = () => this.setState(({ count }) => ({ count: count - 1 }));

   render() {
      const {
         state: { count },
         add,
         minus
      } = this;

      return (
         <div>
            <h1>Hello world</h1>
            <h2 className={count > 10 ? 'warning' : null}>count: {count}</h2>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
         </div>
      );
   }
}
export default hot(module)(App);
