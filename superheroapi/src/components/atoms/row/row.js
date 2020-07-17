import * as React from "react";
import "./styles.scss";

class Row extends React.Component {
  render() {
    return <tr className="row">{this.props.children}</tr>;
  }
}

export default Row;
