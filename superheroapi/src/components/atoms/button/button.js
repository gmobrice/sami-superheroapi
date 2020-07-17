import * as React from "react";
import "./styles.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.action(this.props.actionProp);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={(this.props.clear ? "clear" : "") + " button"}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
