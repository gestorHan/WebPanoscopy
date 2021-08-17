
import * as React from 'preact';
import * as ReactDOM from 'preact';
import { h, Component } from 'preact'


import Upload from './Upload';
import Button from './Button';

class App extends React.Component<{greeting: string}, {count:number}> {
  state = {count: 0};
  render() {
    return (
      <div>
              <h2>{this.props.greeting}</h2>
              <Upload/>
              <button onClick={() => this.setState(
                {count: this.state.count+1})}>
                This button has been clicked {this.state.count} times.
              </button>
          </div>);
  }
}
ReactDOM.render(
  <App greeting="Hello, world!"/>,
  document.getElementById('app')
  );
  
/*
import { h, render } from 'preact';
  
const App = () => <h1>Hello from Preact and Typescript!</h1>;

render(<App />, document.getElementById('app'));
*/