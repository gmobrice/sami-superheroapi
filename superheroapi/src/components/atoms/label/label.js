import * as React from "react";
import "./styles.scss";

class Label extends React.Component {
  render() {
    return <label className="label">{this.props.children}</label>;
  }
}

export default Label;
