import * as React from "react";
import "./styles.scss";

class Heading extends React.Component {
  render() {
    const CustomHeading = `h${this.props.priority}`;
    return (
      <CustomHeading className="heading">{this.props.children}</CustomHeading>
    );
  }
}

export default Heading;
