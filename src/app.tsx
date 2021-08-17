
import * as React from 'preact';
import * as ReactDOM from 'preact';
import { h, Component } from 'preact'


import Upload from './Upload';
import Button from './Button';

class App extends React.Component<{message: string}, {count:number}> {
  state = {count: 0};
  render() {
    return (
      <div>
              <h2>{this.props.message}</h2>
              <Upload/>
          </div>);
  }
}
ReactDOM.render(
  <App message="Upload images"/>,
  document.getElementById('app')
  );
  
/*
import { h, render } from 'preact';
  
const App = () => <h1>Hello from Preact and Typescript!</h1>;

render(<App />, document.getElementById('app'));
*/