import * as React from "preact";
import { h, Component } from 'preact'
import style from './style.scss';


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
      <div style={{"height": "100%" ,"":"red" }}>
        <label class="upload-label"  for= "Image"> 
        <div>
          Arrastre aqui sus archivos 
        </div>
        <input  id="Image" class="upload" type="file" onChange={this.handleChange} />
          </label>

      
        <img src={this.state.file} />
      </div>
    );
  }
}

export default Upload;