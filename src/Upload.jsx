import * as React from "preact";
import { h, Component } from 'preact'


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div>
        Prueba
        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} />
      </div>
    );
  }
}

export default Upload;