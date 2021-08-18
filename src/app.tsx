import * as React from "preact";
import * as ReactDOM from "preact";
import { h, Component } from "preact";

import Upload from "./Upload/Upload";
import ActionButton from "./ActionButton/ActionButton"

class App extends React.Component<{ message: string }, { count: number }> {
  state = { count: 0 };
  render() {
    return (
      <div>

        <div id="Frame" style={{"height":"100vh", "width":"100vw ","display": "flex" }}>
          <div id="Container-Uploads" style={{"display": "flex" , "flexDirection":"column" ,"justify-content": "center" }}>
            <Upload/>
            <ActionButton />
            <Upload />
          </div>

          <div id="Resultado">
            Resultado final
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <App message="Upload images" />,
  document.getElementById("app")
);

/*
import { h, render } from 'preact';
  
const App = () => <h1>Hello from Preact and Typescript!</h1>;

render(<App />, document.getElementById('app'));
*/
