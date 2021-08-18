import * as React from "preact";
import { h, Component } from 'preact'

import style from './style.scss';


class ActionButton extends Component {
  render() {
    return (
      <button class="button-action" >Merge </button>
    );
  }
}

export default ActionButton;