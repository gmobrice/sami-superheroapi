import * as React from "react";
import "./styles.scss";

class Paragraph extends React.Component {
  render() {
    return <p className="paragraph">{this.props.children}</p>;
  }
}

export default Paragraph;
