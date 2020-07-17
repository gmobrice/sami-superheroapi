import * as React from "react";
import "./styles.scss";

class Column extends React.Component {
  render() {
    if (this.props.header) {
      return <th className="column header">{this.props.children}</th>;
    } else {
      return <td className="column">{this.props.children}</td>;
    }
  }
}

export default Column;
